import tag from "../controllers/tag.controllers";

export default (app) => {
  const router = require("express").Router();

  router.get("/", tag.findAll);

  router.post("/add", tag.create);

  router.get("/:id", tag.getOne);

  router.put("/:id", tag.update);

  router.delete("/:id", tag.destroy);

  app.use("/api/tags", router);
};
