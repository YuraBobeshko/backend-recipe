import recipe from "../controllers/recipe.controllers";

export default (app) => {
  const router = require("express").Router();

  router.get("/", recipe.findAll);

  router.post("/add", recipe.create);

  router.get("/:id", recipe.getOne);

  router.put("/:id", recipe.update);

  router.delete("/:id", recipe.destroy);

  app.use("/api/recipes", router);
};
