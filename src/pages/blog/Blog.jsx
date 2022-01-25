import PostsList from "../../components/posts/PostsList";
import Sidebar from "../../components/sidebar/Sidebar";
import "./blog.scss";
import BlogHeader from "./BlogHeader";
import SearchForm from "./SearchForm";

const Blog = () => {
  return (
    <section className="blog">
      <BlogHeader />
      <SearchForm />
      <div className="blog-container">
        <PostsList />
        <Sidebar />
      </div>
    </section>
  );
};

export default Blog;
