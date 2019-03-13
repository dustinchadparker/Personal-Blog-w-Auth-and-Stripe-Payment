import * as React from "react";
import * as moment from "moment";
import { Link } from "react-router-dom";

const BlogCard: React.SFC<IBlogCardProps> = props => {
  const { title, name, _created, body } = props.blog;

  return (
    <>
      <h3 className="text-primary">{title}</h3>
      <h4 className="text-danger">{`${name}`}</h4>
      <h5 className="text-warning bg-dark p-1 d-inline-block">
        {moment(_created).format("MMMM Do, YYYY")}
      </h5>
      <div className="bade-container my-2">
        {props.tags.map(tag => (
          <span className="badge badge-success text-dark p-1 my-1 mx-2 border border-danger shadow-sm">
            {tag.name}
          </span>
        ))}
      </div>
      <p className="my-1">{body}</p>
      <Link
        to="/"
        className="btn btn-secondary border border-success rounded shadow mt-1"
      >
        Go Back
      </Link>
    </>
  );
};

interface IBlogCardProps {
  blog: {
    id: number;
    title: string;
    body: string;
    authorid: number;
    _created: Date;
    name: string;
  };
  tags: { name: string }[];
}

export default BlogCard;
