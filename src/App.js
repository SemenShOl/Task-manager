import Container from "@mui/material/Container";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe } from "./redux/slices/auth";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { TodosHome } from "./pages/TodosHome/TodosHome";
import { CalendarPage } from "./pages/Calendar/CalendaPager";

function App() {
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  useEffect(() => {
    console.log("App renders..");
    dispatch(fetchAuthMe());
  }, []);
  console.log("isAuth: ", isAuth);
  return (
    <>
      {/* // <MainContainer> */}
      {/* {isAuth ? <Header /> : null} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/todos/:date" element={<TodosHome />} />
        <Route path="/posts/:id" element={<FullPost />} />
        <Route path="/posts/:id/edit" element={<AddPost />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      {/* </MainContainer> */}
    </>
  );
}

export default App;
