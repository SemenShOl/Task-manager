import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../components/Post";
import { fetchGetPosts } from "./../redux/slices/posts";

export const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  console.log("Posts: ");
  console.log(posts);
  useEffect(() => {
    dispatch(fetchGetPosts());
  }, []);
  const isPostsLoading = posts.status === "loading";
  return (
    <>
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        color="primary"
      >
        <Grid xs={8} item></Grid>
      </Grid>
    </>
  );
};
