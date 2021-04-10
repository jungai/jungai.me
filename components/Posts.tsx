import { FC } from "react";
import Post from "./Post";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const Posts: FC = () => (
  <>
    {arr.map((a) => (
      <Post key={a} />
    ))}
  </>
);

export default Posts;
