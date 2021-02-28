import type from "../controllers/type.controllers";

export default (app) => {
  const router = require("express").Router();

  router.get("/", type.findAll);

  router.post("/add", type.create);

  router.get("/:id", type.getOne);

  router.put("/:id", type.update);

  router.delete("/:id", type.destroy);

  app.use("/api/types", router);
};
