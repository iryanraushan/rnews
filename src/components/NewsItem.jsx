import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import logo from "../assets/Rnews.jpg";

const NewsItem = ({ title, description, src, url, author }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px", alignItems: "center" }}
    >
      <img
        src={src ? src : logo}
        style={{ height: "200px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {title == null ? "None" : title.slice(0, 50)}
        </h5>
        <p className="card-text" style={{ color: "#adb5bd" }}>
          {description == null
            ? "No Description Available`for this news, read more"
            : description.slice(0, 70)}
        </p>
        <p className="card-text">
          <IoPersonCircle
            fontSize="1.5em"
            style={{ margin: "0px 4px 0px 0px" }}
          />

          <small className="text-body-primary">
            {author == null ? "Unknown" : author.slice(0, 20)}
          </small>
        </p>

        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
