// const mongoose = require('mongoose');

// const VoterSchema = new mongoose.Schema({
//   voterId: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   electorName: {
//     type: String,
//     required: true
//   },
//   fatherName: {
//     type: String,
//     required: true
//   },
//   sex: {
//     type: String,
//     required: true
//   },
//   dob: {
//     type: Date,
//     required: true
//   },
//   address: {
//     type: String,
//     required: true
//   },
//   status: {
//     type: String,
//     default: "Not Voted", // This ensures all entries start with "Not Voted"
//     enum: ["Not Voted", "Voted"] // This restricts the status to these two values
//   }
// });

// module.exports = mongoose.model('Voter', VoterSchema);
const mongoose = require('mongoose');

const VoterSchema = new mongoose.Schema({
  voterId: {
    type: String,
    required: true,
    unique: true
  },
  electorName: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Not Voted", // This ensures all entries start with "Not Voted"
    enum: ["Not Voted", "Voted"] // This restricts the status to these two values
  },
  image: {
    type: String, // Can be a URL to the image or a base64 encoded string
    default: "" // Default as empty, can be updated after voting
  },
  votedOn: {
    type: Date,
    default: null // Initially null, updated when status is changed to 'Voted'
  }
});

module.exports = mongoose.model('voter', VoterSchema);

