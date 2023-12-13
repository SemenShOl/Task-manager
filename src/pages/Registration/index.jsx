import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { fetchUserRegister } from "../../redux/slices/auth";

import styles from "./Login.module.scss";

export const Registration = () => {
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.data?.token);
  const authInfo = useSelector((state) => state.auth);
  const isAuth = localStorage.getItem("token");
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });
  console.log("authToken: " + authToken);

  const onSubmit = (values) => {
    console.log(values);
    dispatch(fetchUserRegister(values));
  };
  if (authInfo.status === "errorRegistr") {
    alert("Такой пользователь уже зарегистрирован");
  }
  if (authToken) {
    window.localStorage.setItem("token", authToken);
    return <Navigate to="/" />;
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
      {/* <div className={styles.root}> */}
      <Paper classes={{ root: styles.root }}>
        <Typography classes={{ root: styles.title }} variant="h5">
          Создание аккаунта
        </Typography>
        <div className={styles.avatar}>
          <Avatar sx={{ width: 100, height: 100 }} />
        </div>
        <TextField
          className={styles.field}
          label="Полное имя"
          fullWidth
          {...register("fullName")}
        />
        <TextField
          className={styles.field}
          label="E-Mail"
          fullWidth
          {...register("email")}
        />
        <TextField
          className={styles.field}
          label="Пароль"
          fullWidth
          {...register("password")}
        />
        <Button
          disabled={!formState.isValid}
          size="large"
          variant="contained"
          fullWidth
          type="submit"
        >
          Зарегистрироваться
        </Button>
        <div className={styles.createAccount}>
          <span>Уже есть аккаунт?</span>
          <Link to="/login">
            <Button variant="outlined">Войти</Button>
          </Link>
        </div>
      </Paper>
      {/* </div> */}
    </form>
  );
};
