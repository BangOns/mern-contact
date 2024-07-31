const Response = require("../models/responseSchemaModel");
const { validationResult } = require("express-validator");

const UserSchema = require("../models/User");
async function getAllUser(req, res) {
  try {
    const users = await UserSchema.find();
    Response(200, users, "Success", res);
  } catch (error) {
    Response(404, error, "Error get data users", res);
  }
}
async function createUser(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return Response(400, errors.array(), "Error validation", res);
    } else {
      const { name, email, gender } = req.body;
      const NewUser = await UserSchema.create({ name, email, gender });
      Response(200, NewUser, "Success", res);
    }
  } catch (error) {
    Response(400, error, "Error create user", res);
  }
}
async function getUserById(req, res) {
  try {
    const userById = await UserSchema.findById(req.params.id);
    Response(200, userById, "Success", res);
  } catch (error) {
    Response(400, error, "Error get user By Id", res);
  }
}
async function UpdateUserById(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return Response(400, errors.array(), "Error validation", res);
    } else {
      const { name, email, gender } = req.body;
      const UpdateUser = await UserSchema.findByIdAndUpdate(req.params.id, {
        $set: {
          name,
          email,
          gender,
        },
      });
      Response(200, UpdateUser, "Success update user", res);
    }
  } catch (error) {
    Response(400, error, "Error update user", res);
  }
}
async function DeleteUserById(req, res) {
  try {
    await UserSchema.findByIdAndDelete(req.params.id);
    Response(200, null, "Success delete user", res);
  } catch (error) {
    Response(400, error, "Error delete user", res);
  }
}
module.exports = {
  getAllUser,
  createUser,
  getUserById,
  UpdateUserById,
  DeleteUserById,
};
