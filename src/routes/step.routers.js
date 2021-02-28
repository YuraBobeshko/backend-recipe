import step from "../controllers/step.controllers";

export default (app) => {
  const router = require("express").Router();

  router.get("/", step.findAll);

  router.post("/add", step.create);

  router.get("/:id", step.getOne);

  router.put("/:id", step.update);

  router.delete("/:id", step.destroy);

  app.use("/api/steps", router);
};
