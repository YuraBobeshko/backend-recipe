import kitchen from "../controllers/kitchen.controllers";

export default (app) => {
  const router = require("express").Router();

  router.get("/", kitchen.findAll);

  router.post("/add", kitchen.create);

  router.get("/:id", kitchen.getOne);

  router.put("/:id", kitchen.update);

  router.delete("/:id", kitchen.destroy);

  app.use("/api/kitchens", router);
};
