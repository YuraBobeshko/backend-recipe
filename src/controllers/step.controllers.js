import { Step, Sequelize } from "../models";

const Op = Sequelize.Op;

const create = (req, res) => {
  if (!req.body.title && !req.body.discribe) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const step = {
    title: req.body.title,
    discribe: req.body.discribe,
    rating: req.body.rating,
    modelId: req.body.modelId,
    userId: req.body.userId,
    target: req.body.target,
  };

  Step.create(step)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Step.",
      });
    });
};

const update = (req, res) => {
  const id = req.params.id;

  Step.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Step was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Step with id=${id}. Maybe Step was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Step with id=" + id,
      });
    });
};

const getOne = (req, res) => {
  return Step.findByPk(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving steps.",
      });
    });
};

const destroy = (req, res) => {
  const id = req.params.id;

  Step.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Step was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Step with id=${id}. Maybe Step was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Step with id=" + id,
      });
    });
};

const findAll = (req, res) => {
  //   const title = req.query.title;
  //   var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  //   Step.findAll({ where: condition })
  Step.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving steps.",
      });
    });
};

export default { create, update, getOne, destroy, findAll };
