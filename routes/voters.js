const express = require('express');
const router = express.Router();
const Voter = require('../models/voter');

// GET /api/voters/:voterId - Retrieve voter by voterId
router.get('/:voterId', async (req, res) => {
  try {
    console.log("Check 1 inside the service api")
    const voter = await Voter.findOne({ voterId: req.params.voterId });
    if (!voter) {
      return res.status(404).json({ msg: 'Voter not found' });
    }
    res.json(voter);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// POST /api/voters/vote/:voterId - Update voter status to 'Voted'
// router.post('/vote/:voterId', async (req, res) => {
//   try {
//     const voter = await Voter.findOneAndUpdate(
//       { voterId: req.params.voterId },
//       { $set: { status: 'Voted' }},
//       { new: true }
//     );
//     if (!voter) {
//       return res.status(404).json({ msg: 'Voter not found' });
//     }
//     res.json(voter);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });
router.put('/vote/:voterId', async (req, res) => {
  console.log("check 1==>",req.body);
  
  const { image } = req.body;
  const updateObject = {
    status: "Voted",  // Set status to "Voted"
    votedOn: new Date()  // Capture the current timestamp
  };
  console.log("check 2==>",updateObject);
  // Only update the image if one is provided
  if (image) {
    updateObject.image = image;
  }
  console.log("check 3==>",updateObject);
  try {
    console.log("check 4==>",);
    const voter = await Voter.findOneAndUpdate(
      { voterId: req.params.voterId, status: "Not Voted" },  // Ensure we're updating only if previous status was "Not Voted"
      { $set: updateObject },
      { new: true }
    );
    console.log("check 5==>",voter);
    if (!voter) {
      return res.status(404).send("Voter not found or already voted.");
    }

    res.status(200).send(voter);
  } catch (error) {
    res.status(500).send("Server error: " + error.message);
  }
});

module.exports = router;