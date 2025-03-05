import React from "react";
import dishes from "../assets/imgs/dishes.png";
import {
  TagOutlined,
  UserOutlined,
  CommentOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
const BlogCard = () => {
  const data = {
    type: "Food",
    author: "Admin",
    img: dishes,
    comments: 65,
    title:
      "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    url: "",
  };
  return (
    <div className="card p-0 BlogCard" style={{ width: 424 }}>
      <img
        src={data.img}
        className="card-img-top position-relative"
        alt="..."
      />
      <span className="position-absolute top-50 ms-4 fs-bold BlogCard_date rounded"
      >
        {"18 NOV"}
      </span>
      <div className="card-body absolute_center">
        <p className="card-text d-flex gap-3">
          <span>
            {" "}
            <TagOutlined /> {data.type}
          </span>
          <span>
            {" "}
            <UserOutlined /> {data.author}
          </span>
          <span>
            <CommentOutlined /> {data.comments} Comment
          </span>
        </p>
        <h5 className="card-title">{data.title}</h5>
        <a
          href={data.url}
          className="text-success text-decoration-none absolute_center flex-row"
        >
          Read more <ArrowRightOutlined className="ms-3" />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
