import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchUserLogin } from "../../redux/slices/auth";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => !!state.auth.data);
  const authData = useSelector((state) => state.auth.data);
  const { register, handleSubmit, setError, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    dispatch(fetchUserLogin(values));
  };

  if (authData?.token) {
    window.localStorage.setItem("token", authData?.token);
  }

  if (isAuth) {
    return <Navigate to="/" />;
  }
  // useEffect(() => {}, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
      <Paper classes={{ root: styles.root }}>
        <Typography classes={{ root: styles.title }} variant="h5">
          Вход в аккаунт
        </Typography>
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(formState.errors.email?.message)}
          helperText={formState.errors.email?.message}
          fullWidth
          {...register("email", { required: "Укажите почту" })}
        />
        <TextField
          className={styles.field}
          label="Пароль"
          error={Boolean(formState.errors.password?.message)}
          helperText={formState.errors.password?.message}
          fullWidth
          {...register("password", { required: "Укажите пароль" })}
        />
        <Button
          // disabled={!formState.isValid}
          type="submit"
          size="large"
          variant="contained"
          fullWidth
        >
          Войти
        </Button>
        <div className={styles.createAccount}>
          <span>Еще нет аккаунта?</span>
          <Link to="/register">
            <Button variant="outlined">Создать аккаунт</Button>
          </Link>
        </div>
      </Paper>
    </form>
  );
};
