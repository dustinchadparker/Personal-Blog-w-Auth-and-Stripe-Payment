import * as express from "express";
import * as passport from "passport";

import blogsRouter from "./blogs";
import usersRouter from "./users";
import blogtagsRouter from "./blogtags";
import tagsRouter from "./tags";

const router = express.Router();

router.use((req, res, next) => {
  passport.authenticate("bearer", { session: false }, (err, user, info) => {
    if (user) req.user = user;
    return next();
  })(req, res, next);
});

router.use("/blogs", blogsRouter);
router.use("/users", usersRouter);
router.use("/blogtags", blogtagsRouter);
router.use("/tags", tagsRouter);

export default router;
