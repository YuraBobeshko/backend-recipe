import bookmarkedUser from "../controllers/bookmarkedUser.controllers";

export default (app) => {
  const router = require("express").Router();

  router.get("/", bookmarkedUser.findAll);

  router.post("/add", bookmarkedUser.create);

  router.get("/:id", bookmarkedUser.getOne);

  router.put("/:id", bookmarkedUser.update);

  router.delete("/:id", bookmarkedUser.destroy);

  app.use("/api/bookmarkedUsers", router);
};
