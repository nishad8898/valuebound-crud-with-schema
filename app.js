const mongoose = require('mongoose');

const {
  userData,
  roleData,
  categoryData,
  tagData,
  productData,
  cartData,
  orderData,
} = require('./data/data');

const {
  createUser,
  readAllUser,
  readUserByName,
  updateUser,
  deleteUserById,
} = require('./controllers/user'); //user
const {
  createRole,
  readAllRole,
  readRoleByName,
  updateRole,
  deleteRoleById,
} = require('./controllers/role'); //role
const {
  createCategory,
  readAllCategory,
  readCategoryByName,
  updateCategory,
  deleteCategoryById,
} = require('./controllers/category'); //category
const {
  createTag,
  readAllTag,
  readTagByName,
  updateTag,
  deleteTagById,
} = require('./controllers/tag'); //tag
const {
  createProduct,
  readAllProduct,
  readProductByName,
  updateProduct,
  deleteProductById,
} = require('./controllers/product'); //product
const {
  createCart,
  readAllCart,
  readCartByProductName,
  updateCart,
  deleteCartById,
} = require('./controllers/cart'); //cart
const {
  createOrder,
  readAllOrder,
  readCartByOrderId,
  updateOrder,
  deleteOrderById,
} = require('./controllers/order'); //order

const uri = 'mongodb://127.0.0.1:27017/e_commerce';

const main = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Db connection successful.');

    //Start Entering the functions here
    await createUser(userData); //creating user data also validating it (working fine).
    await readAllUser(); //reading users data (working fine).

    //updating with validation and deletion also works fine.
    //
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

main().catch((err) => console.log(err));
