import { BookmarkedDish, Sequelize } from "../models";

const Op = Sequelize.Op;

const create = (req, res) => {
  if (!req.body.title && !req.body.discribe) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const bookmarkedDish = {
    title: req.body.title,
    discribe: req.body.discribe,
    rating: req.body.rating,
    modelId: req.body.modelId,
    userId: req.body.userId,
    target: req.body.target,
  };

  BookmarkedDish.create(bookmarkedDish)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the BookmarkedDish.",
      });
    });
};

const update = (req, res) => {
  const id = req.params.id;

  BookmarkedDish.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "BookmarkedDish was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update BookmarkedDish with id=${id}. Maybe BookmarkedDish was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating BookmarkedDish with id=" + id,
      });
    });
};

const getOne = (req, res) => {
  return BookmarkedDish.findByPk(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookmarkedDishs.",
      });
    });
};

const destroy = (req, res) => {
  const id = req.params.id;

  BookmarkedDish.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "BookmarkedDish was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete BookmarkedDish with id=${id}. Maybe BookmarkedDish was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete BookmarkedDish with id=" + id,
      });
    });
};

const findAll = (req, res) => {
  //   const title = req.query.title;
  //   var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  //   BookmarkedDish.findAll({ where: condition })
  BookmarkedDish.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookmarkedDishs.",
      });
    });
};

export default { create, update, getOne, destroy, findAll };
