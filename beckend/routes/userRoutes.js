const express = require("express");
const { query, body } = require("express-validator");

const {
  getAllUser,
  createUser,
  getUserById,
  UpdateUserById,
  DeleteUserById,
} = require("../controller/UserrController");
const UserSchema = require("../models/User");
const UseRoute = express.Router();
UseRoute.get("/api/users", getAllUser);
UseRoute.post(
  "/api/users",
  body("name").custom(async (value) => {
    const user = await UserSchema.findOne({ name: value });
    if (user) throw new Error("Name already exists");
    else true;
  }),
  createUser
);
UseRoute.get("/api/users/:id", getUserById);
UseRoute.delete("/api/users/:id", DeleteUserById);
UseRoute.put(
  "/api/users/:id",
  body("name").custom(async (value, { req }) => {
    const userCheck = await UserSchema.findOne({ name: value });

    if (value !== req.body.oldName && userCheck)
      throw new Error("Name already exists");
    else true;
  }),
  UpdateUserById
);
module.exports = UseRoute;
