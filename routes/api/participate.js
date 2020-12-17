const Router = require("express").Router;
const myParticipationService = require("../../services/myParticipation.service");
const ParticipationListService = require("../../services/ParticipationList.service")();

// const { verifyToken } = require("../../helpers/verifyToken");

const router = Router({
  mergeParams: true
});

router.get("/participationList", async (req, res) => {
  try {
    const participationList = await ParticipationListService.getParticipation();
    res.send(participationList);
  }
  catch (e) {
    console.log(e);
    res.json({ success: false, msg: "Failed to get participation"});
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