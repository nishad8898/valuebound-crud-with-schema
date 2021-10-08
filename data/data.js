//reference data
const user = {
  firstName: 'sachin',
  lastName: 'nishad',
  email: 'xyz@mail.com',
  profileImage: 'profile url',
  role: 'software engineer trainee',
};

const role = {
  name: 'developer',
  slug: 'developer',
};

const category = {
  name: 'phone',
  slug: 'phone',
  image: 'phone image url',
  description: 'phone des',
};

const tag = {
  name: 'phone',
  slug: 'phone',
};

const product = {
  name: 'poco x3 pro',
  thumbnail: 'thumbnail url',
  productGallery: 'poco gallery url',
  description: 'nice phone',
  basePrice: 23000,
  sellPrice: 18999,
  categoryName: 'phone',
  additionalInfo: 'nothing',
};

const cart = {
  product: 'poco x3 pro',
  user: 'sachin',
  productQuantity: 1,
  basePrice: 23000,
  sellPrice: 16000,
  totalPrice: 16000,
};

const order = {
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
