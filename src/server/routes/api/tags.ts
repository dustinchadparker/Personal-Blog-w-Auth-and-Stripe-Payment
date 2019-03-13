import * as express from "express";

import DB from "../../db";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let tags = await DB.Tags.getAll();
    res.json(tags);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
