import React from "react";
import clsx from "clsx";
import styles from "./BigPost.module.scss";
import { UserInfo } from "../UserInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchRemovePosts } from "../../redux/slices/posts";
export const BigPost = ({
  _id,
  title,
  createdAt,
  user,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    console.log(_id);
    dispatch(fetchRemovePosts(_id));
  };

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      <div className={styles.wrapper}>
        <UserInfo {...user} additionalText={createdAt} />
        <div className={styles.indention}>
          <h2 className={styles.titleFull}>
            {isFullPost ? title : <a href={`/posts/${_id}`}>{title}</a>}
          </h2>

          {children && <div className={styles.content}>{children}</div>}
        </div>
      </div>
    </div>
  );
};
