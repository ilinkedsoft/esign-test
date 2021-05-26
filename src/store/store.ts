import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import esignReducer from '../pages/Esign/esignSlice';

export const store = configureStore({
  reducer: {
    esign: esignReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
