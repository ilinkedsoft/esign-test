import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store';
import axios from '../../services/axios';
import { EFormInput } from '../../components/form/index';

export interface EsignState {
  success: boolean;
  loading: boolean;
  error: string;
}

const initialState: EsignState = {
  success: false,
  loading: false,
  error: '',
};

export const esignSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setLoading: (state: EsignState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    sendRequestSuccess: (state: EsignState, action: PayloadAction<any>) => {
      state.success = action.payload.data;
    },
    sendRequestFailed: (state: EsignState, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setLoading,
  sendRequestSuccess,
  sendRequestFailed,
} = esignSlice.actions;

export const sendRequest = (data: EFormInput): AppThunk<Promise<boolean>> => (
  dispatch,
  getState
) => {
  return new Promise((resolve) => {
    dispatch(setLoading(true));
    axios.post(`/send/`, data)
    .then(res  => {
      dispatch(setLoading(false));
      dispatch(sendRequestSuccess(res.data));
      resolve(true);
    })
    .catch(err => {
      dispatch(setLoading(false));
      dispatch(sendRequestFailed(err.response.data.message));
    });
  });
};

export default esignSlice.reducer;