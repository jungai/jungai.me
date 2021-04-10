import { FC } from "react";

const Post: FC = () => (
  <div className="flex flex-col border-b border-gray-300 mb-2 p-2">
    <h2 className="text-base md:text-xl font-semibold">Title</h2>
    <p className="text-sm md:text-base leading-relaxed mb-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
      consectetur non ullam ducimus eum officia a magni repellat soluta? Quaerat
      ducimus esse iusto dolore dolor saepe accusamus in ea laborum.
    </p>

    <a href="#" className="self-end text-sm cursor-pointer underline">
      อ่าน..
    </a>
  </div>
);

export default Post;
