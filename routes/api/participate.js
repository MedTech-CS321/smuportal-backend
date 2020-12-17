const Router = require("express").Router;

const userService = require("../../services/user.service");
const ParticipationListService = require("../../services/ApplicationList.service")();



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
    res.json({ success: false, msg: "Failed to get participate"});
  }
});

router.post("/user", async (req, res) => {
  try {
    const { firstName, lastName, universityID, email } = req.body;
    const User = await myApplicationService.newParticipation({ firstName, lastName, universityID, email  });
    res.send(User);
  }
  catch (e) {
    res.json({ success: false, msg: e.message});
  }
});

module.exports = router;
