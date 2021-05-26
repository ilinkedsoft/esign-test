import React, { useEffect, useState, ReactElement, FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export interface EFormInput {
  email: string
  name: string
}

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

interface EsignFormProps {
  handleRequest: (data: EFormInput) => void;
}

const EsignForm: FC<EsignFormProps> = ({handleRequest}): ReactElement => {
	const classes = useStyles();

  const { register, handleSubmit, formState: { errors } } = useForm<EFormInput>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: EFormInput) => {
    handleRequest(data);
  };

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Request E-Sign
				</Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						autoComplete="email"
						autoFocus
            {...register("email")}
					/>
          <p>{errors.email?.message}</p>
            
          <TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Name"
						type="text"
						id="name"
						autoComplete="name"
            {...register("name")}
					/>
          <p>{errors.name?.message}</p>
          
          <Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Request E-Sign
					</Button>
        </form>
			</div>
		</Container>
	);
};
export default EsignForm;