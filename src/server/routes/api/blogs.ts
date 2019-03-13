import * as express from "express";
import DB from "../../db";
import { RequestHandler } from "express-serve-static-core";

const router = express.Router();

const isAdmin: RequestHandler = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.sendStatus(401);
  } else {
    return next();
  }
};

router.get("/", async (req, res, next) => {
  try {
    let blogs = await DB.Blogs.getAll();
    res.send(blogs);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", isAdmin, async (req, res, next) => {
  let id = req.params.id;

  try {
    let [blog] = await DB.Blogs.getSingleBlog(id);
    res.send(blog);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/", isAdmin, async (req, res, next) => {
  try {
    let blog = { ...req.body };
    delete blog.tagid;
    let columns = Object.keys(blog).join(", ");
    let values = Object["values"](blog);
    let result: any = await DB.Blogs.postBlog(columns, values);
    await DB.Blogtags.insert([result.insertId, req.body.tagid]);
    res.json({ message: "Blogged!" });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/:id", isAdmin, async (req, res, next) => {
  let id = req.params.id;
  let blog = req.body;
  try {
    // {
    //     title: "derp",
    //     body: "herp",
    //     authorid: 1
    // }

    //title = "derp", body = "herp", authorid = 1

    //UPDATE Blogs SET title = "derp", body= "herp", authorid = 1 WHERE id = 1;

    let placeholderColumns = Object.keys(blog).map(key => [
      `${key}="${blog[key]}"`
    ]);
    let updateBlog = placeholderColumns.join(", ");
    await DB.Blogs.editBlog(updateBlog, id);
    res.json("edited!");
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", isAdmin, async (req, res, next) => {
  let id = req.params.id;
  try {
    await DB.Blogs.deleteBlog(id);
    res.json({ message: "Blogged!" });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
