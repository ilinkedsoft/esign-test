import React, { ReactElement, FC } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store/store';
import EsignForm, { EFormInput } from "../../components/form";
import { sendRequest } from "./esignSlice";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    paddingTop: 30,  
    textAlign: 'center',
    minHeight: 'calc(100vh - 158px)'
  },

  error: {
    fontSize: '18px',
    color: '#ff0000',
  }
});

const EsignPage: FC<any> = (): ReactElement => {
  const classes = useStyles();
  let history = useHistory();

	const dispatch = useAppDispatch();
	const loading: boolean = useAppSelector((state: RootState) => state.esign.loading);
  const error: string = useAppSelector((state: RootState) => state.esign.error);

  const handleSubmit = (data: EFormInput) => {
    dispatch(sendRequest(data)).then(() => {
      console.log('Success!!!');
      history.push('/success');
    });
  }

	return (
    <div className={classes.root}>
      {loading ? <CircularProgress /> : (
        <React.Fragment>
          {error ? <p className={classes.error}>Something went wrong</p> : null}
          <EsignForm handleRequest={handleSubmit}/>
        </React.Fragment>
      )}
    </div>
	);
};
export default EsignPage;