const mongoose = require("mongoose");
const ParticipationListSchema = new mongoose.Schema({
    _ParticipationId: [
        {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "user"
        }
    ],
    //Validation
    Valid:{
        type: String,
        lowercase: true,
        enum: ["valid", "invalid","none"],
        default: "none"
    }
    
});
module.exports = mongoose.model("ParticipationList", ParticitpationListSchema);
