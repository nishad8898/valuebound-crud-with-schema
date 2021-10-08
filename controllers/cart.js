const mongoose = require('mongoose');

//schema
const cartSchema = new mongoose.Schema({
  product: {
    type: String,
    required: [true, 'product name'],
  },
  user: {
    type: String,
    required: [true, 'user name'],
  },
  productQuantity: {
    type: Number,
    required: [true, 'product quantity'],
    unique: true,
  },
  basePrice: {
    type: Number,
    required: [true, 'product base price'],
  },
  sellPrice: {
    type: Number,
    required: [true, 'product selling price'],
  },
  totalPrice: {
    type: Number,
    required: [true, 'total price'],
  },
});

//model
const Cart = mongoose.model('Cart', cartSchema);

//create function
const createCart = async (cartData) => {
  console.log('\nCreating Cart.');
  try {
    await Cart.create(cartData);
    console.log(`\Cart created successfully.`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//read all function
const readAllCart = async () => {
  console.log('\nReading Cart Data.');
  try {
    const result = await Cart.find();
    console.log(`\Cart Data: ${result}.`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//read all by product name function
const readCartByProductName = async (productName) => {
  console.log('\nReading Product Data.');
  try {
    const result = await Cart.find({ product: productName });
    if (result.length == 0) {
      console.log(`\nProduct Data not found`);
    } else {
      console.log(`\nProduct Data by name: ${result}.`);
    }
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//update by product name function
const updateCart = async (productName, updatedData) => {
  console.log('\nupdating Cart Data.');
  try {
    const result = await Cart.updateMany(
      { product: productName },
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    console.log(`${result.modifiedCount} data is updated`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//delete by id function
const deleteCartById = async (id) => {
  console.log('\ndeleting Cart Data.');
  try {
    await Cart.findByIdAndDelete(id);
    console.log(`data is deleted`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

module.exports = {
  createCart,
  readAllCart,
  readCartByProductName,
  updateCart,
  deleteCartById,
};
