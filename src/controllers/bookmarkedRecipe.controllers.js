import { BookmarkedRecipe, Sequelize } from "../models";

const Op = Sequelize.Op;

const create = (req, res) => {
  if (!req.body.title && !req.body.discribe) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const bookmarkedRecipe = {
    title: req.body.title,
    discribe: req.body.discribe,
    rating: req.body.rating,
    modelId: req.body.modelId,
    userId: req.body.userId,
    target: req.body.target,
  };

  BookmarkedRecipe.create(bookmarkedRecipe)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the BookmarkedRecipe.",
      });
    });
};

const update = (req, res) => {
  const id = req.params.id;

  BookmarkedRecipe.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "BookmarkedRecipe was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update BookmarkedRecipe with id=${id}. Maybe BookmarkedRecipe was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating BookmarkedRecipe with id=" + id,
      });
    });
};

const getOne = (req, res) => {
  return BookmarkedRecipe.findByPk(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookmarkedRecipes.",
      });
    });
};

const destroy = (req, res) => {
  const id = req.params.id;

  BookmarkedRecipe.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "BookmarkedRecipe was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete BookmarkedRecipe with id=${id}. Maybe BookmarkedRecipe was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete BookmarkedRecipe with id=" + id,
      });
    });
};

const findAll = (req, res) => {
  //   const title = req.query.title;
  //   var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  //   BookmarkedRecipe.findAll({ where: condition })
  BookmarkedRecipe.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookmarkedRecipes.",
      });
    });
};

export default { create, update, getOne, destroy, findAll };
