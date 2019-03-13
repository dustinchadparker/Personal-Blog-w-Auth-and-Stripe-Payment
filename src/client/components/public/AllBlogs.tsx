import * as React from "react";
import { json } from "../../utils/api";

import BlogPreviewCard from "./BlogPreviewCard";

export default class AllBlogs extends React.Component<
  IAllBlogsProps,
  IAllBlogsState
> {
  constructor(props: IAllBlogsProps) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  async componentDidMount() {
    try {
      let blogs = await json("/api/blogs");
      this.setState({ blogs });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <main className="container">
        <section className="row my-3">
          {this.state.blogs.map(blog => (
            <BlogPreviewCard key={blog.id} blog={blog} />
          ))}
        </section>
      </main>
    );
  }
}

interface IAllBlogsProps {}

interface IAllBlogsState {
  blogs: {
    id: number;
    title: string;
    body: string;
    authorid: number;
    _created: Date;
    name: string;
  }[];
}
