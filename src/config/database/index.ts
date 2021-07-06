import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/demarco_api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
