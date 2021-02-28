import comment from "../controllers/comment.controllers";

export default (app) => {
  const router = require("express").Router();

  router.get("/", comment.findAll);

  router.post("/add", comment.create);

  router.get("/:id", comment.getOne);

  router.put("/:id", comment.update);

  router.delete("/:id", comment.destroy);

  app.use("/api/comments", router);
};
