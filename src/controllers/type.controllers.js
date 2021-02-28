import { Type, Sequelize } from "../models";

const Op = Sequelize.Op;

const create = (req, res) => {
  if (!req.body.title && !req.body.discribe) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const type = {
    title: req.body.title,
    discribe: req.body.discribe,
    rating: req.body.rating,
    modelId: req.body.modelId,
    userId: req.body.userId,
    target: req.body.target,
  };

  Type.create(type)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Type.",
      });
    });
};

const update = (req, res) => {
  const id = req.params.id;

  Type.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Type was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Type with id=${id}. Maybe Type was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Type with id=" + id,
      });
    });
};

const getOne = (req, res) => {
  return Type.findByPk(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving types.",
      });
    });
};

const destroy = (req, res) => {
  const id = req.params.id;

  Type.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Type was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Type with id=${id}. Maybe Type was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Type with id=" + id,
      });
    });
};

const findAll = (req, res) => {
  //   const title = req.query.title;
  //   var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  //   Type.findAll({ where: condition })
  Type.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving types.",
      });
    });
};

export default { create, update, getOne, destroy, findAll };
