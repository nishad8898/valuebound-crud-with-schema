const mongoose = require('mongoose');

//schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'user must have a first name'],
  },
  lastName: {
    type: String,
    required: [true, 'user must have a last name'],
  },
  email: {
    type: String,
    required: [true, 'user must have a email'],
    unique: true,
  },
  profileImage: {
    type: String,
    required: [true, 'user must have a profile image'],
  },
  role: {
    type: String,
    required: [true, 'user must have a role'],
  },
});

//model
const User = mongoose.model('User', userSchema);

//create function
const createUser = async (userData) => {
  console.log('\nCreating User.');
  try {
    await User.create(userData);
    console.log(`\nUser created successfully.`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//read all function
const readAllUser = async () => {
  console.log('\nReading User Data.');
  try {
    const result = await User.find();
    console.log(`\nUser Data: ${result}.`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//read by name function
const readUserByName = async (name) => {
  console.log('\nReading User Data.');
  try {
    const result = await User.find({ firstName: name });
    if (result.length == 0) {
      console.log(`\nUser Data not found`);
    } else {
      console.log(`\nUser Data by name: ${result}.`);
    }
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//update by name function
const updateUser = async (name, updatedData) => {
  console.log('\nupdating User Data.');
  try {
    const result = await User.updateMany({ firstName: name }, updatedData, {
      new: true,
      runValidators: true,
    });
    console.log(`${result.modifiedCount} data is updated`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//delete by id function
const deleteUserById = async (id) => {
  console.log('\ndeleting User Data.');
  try {
    await User.findByIdAndDelete(id);
    console.log(`data is deleted`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

module.exports = {
  createUser,
  readAllUser,
  readUserByName,
  updateUser,
  deleteUserById,
};
