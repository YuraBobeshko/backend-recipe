export default (app) => {
  const comments = require("../controllers/comment");

  const router = require("express").Router();

  // Retrieve all Comments
  router.get("/", comments.findAll);

  // Create a new Comment
  router.post("/add", comments.create);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  app.use("/api/comments", router);
};
