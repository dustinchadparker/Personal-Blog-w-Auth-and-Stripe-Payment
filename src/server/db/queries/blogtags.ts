import { Query } from "../index";

const getBlogTags = async (blogid: number) =>
  Query(
    `SELECT t.name FROM blogtags bt JOIN tags t ON t.id = bt.tagid WHERE bt.blogid = ${blogid};`
  );

const insert = async (values: Array<Number>) =>
  Query(`INSERT INTO blogtags (blogid, tagid) VALUE (?)`, values);

export default {
  getBlogTags,
  insert
};
