import dish from "../controllers/dish.controllers";

export default (app) => {
  const router = require("express").Router();

  router.get("/", dish.findAll);

  router.post("/add", dish.create);

  router.get("/:id", dish.getOne);

  router.put("/:id", dish.update);

  router.delete("/:id", dish.destroy);

  app.use("/api/dishes", router);
};
