import { Query } from "../index";

const returnMyQuery = async (query: any, values?: any) =>
  console.log(query, values);

const getAll = async () =>
  Query("SELECT b.*, u.name  FROM blogs b JOIN users u ON u.id = b.authorid");

const getSingleBlog = async (id: number) =>
  Query(
    `SELECT b.*, u.name from Blogs b JOIN users u ON u.id = b.userid WHERE b.id = ${id}`
  );

const postBlog = async (columns: string, values: any[]) =>
  Query(`INSERT INTO blogs (${columns}) VALUE (?);`, values);

const editBlog = async (updatedBlog: string, id: number) =>
  Query(`UPDATE blogs SET ${updatedBlog} WHERE id = ${id}`);

const deleteBlog = async (id: number) =>
  Query(`DELETE FROM blogs WHERE id = ${id}`);

export default {
  getAll,
  getSingleBlog,
  postBlog,
  editBlog,
  deleteBlog
};
