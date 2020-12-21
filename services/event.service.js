const Event = require("../models/Event")

function eventService() {
    async function getEvents() {
      return Event.find({})
    }
  
    async function addEvent(name, organizername, organizeremail, location, date, description) {
      return Event.create({Name: name, OrganizerName: organizername , OrganizerEmail: organizeremail, Location: location , Date: date, Description: description})
    }
  
    async function deleteEvent(id) {
      return Event.deleteOne({_id: id})
    }
  
    return {
      getEvents,
      addEvent,
      deleteEvent
    }
  }

  module.exports = eventService;