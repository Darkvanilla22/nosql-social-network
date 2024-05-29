const { Schema, model } = require('mongoose'); // import the necessary constructors from mongoose

// create a new UserSchema object
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
}, {
  toJSON: {
    virtuals: true,
  },
  id: false
});

// get total count of friends on retrieval
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', userSchema); // create the User model using the UserSchema

module.exports = User; // export the User model