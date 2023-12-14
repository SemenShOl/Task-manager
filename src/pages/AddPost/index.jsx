import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import styles from "./AddPost.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import axios from "../../axios.js";
import { MainContainer } from "../../components/MainContainer/MainContainer.jsx";
import { Header } from "./../../components/Header/index";

export const AddPost = () => {
  const isAuth = useSelector((state) => !!state.auth.data);
  const params = useParams();
  const navigate = useNavigate();
  const imageUrl = "";
  const [text, setText] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [isLoading, setIsLoading] = React.useState("");
  const isEditig = !!params?.id;
  useEffect(() => {
    const func = async () => {
      if (isEditig) {
        try {
          const { data } = await axios.get(`/posts/${params.id}`);
          setText(data.text);
          setTitle(data.title);
        } catch (e) {
          console.log(e);
          alert("Не удалось открыть статью для редактирования");
        }
      }
    };
    func();
  }, []);

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  const onSubmit = async () => {
    try {
      const fields = {
        text,
        title,
      };
      setIsLoading(true);
      const { data } = isEditig
        ? await axios.patch(`/posts/${params.id}`, fields)
        : await axios.post("/posts", fields);

      const id = data._id;
      navigate(`/`);
    } catch (e) {
      console.warn(e);
      alert("Ошибка создания статьи");
    }
  };

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );
  if (!isAuth && !window.localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }

  return (
    <MainContainer>
      <Header />
      <div className={styles.wrapper}>
        {/* <Paper style={{ padding: 30 }}>
         */}
        <div>
          <TextField
            classes={{ root: styles.title }}
            variant="standard"
            placeholder="Заголовок статьи..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />

          <SimpleMDE
            className={styles.editor}
            value={text}
            onChange={onChange}
            options={options}
          />
          <div className={styles.buttons}>
            <Button onClick={onSubmit} size="large" variant="contained">
              Сохранить
            </Button>
            <Link to="/">
              <Button size="large">Отмена</Button>
            </Link>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
