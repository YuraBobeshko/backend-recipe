import { Kitchen, Sequelize } from "../models";

const Op = Sequelize.Op;

const create = (req, res) => {
  if (!req.body.title && !req.body.discribe) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const kitchen = {
    title: req.body.title,
    discribe: req.body.discribe,
    rating: req.body.rating,
    modelId: req.body.modelId,
    userId: req.body.userId,
    target: req.body.target,
  };

  Kitchen.create(kitchen)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Kitchen.",
      });
    });
};

const update = (req, res) => {
  const id = req.params.id;

  Kitchen.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Kitchen was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Kitchen with id=${id}. Maybe Kitchen was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Kitchen with id=" + id,
      });
    });
};

const getOne = (req, res) => {
  return Kitchen.findByPk(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving kitchens.",
      });
    });
};

const destroy = (req, res) => {
  const id = req.params.id;

  Kitchen.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Kitchen was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Kitchen with id=${id}. Maybe Kitchen was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Kitchen with id=" + id,
      });
    });
};

const findAll = (req, res) => {
  //   const title = req.query.title;
  //   var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  //   Kitchen.findAll({ where: condition })
  Kitchen.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving kitchens.",
      });
    });
};

export default { create, update, getOne, destroy, findAll };
