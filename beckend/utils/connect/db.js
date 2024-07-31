const mongoose = require("mongoose");
require("dotenv").config();
const uri = `${process.env.MONGO_URI}/roni`;
mongoose.connect(uri);
