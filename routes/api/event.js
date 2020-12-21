const Router = require("express").Router;
const eventService = require("../../services/event.service")();
const Event = require("../../models/Event");

const router = Router({
    mergeParams: true,
  });
 
  router.get("/getEvents", async(req, res) => {
    try {
      const events = await eventService.getEvents();
      res.send(events);
    } catch(err) {
      res.json({ success: false, msg: "Failed to get events"});
    }
  });

  //Route to create an event
router.post("/addEvent",async(req, res, next) => {
    try {
        const {name, organizerName, organizerEmail, location , date, description} = req.body;
        await eventService.addEvent(name, organizerName, organizerEmail, location, date, description);
        res.send({ success: true, msg: "Event Added"});
    } catch (err) {
        res.send({ success: false, msg: "Event not Added!", err})
    }
});

// Route to delete an event
router.delete("/deleteEvent/:name", async(req, res) => {
    try {
      const name = req.params.name;
      bookService.deleteEvent(name);
      res.send({ success: true, msg: "Event deleted"})
    } catch (error) {
      res.send({ success: false, msg: "Event not added!"})
    }
  });

  module.exports = router;