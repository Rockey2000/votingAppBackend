// create a file named seed.js in the root of your project
const connectDB = require('./config/db');
const Voter = require('./models/voter');

const seedVoters = [
  {
    voterId: "A122",
    electorName: "Jane Smith",
    fatherName: "William Smith",
    sex: "Female",
    dob: new Date("1990-08-25"),
    address: "456 Oak St, Anycity, USA",
    status: "Not Voted",
    image:'',
    votedOn: new Date("2024-05-09")
  },
  {
    voterId: "A123",
    electorName: "Akshay Shinde",
    fatherName: "Popat Shinde",
    sex: "male",
    dob: new Date("1997-08-20"),
    address: "456 Oak St, Anycity, USA",
    status: "Not Voted",
    image:'',
    votedOn: new Date("2024-05-09")
  },
  {
    voterId: "A124",
    electorName: "Rutik Shinde",
    fatherName: "Narendra Shinde",
    sex: "male",
    dob: new Date("2000-03-03"),
    address: "Shankar Nagar, Pune, India",
    status: "Not Voted",
    image:'',
    votedOn: new Date("2024-05-09")
  },
  {
    voterId: "A125",
    electorName: "Gorakh Shewale",
    fatherName: "Narendra Shinde",
    sex: "male",
    dob: new Date("2000-03-03"),
    address: "Shankar Nagar, Pune, India",
    status: "Not Voted",
    image:'',
    
  },
  {
    voterId: "A126",
    electorName: "Abhi Gawde",
    fatherName: "Narendra Gawde",
    sex: "male",
    dob: new Date("2001-03-03"),
    address: "Shankar Nagar, Pune, India",
    status: "Not Voted",
    image:'',
    
  },
  {
    voterId: "A127",
    electorName: "Abhi Shinde",
    fatherName: "Narendra Shinde",
    sex: "male",
    dob: new Date("2001-03-03"),
    address: "Shankar Nagar, Pune, India",
    status: "Not Voted",
    image:'',
    
  },
  {
    voterId: "A128",
    electorName: "Priya Tiwari",
    fatherName: "Pandit Tiwari",
    sex: "female",
    dob: new Date("2001-03-03"),
    address: "Shankar Nagar, Pune, India",
    status: "Not Voted",
    image:'',
    
  },
  {
    voterId: "A129",
    electorName: "Upendra Kale",
    fatherName: "Pandit Kalw",
    sex: "male",
    dob: new Date("1996-03-03"),
    address: "Shankar Nagar, Pune, India",
    status: "Not Voted",
    image:'',
    
  },
  // ... more voter objects
];

const seedDB = async () => {
  await connectDB();

  try {
    await Voter.deleteMany({});
    await Voter.insertMany(seedVoters);
    console.log('Database seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
