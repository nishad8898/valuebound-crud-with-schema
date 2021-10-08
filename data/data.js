const mongoose = require('mongoose');

//reference data
const userData = [
  {
    firstName: 'sachin',
    lastName: 'nishad',
    email: 'xyz@mail.com',
    profileImage: 'profile url',
    role: 'software engineer trainee',
  },
  {
    firstName: 'jatin',
    lastName: 'nishad',
    email: 'xyz1@mail.com',
    profileImage: 'profile url',
    role: 'software engineer trainee',
  },
  {
    firstName: 'ankit',
    lastName: 'nishad',
    email: 'xyz2@mail.com',
    profileImage: 'profile url',
    role: 'software engineer trainee',
  },
  {
    firstName: 'himanshu',
    lastName: 'nishad',
    email: 'xyz3@mail.com',
    profileImage: 'profile url',
    role: 'software engineer trainee',
  },
  {
    firstName: 'amit',
    lastName: 'nishad',
    email: 'xyz4@mail.com',
    profileImage: 'profile url',
    role: 'software engineer trainee',
  },
  {
    firstName: 'kamlesh',
    lastName: 'nishad',
    email: 'xyz5@mail.com',
    profileImage: 'profile url',
    role: 'software engineer trainee',
  },
];

const roleData = {
  name: 'developer',
  slug: 'developer',
};

const categoryData = {
  name: 'phone',
  slug: 'phone',
  image: 'phone image url',
  description: 'phone des',
};

const tagData = {
  name: 'phone',
  slug: 'phone',
};

const productData = {
  name: 'poco x3 pro',
  thumbnail: 'thumbnail url',
  productGallery: 'poco gallery url',
  description: 'nice phone',
  basePrice: 23000,
  sellPrice: 18999,
  categoryName: 'phone',
  additionalInfo: 'nothing',
};

const cartData = {
  product: 'poco x3 pro',
  user: 'sachin',
  productQuantity: 1,
  basePrice: 23000,
  sellPrice: 16000,
  totalPrice: 16000,
};

const orderData = {
  userId: new mongoose.Types.ObjectId(),
  totalItems: [{ name: 'poco' }],
  products: [{ name: 'poco x3 pro' }],
  billingAddress: 'mumbai',
  shippingAddress: 'mumbai',
  transactionStatus: true,
  paymentMode: 'paytm',
  PaymentStatus: true,
  orderStatus: true,
};

module.exports = {
  userData,
  roleData,
  categoryData,
  tagData,
  productData,
  cartData,
  orderData,
};
