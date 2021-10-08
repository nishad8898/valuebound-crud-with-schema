const mongoose = require('mongoose');

//schema
const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'tag name'],
  },
  slug: {
    type: String,
    required: [true, 'tag slug'],
  },
});

//model
const Tag = mongoose.model('Tag', tagSchema);

//create function
const createTag = async (tagData) => {
  console.log('\nCreating Tag.');
  try {
    await Tag.create(tagData);
    console.log(`\nTag created successfully.`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//read all function
const readAllTag = async () => {
  console.log('\nReading Tag Data.');
  try {
    const result = await Tag.find();
    console.log(`\nTag Data: ${result}.`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//read by name function
const readTagByName = async (name) => {
  console.log('\nReading Tag Data.');
  try {
    const result = await Tag.find({ name: name });
    if (result.length == 0) {
      console.log(`\Tag Data not found`);
    } else {
      console.log(`\Tag Data by name: ${result}.`);
    }
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//update by name function
const updateTag = async (name, updatedData) => {
  console.log('\nupdating Tag Data.');
  try {
    const result = await Tag.updateMany({ name: name }, updatedData, {
      new: true,
      runValidators: true,
    });
    console.log(`${result.modifiedCount} data is updated`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//delete by id function
const deleteTagById = async (id) => {
  console.log('\ndeleting Tag Data.');
  try {
    await Tag.findByIdAndDelete(id);
    console.log(`data is deleted`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

module.exports = {
  createTag,
  readAllTag,
  readTagByName,
  updateTag,
  deleteTagById,
};
