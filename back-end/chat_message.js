const mongoose = require("mongoose");

const ChatMessageSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  from: { type: mongoose.Schema.Types.String },
  to: { type: mongoose.Schema.Types.String },
  message: { type: mongoose.Schema.Types.String },
  createdAt: { type: mongoose.Schema.Types.Date },
});

const ChatMessageModel = mongoose.model("ChatMessage", ChatMessageSchema);

module.exports = ChatMessageModel;