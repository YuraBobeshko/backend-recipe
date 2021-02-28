import bookmarkedRecipe from "../controllers/bookmarkedRecipe.controllers";

export default (app) => {
  const router = require("express").Router();

  router.get("/", bookmarkedRecipe.findAll);

  router.post("/add", bookmarkedRecipe.create);

  router.get("/:id", bookmarkedRecipe.getOne);

  router.put("/:id", bookmarkedRecipe.update);

  router.delete("/:id", bookmarkedRecipe.destroy);

  app.use("/api/bookmarkedRecipes", router);
};
