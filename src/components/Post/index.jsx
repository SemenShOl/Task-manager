import React from "react";
import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import styles from "./Post.module.scss";
import { PostSkeleton } from "./Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchRemovePosts } from "../../redux/slices/posts";
export const Post = ({
  _id,
  title,
  createdAt,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  const dispatch = useDispatch();

  // if (isLoading) {
  //   return <PostSkeleton />;
  // }
  const onClickRemove = () => {
    dispatch(fetchRemovePosts(_id));
  };

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      <div className={styles.wrapper}>
        <div className={styles.indention}>
          <h2
            className={clsx(styles.title, { [styles.titleFull]: isFullPost })}
          >
            <Link to={`/posts/${_id}`}>{title}</Link>
          </h2>
        </div>
      </div>
      {isEditable ? (
        <div className={styles.editButtons}>
          <Link to={`/posts/${_id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton
            onClick={onClickRemove}
            color="secondary"
            className={styles.deleteButton}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ) : null}
    </div>
  );
};
