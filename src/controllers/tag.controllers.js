import { Tag, Sequelize } from "../models";

const Op = Sequelize.Op;

const create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const tag = {
    name: req.body.name,
    icon: req.body.icon,
  };

  Tag.create(tag)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Tag.",
      });
    });
};

const update = (req, res) => {
  const id = req.params.id;

  Tag.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tag was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tag with id=${id}. Maybe Tag was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tag with id=" + id,
      });
    });
};

const getOne = (req, res) => {
  return Tag.findByPk(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tags.",
      });
    });
};

const destroy = (req, res) => {
  const id = req.params.id;

  Tag.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tag was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tag with id=${id}. Maybe Tag was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tag with id=" + id,
      });
    });
};

const findAll = (req, res) => {
  //   const title = req.query.title;
  //   var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  //   Tag.findAll({ where: condition })
  Tag.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tags.",
      });
    });
};

export default { create, update, getOne, destroy, findAll };
