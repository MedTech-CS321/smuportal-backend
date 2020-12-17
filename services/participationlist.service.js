const ParticipationList = require("../models/ParticipationList");
const mongoose = require("mongoose");

function ApplicationListService() {
    async function getParticipation() {
    return ParticipationList.find();
    }
  

    return {
      getParticipation
    }
  }
  module.exports = ParticipationListService;