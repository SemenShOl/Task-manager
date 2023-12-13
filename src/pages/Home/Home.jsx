import React, { useEffect } from "react";
// import Grid from "@mui/material/Grid";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../components/Post";
import { fetchGetPosts } from "../../redux/slices/posts";
import cl from "./Home.module.scss";
import { Navigate, Link } from "react-router-dom";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { Header } from "../../components";
import { MdNoteAdd } from "react-icons/md";
import { IconContext } from "react-icons";
export const Home = () => {
  const isAuth = useSelector((state) => !!state.auth.data);
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchGetPosts());
  }, []);
  const isPostsLoading = posts.status === "loading";

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <MainContainer>
      <Header />
      <div className={cl.wrapper}>
        {isPostsLoading ? (
          <CircularProgress />
        ) : (
          posts.items.map((obj, index) => (
            <div className={cl.cell}>
              <Post
                _id={obj._id}
                title={obj.title}
                user={{
                  fullName: obj.user.fullName,
                }}
                tags={obj.tags}
                isEditable
              />
            </div>
          ))
        )}
      </div>
      <div className={cl.newSummary}>
        <Link to="/addpost">
          <IconContext.Provider
            value={{ color: "#black", className: cl.newSumIcon }}
          >
            <MdNoteAdd />
          </IconContext.Provider>
        </Link>
      </div>
    </MainContainer>
  );
};
