import * as React from "react";
import { json } from "../../utils/api";
import { RouteComponentProps } from "react-router-dom";

import BlogCard from "./BlogCard";

export default class SingleBlog extends React.Component<
  ISingleBlogProps,
  ISingleBlogState
> {
  constructor(props: ISingleBlogProps) {
    super(props);
    this.state = {
      blog: {
        id: null,
        title: null,
        body: null,
        authorid: null,
        _created: null,
        name: null
      },
      tags: []
    };
  }

  async componentWillMount() {
    let id = this.props.match.params.id;
    try {
      let blog = await json(`/api/blogs/${id}`);
      let tags = await json(`/api/blogtags/${id}`);
      this.setState({ blog, tags });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <main className="container">
        <section className="row my-3">
          <div className="col-md-12">
            {console.log(this.state.blog)}
            <BlogCard blog={this.state.blog} tags={this.state.tags} />
          </div>
        </section>
      </main>
    );
  }
}

interface ISingleBlogProps extends RouteComponentProps<{ id: string }> {}

interface ISingleBlogState {
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
