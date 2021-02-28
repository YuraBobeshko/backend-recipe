import user from "../controllers/user.controllers";

export default (app) => {
  const router = require("express").Router();

  router.get("/", user.findAll);

  router.post("/add", user.create);

  router.get("/:id", user.getOne);

  router.put("/:id", user.update);

  router.delete("/:id", user.destroy);

  app.use("/api/users", router);
};
