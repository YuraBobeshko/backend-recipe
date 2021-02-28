import bookmarkedDish from "../controllers/bookmarkedDish.controllers";

export default (app) => {
  const router = require("express").Router();

  router.get("/", bookmarkedDish.findAll);

  router.post("/add", bookmarkedDish.create);

  router.get("/:id", bookmarkedDish.getOne);

  router.put("/:id", bookmarkedDish.update);

  router.delete("/:id", bookmarkedDish.destroy);

  app.use("/api/bookmarkedDishes", router);
};
