# theBackend

This is the back end for an e-commerce site, which provides a functional Express.js API integrated with Sequelize to interact with a MySQL database. The API allows users to perform various operations such as retrieving data, creating, updating, and deleting records related to categories, products, and tags.

## Table of Contents

- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [API Routes](#api-routes)
- [Testing](#testing)
- [Walkthrough Video](#walkthrough-video)

## Getting Started

To get started with the theBackend, follow the steps below:

1. Clone the repository to your local machine (https://github.com/burrielrush/theBackend)
2. Install the required dependencies by running `npm install` in the project directory.
3. Use insomnia to use localhost:3001

## Environment Variables

Before running the application, you need to set up the environment variables.
To set up the environment variables, create a file named `.env` in the project root directory and add the required variables in the following format:


```
- `DB_NAME`: 'ecommerce_db'
- `DB_USER`: 'root'
- `DB_PASSWORD`: ''
```

## Database Setup
```
mysql -u root
source db/schema.sql;
quit
node seed/seeds.js
node server.js
```

This command will create a development database and set up the required tables using Sequelize

The server will start running on the specified port (default is 3001) and establish a connection to the database.

## API Routes

The API provides the following routes for accessing and manipulating data:

- GET `/api/categories`: Retrieve all categories.
- GET `/api/categories/:id`: Retrieve a specific category by ID.
- POST `/api/categories`: Create a new category.
- PUT `/api/categories/:id`: Update a category by ID.
- DELETE `/api/categories/:id`: Delete a category by ID.

- GET `/api/products`: Retrieve all products.
- GET `/api/products/:id`: Retrieve a specific product by ID.
- POST `/api/products`: Create a new product.
- PUT `/api/products/:id`: Update a product by ID.
- DELETE `/api/products/:id`: Delete a product by ID.

- GET `/api/tags`: Retrieve all tags.
- GET `/api/tags/:id`: Retrieve a specific tag by ID.
- POST `/api/tags`: Create a new tag.
- PUT `/api/tags/:id`: Update a tag by ID.
- DELETE `/api/tags/:id`: Delete a tag by ID.

## Testing

You can test the API routes using a tool like Insomnia. Use the appropriate HTTP methods (GET, POST, PUT, DELETE) and the above-defined routes to interact with the database and perform the desired operations.

## Photos
<img width="1906" alt="Screenshot 2023-05-30 at 9 59 05 PM" src="https://github.com/burrielrush/theBackend/assets/123046249/14192dff-cf62-489a-a6da-e1b290cda960">


## Walkthrough Video

To see a video demonstration of the functionality and how all the acceptance criteria are met, please click this <iframe src="https://drive.google.com/file/d/1i5K1GbbKW38A-PfdWl7N88taQ9ty0QfL/preview" width="640" height="480"></iframe>

Happy coding!
