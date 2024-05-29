const { Schema, model, Types } = require('mongoose'); // import the necessary constructors from mongoose
const dateFormat = require('../utils/dateFormat'); // import the date format function

// create a new ReactionSchema
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  }
}, {
  toJSON: {
    getters: true
  },
  id: false
});

// create a new ThoughtSchema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
}, {
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

// get total count of reactions on retrieval
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema); // create the Thought model using the ThoughtSchema

module.exports = Thought; // export the Thought model
