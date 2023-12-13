import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import Markdown from "react-markdown";
import { BigPost } from "../../components/BigPost/index";
import { CircularProgress } from "@mui/material";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { Header } from "../../components/Header/index";
import cl from "./FullPost.module.scss";
export const FullPost = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`/posts/${params.id}`)
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
        console.log("Данные пришли");
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <MainContainer>
      <Header />
      <div className={cl.wrapper}>
        <BigPost
          _id={data._id}
          title={data.title}
          user={{
            fullName: data.user.fullName,
          }}
          createdAt={"12 июня 2022 г."}
          viewsCount={data.viewsCount}
          commentsCount={3}
          tags={data.tags}
          isFullPost
        >
          <Markdown>{data.text}</Markdown>
        </BigPost>
      </div>
    </MainContainer>
  );
};
