/*
Title: order.js (https://github.com/buwebdev/web-340/blob/master/week-8/fms/models/order.js)
Author: Richard Krasso 
Date: 2/26/2023
Description: A Javascript example that served as a template for the assignment
*/

"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, require: true },
  service: { type: String, required: true },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
