const Router = require("express").Router;
const ParticipationService = require("../../services/myParticipation.service");


// const { verifyToken } = require("../../helpers/verifyToken");

const router = Router({
  mergeParams: true
});

router.get("/ParticipationList", async (req, res) => {
  try {
    const participationList = await ParticipationListService.getParticipation();
    res.send(participationList);
  }
  catch (e) {
    console.log(e);
    res.json({ success: false, msg: "Failed to get participation"});
  }
});

router.get("/ParticipationList/:status", async (req, res) => {
  try {
    const ParticipationList = await ParticipationListService.getParticipationByStatus(req.params.status);
    res.send(ParticipationList);
  }
  catch (e) {
    console.log(e);
    res.json({ success: false, msg: "Failed to get Participation by status"});
  }
});

router.post("/myParticipation", async (req, res) => {
  try {
    const { FirstName, LastName, UniversityID } = req.body;
    const myParticipation = await myParticipationService.newApplication({ FirstName, LastName, UniversityID  });
    res.send(myParticipation);
  }
  catch (e) {
    res.json({ success: false, msg: e.message});
  }
});

module.exports = router;