# Valuebound CRUD With Schema

Valuebound CRUD With Schema
here i have perfomed basic mongodb crud operation using mongoose wuth Schema ,model and validations

# Demo

- Demo of crate and read using schema.
- Not demonstrating update and delete because they are similar.

| Collection Specific Functions |                                                         Functions                                                         |
| :---------------------------- | :-----------------------------------------------------------------------------------------------------------------------: |
| users                         |         `createUser(Object)` ,`readAllUser()` <br> `readUserByName()` ,`updateUser(Object)` ,`deleteUserById(id)`         |
| roles                         |           `createRole(Object)` ,`readAllRole()` ,`readRoleByName()` ,`updateRole(Object)` ,`deleteRoleById(id)`           |
| category                      | `createCategory(Object)` ,`readAllCategory()` ,`readCategoryByName()` ,`updateCategory(Object)` ,`deleteCategoryById(id)` |
| tags                          |             `createTag(Object)` ,`readAllTag()` ,`readTagByName()` ,`updateTag(Object)` ,`deleteTagById(id)`              |
| products                      |   `createProduct(Object)` ,`readAllProduct()` ,`readProductByName()` ,`updateProduct(Object)` ,`deleteProductById(id)`    |
| carts                         |     `createCart(Object)` ,`readAllCart()` ,`readCartByProductName(name)` ,`updateCart(Object)` ,`deleteCartById(id)`      |
| orders                        |      `createOrder(Object)` ,`readAllOrder()` ,`readOrderByOrderId(id)` ,`updateOrder(Object)` ,`deleteOrderById(id)`      |

# Screenshots

## createUser(object)

- Create collection and insert documents according to schema

```javascript
createUser(userData); //creating collection users with document object.
```

![createUser](https://github.com/nishad8898/valuebound-crud-with-schema/blob/master/screenshots/create%20collection.png?raw=true)

## readAllUser()

- list all the available data in users collection.

```javascript
readAllUser(); //creating collection users with document object.
```

![readAllUser](https://github.com/nishad8898/valuebound-crud-with-schema/blob/master/screenshots/reading%20documents.png?raw=true)

## Authors

- [@Sachin](https://www.instagram.com/nishad8898)

