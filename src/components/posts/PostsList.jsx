import { articliesData } from "../../dummyData";
import PostItem from "./PostItem";
import "./posts-list.scss";

const PostsList = () => {
  return (
    <section className="posts-list">
      {articliesData.map((item) => (
        <PostItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default PostsList;
