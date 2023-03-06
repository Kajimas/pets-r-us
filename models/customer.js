/*
Title: fruit.js (https://github.com/buwebdev/web-340/blob/master/week-9/fms/models/fruit.js)
Author: Richard Krasso 
Date: 2/12/2023
Description: A Javascript example that served as a template for the assignment
*/

"use strict";

const mongoose = require("mongoose");

// creates the schema that will be used for customers
const customerSchema = new mongoose.Schema({
  customerId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
});

//the schema is exported under the name "Customers"
module.exports = mongoose.model("Customer", customerSchema);
