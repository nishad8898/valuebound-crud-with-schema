const mongoose = require('mongoose');

//schema
const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'user must have a role'],
  },
  slug: {
    type: String,
    required: [true, 'role slug'],
  },
});

//model
const Role = mongoose.model('Role', roleSchema);

//create function
const createRole = async (role) => {
  console.log('\nCreating Role.');
  try {
    await Role.create(role);
    console.log(`\nRole created successfully.`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//read all function
const readAllRole = async () => {
  console.log('\nReading Role Data.');
  try {
    const result = await Role.find();
    console.log(`\nRole Data: ${result}.`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//read by name function
const readRoleByName = async (name) => {
  console.log('\nReading Role Data.');
  try {
    const result = await Role.find({ name: name });
    if (result.length == 0) {
      console.log(`\Role Data not found`);
    } else {
      console.log(`\Role Data by name: ${result}.`);
    }
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//update by name function
const updateRole = async (name, updatedData) => {
  console.log('\nupdating Role Data.');
  try {
    const result = await Role.updateMany({ name: name }, updatedData, {
      new: true,
      runValidators: true,
    });
    console.log(`${result.modifiedCount} data is updated`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//delete by id function
const deleteRoleById = async (id) => {
  console.log('\ndeleting Role Data.');
  try {
    await Role.findByIdAndDelete(id);
    console.log(`data is deleted`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

module.exports = {
  createRole,
  readAllRole,
  readRoleByName,
  updateRole,
  deleteRoleById,
};
