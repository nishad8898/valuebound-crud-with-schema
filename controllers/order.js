const mongoose = require('mongoose');

//item cart schema
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'ordered item name'],
  },
});

//product ordered schema
const orderedProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'orders product name'],
  },
});

//schema
const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.ObjectId,
    required: [true, 'user id ref'],
  },
  totalItems: {
    type: [itemSchema],
    required: [true, 'ordered items'],
  },
  products: {
    type: [orderedProductSchema],
    required: [true, 'ordered products'],
    unique: true,
  },
  billingAddress: {
    type: String,
    required: [true, 'billing address'],
  },
  shippingAddress: {
    type: String,
    required: [true, 'shipping address'],
  },
  transactionStatus: {
    type: Boolean,
    required: [true, 'transection status'],
  },
  paymentMode: {
    type: String,
    required: [true, 'payment mode'],
  },
  PaymentStatus: {
    type: Boolean,
    required: [true, 'payment status'],
  },
  orderStatus: {
    type: Boolean,
    required: [true, 'order status'],
  },
});

//model
const Order = mongoose.model('Order', orderSchema);

//create function
const createOrder = async (orderData) => {
  console.log('\nCreating Order.');
  try {
    await Order.create(orderData);
    console.log(`\Order created successfully.`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//read all function
const readAllOrder = async () => {
  console.log('\nReading Order Data.');
  try {
    const result = await Order.find();
    console.log(`\Order Data: ${result}.`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//read by userid function
const readCartByOrderId = async (userIdData) => {
  console.log('\nReading Order Data.');
  try {
    const result = await Order.find({ userId: userIdData });
    if (result === null) {
      console.log(`\Order Data not found`);
    } else {
      console.log(`\Order Data by name: ${result}.`);
    }
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//update by userid function
const updateOrder = async (userIdData, updatedData) => {
  console.log('\nupdating Order Data.');
  try {
    const result = await Order.updateMany({ userId: userIdData }, updatedData, {
      new: true,
      runValidators: true,
    });
    console.log(`${result.modifiedCount} data is updated`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

//delete by id function
const deleteOrderById = async (id) => {
  console.log('\ndeleting Order Data.');
  try {
    await Order.findByIdAndDelete(id);
    console.log(`data is deleted`);
  } catch (error) {
    console.log(`\nError: ${error.message}.`);
  }
};

module.exports = {
  createOrder,
  readAllOrder,
  readCartByOrderId,
  updateOrder,
  deleteOrderById,
};
