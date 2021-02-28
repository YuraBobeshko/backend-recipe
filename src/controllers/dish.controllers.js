import { Dish, Sequelize } from "../models";

const Op = Sequelize.Op;

const create = (req, res) => {
  if (!req.body.title && !req.body.discribe) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const dish = {
    title: req.body.title,
    discribe: req.body.discribe,
    rating: req.body.rating,
    modelId: req.body.modelId,
    userId: req.body.userId,
    target: req.body.target,
  };

  Dish.create(dish)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Dish.",
      });
    });
};

const update = (req, res) => {
  const id = req.params.id;

  Dish.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Dish was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Dish with id=${id}. Maybe Dish was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Dish with id=" + id,
      });
    });
};

const getOne = (req, res) => {
  return Dish.findByPk(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving dishs.",
      });
    });
};

const destroy = (req, res) => {
  const id = req.params.id;

  Dish.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Dish was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Dish with id=${id}. Maybe Dish was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Dish with id=" + id,
      });
    });
};

const findAll = (req, res) => {
  //   const title = req.query.title;
  //   var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  //   Dish.findAll({ where: condition })
  Dish.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving dishs.",
      });
    });
};

export default { create, update, getOne, destroy, findAll };
