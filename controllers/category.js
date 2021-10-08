const mongoose = require('mongoose');

//schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'category name'],
  },
  slug: {
    type: String,
    required: [true, 'category slug'],
  },
  image: {
    type: String,
    required: [true, 'category image'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'category description'],
  },
});

//model
const Category = mongoose.model('Category', categorySchema);

//create function
const createCategory = async (categoryData) => {
  console.log('\nCreating category.');
  try {
    await Category.create(categoryData);
    console.log(`\ncategory created successfully.`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//read all function
const readAllCategory = async () => {
  console.log('\nReading Category Data.');
  try {
    const result = await Category.find();
    console.log(`\nCategory Data: ${result}.`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//read by name function
const readCategoryByName = async (name) => {
  console.log('\nReading Category Data.');
  try {
    const result = await Category.find({ name: name });
    if (result.length == 0) {
      console.log(`\nCategory Data not found`);
    } else {
      console.log(`\nCategory Data by name: ${result}.`);
    }
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//update by name function
const updateCategory = async (name, updatedData) => {
  console.log('\nupdating Category Data.');
  try {
    const result = await Category.updateMany({ name: name }, updatedData, {
      new: true,
      runValidators: true,
    });
    console.log(`${result.modifiedCount} data is updated`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//delete by id function
const deleteCategoryById = async (id) => {
  console.log('\ndeleting Category Data.');
  try {
    await Category.findByIdAndDelete(id);
    console.log(`data is deleted`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

module.exports = {
  createCategory,
  readAllCategory,
  readCategoryByName,
  updateCategory,
  deleteCategoryById,
};
