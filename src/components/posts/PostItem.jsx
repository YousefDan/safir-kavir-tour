import "./post-item.scss";
import { Link } from "react-router-dom";

const PostItem = ({ item }) => {
  return (
    <Link style={{ textDecoration: "none", display: "block" }} to={`/blog/posts/${item.id}`}>
      <div className="post-item">
        <div className="img-wrapper">
          <img src={item.img} alt="" />
        </div>
        <div className="content-wrapper">
          <div className="title">{item.title}</div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            نیاز.....
          </p>
          <div className="information">
            <div className="author">
              <i className="fas fa-pencil-alt"></i>
              {item.author}
            </div>
            <div className="publish-date">
              <i className="fas fa-calendar-alt"></i>
              {item.publishedDate}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
