const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ParticipationListSchema = new mongoose.Schema({
    _ParticipationId: [
        {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "user"
        }
    ]
    
});
module.exports = mongoose.model("ParticipationList", ParticitpationListSchema);
