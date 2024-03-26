const express = require("express");
const mongoose = require("mongoose");
const edu = require("./Edu.js");
const bodyParser = require("body-parser");
// const { default: mongoose } = require('mongoose')
mongoose
  .connect(
    "mongodb+srv://classdemo1:Classdemo1@cluster0.ojmyvv4.mongodb.net/",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected ngo dbms");

    const express = require("express");
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get("/edu", async (req, res) => {
      const { category } = req.query;
      let eduData;
      if (category) {
        const regex = new RegExp(category, 'i');
        eduData = await edu.find({ key_issue: { $regex:regex } }) 
      } else {
        eduData = await edu.find();
      }
      res.send(eduData);
    });
    app.get("/edu/:id", async (req, res) => {
      const eduData = await edu.findOne({ _id: req.params.id });
      res.send(eduData);
    });
    app.post("/edu", async (req, res) => {
      const myedu = new edu({
        _id: new mongoose.Types.ObjectId(),
        id: req.body.id,
        name: req.body.name,
        Address: req.body.Address,
      });
      await myedu.save();
      res.send(myedu);
    });

    app.listen(3030, () => {
      console.log("Server 1Start srated at @3030");
    });
  });
