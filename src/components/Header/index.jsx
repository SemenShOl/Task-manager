import React from "react";
import Button from "@mui/material/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/auth";
import { clearPosts } from "../../redux/slices/posts";
import { TbNotes } from "react-icons/tb";
import { MdTaskAlt } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { clearTodos } from "../../redux/slices/todos";
export const Header = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => !!state.auth.data);
  const userData = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();
  const onClickLogout = () => {
    const ans = window.confirm("Вы действительно хотите выйти?");
    if (ans) {
      dispatch(logout());
      dispatch(clearPosts());
      dispatch(clearTodos());
      navigate("/login");
    }
  };
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.accountInfo}>
          <div className={styles.userInfo}>{isAuth && userData.fullName}</div>
          <div className={styles.buttons}>
            <Button onClick={onClickLogout} variant="contained" color="error">
              Выйти
            </Button>
          </div>
        </div>
        <div className={styles.menu}>
          <Link to="/" className={styles.menu_item}>
            <TbNotes size={25} />
            <span>Конспекты</span>
          </Link>
          <Link to="/todos" className={styles.menu_item}>
            <MdTaskAlt size={25} />
            <span>Задачи</span>
          </Link>
          <Link to="/calendar" className={styles.menu_item}>
            <FaCalendarAlt size={25} />
            <span>Календарь</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
