import { Recipe, Sequelize } from "../models";

const Op = Sequelize.Op;

const create = (req, res) => {
  if (!req.body.title && !req.body.discribe) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const recipe = {
    title: req.body.title,
    discribe: req.body.discribe,
    rating: req.body.rating,
    modelId: req.body.modelId,
    userId: req.body.userId,
    target: req.body.target,
  };

  Recipe.create(recipe)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the recipe.",
      });
    });
};

const update = (req, res) => {
  const id = req.params.id;

  Recipe.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Recipe was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update recipe with id=${id}. Maybe recipe was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating recipe with id=" + id,
      });
    });
};

const getOne = (req, res) => {
  return Recipe.findByPk(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving recipes.",
      });
    });
};

const destroy = (req, res) => {
  const id = req.params.id;

  Recipe.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Recipe was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete recipe with id=${id}. Maybe recipe was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Recipe with id=" + id,
      });
    });
};

const findAll = (req, res) => {
  //   const title = req.query.title;
  //   var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  //   Recipe.findAll({ where: condition })
  Recipe.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving recipes.",
      });
    });
};

export default { create, update, getOne, destroy, findAll };
