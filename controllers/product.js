const mongoose = require('mongoose');

//schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name'],
  },
  thumbnail: {
    type: String,
    required: [true, 'product thumbnail'],
  },
  productGallery: {
    type: String,
    required: [true, 'product gallery'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'product description'],
  },
  basePrice: {
    type: Number,
    required: [true, 'product base price'],
  },
  sellPrice: {
    type: Number,
    required: [true, 'product selling price'],
  },
  categoryName: {
    type: String,
    required: [true, 'product category'],
  },
  additionalInfo: {
    type: String,
    required: [true, 'product additional informations'],
  },
});

//model
const Product = mongoose.model('Product', productSchema);

//create function
const createProduct = async (productData) => {
  console.log('\nCreating Product.');
  try {
    await Product.create(productData);
    console.log(`\nProduct created successfully.`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//read all function
const readAllProduct = async () => {
  console.log('\nReading Product Data.');
  try {
    const result = await Product.find();
    console.log(`\nProduct Data: ${result}.`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//read by name
const readProductByName = async (name) => {
  console.log('\nReading Product Data.');
  try {
    const result = await Product.find({ name: name });
    if (result.length == 0) {
      console.log(`\nProduct Data not found`);
    } else {
      console.log(`\nProduct Data by name: ${result}.`);
    }
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//update by name function
const updateProduct = async (name, updatedData) => {
  console.log('\nupdating Product Data.');
  try {
    const result = await Product.updateMany({ name: name }, updatedData, {
      new: true,
      runValidators: true,
    });
    console.log(`${result.modifiedCount} data is updated`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//delete by id function
const deleteProductById = async (id) => {
  console.log('\ndeleting Product Data.');
  try {
    await Product.findByIdAndDelete(id);
    console.log(`data is deleted`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

module.exports = {
  createProduct,
  readAllProduct,
  readProductByName,
  updateProduct,
  deleteProductById,
};
