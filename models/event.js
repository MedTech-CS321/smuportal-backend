const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  OrganizerName: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
  },
  OrganizerEmail: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
    
  },
  Location: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
},


Date: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 255
},

Description: {
    type: String,
    required: true,
    lowercase: true,
    min: 2,
    max: 1000
},



  

});

module.exports = mongoose.model("event", eventSchema);