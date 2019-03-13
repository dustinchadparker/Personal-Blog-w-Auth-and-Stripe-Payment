import * as React from "react";
import * as moment from "moment";
import { Link } from "react-router-dom";

export default class BlogPreviewCard extends React.Component<
  IBlogPreviewCardProps,
  IBlogPreviewCardState
> {
  render() {
    const { id, title, name, _created } = this.props.blog;

    return (
      <article className="col-md-4">
        <div className="card m-2 border border-primary rounded shadow">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {moment(_created).format("MMMM Do, YYYY")}
            </h6>
            <p className="card-text text-danger">{`${name}`}</p>
            <Link to={`/single/${id}`} className="btn btn-secondary shadow-sm">
              View Blog
            </Link>
          </div>
        </div>
      </article>
    );
  }
}

interface IBlogPreviewCardProps {
  blog: {
    id: number;
    title: string;
    body: string;
    authorid: number;
    _created: Date;
    name: string;
  };
}

interface IBlogPreviewCardState {}
