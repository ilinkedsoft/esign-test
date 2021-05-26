import React, { ReactElement, FC } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: 30,  
    textAlign: 'center',
    minHeight: 'calc(100vh - 158px)'
  },
});

const Success: FC<any> = (): ReactElement => {
  const classes = useStyles();

	return (
    <div className={classes.root}>
      <React.Fragment>
        <p>Successfully sent e-sign doc to user!</p>
      </React.Fragment>
    </div>
	);
};
export default Success;