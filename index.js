/*
Title: index.js (https://github.com/buwebdev/web-340/blob/master/week-5/fms/index.js)
Author: Richard Krasso 
Date: 2/5/2023
Description: A Javascript example that reminded me how to perform routing
*/

"use strict";

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const Customer = require("./models/customer");

const app = express();

const PORT = process.env.PORT || 3000;

const CONN =
  "mongodb+srv://Kajimas:j64GFAXKCdMD8XRO@cluster0.sloy5er.mongodb.net/customers?retryWrites=true&w=majority";

mongoose
  .connect(CONN)
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((err) => {
    console.log("MongoDB Error: " + err.message);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.get("/", (req, res) => {
  res.render("index", {
    title: "Pets-R-Us: Home",
    pageTitle: "Landing Page",
  });
});

app.get("/boarding", (req, res) => {
  res.render("boarding", {
    title: "Pets-R-Us: Boarding",
    pageTitle: "Boarding Services",
  });
});

app.get("/grooming", (req, res) => {
  res.render("grooming", {
    title: "Pets-R-Us: Grooming",
    pageTitle: "Grooming Services",
  });
});

app.get("/training", (req, res) => {
  res.render("training", {
    title: "Pets-R-Us: Training",
    pageTitle: "Training Services",
  });
});

app.get("/register", (req, res) => {
  res.render("register", {
    title: "Pets-R-Us: Training",
    pageTitle: "Customer Registration",
  });
});

app.post("/register", (req, res) => {
  console.log(req.body.customerId)
  console.log(req.body.email)

  const newCustomer = new Customer({
    customerId: req.body.customerId,
    email: req.body.email
  })
  newCustomer.save()

  res.render("index", {
    title: "Pets-R-Us: Home",
    pageTitle: "Landing Page",
  });
});

app.get("/customer-list", (req, res) => {
  Customer.find({}, function(err, customers)  {
    console.log(customers)
    if (err) {
        console.log(err);
        next(err);
    } else {
        res.render('customer-list', {
            title: 'Customer List',
            pageTitle: 'Customers',
            customers: customers
        })
    }
})
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));
