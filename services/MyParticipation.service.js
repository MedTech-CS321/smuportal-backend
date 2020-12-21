const myParticipation = require("../models/MyParticipation");

function myParticipationService() {
    //async function getParticipation() {
    //  return Participation.find({})
    //}
  
    async function newParticipation(firstName, lastName, universityID ) {
      return Participation.create({FirstName: firstName, LastName: lastName , UniversityID: universityID })
    }
  
    return {
      //getParticipation,
      newParticipation,
    }
  }
  module.exports = myParticipationService;
  