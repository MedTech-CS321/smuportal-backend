const ParticipationList = require("../models/ParticipationList");
const mongoose = require("mongoose");

function ParticipationListService() {
    async function getParticipation() {
    return ParticipationList.find();
    }
  

    return {
      getParticipation
    }
  }
  module.exports = ParticipationListService;