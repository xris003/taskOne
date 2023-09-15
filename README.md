# HNGx_task

# Simple Person API with CRUD Operations

This is a simple REST API built using Node.js and MongoDB to perform CRUD operations on a "person" resource. You can use this API to create, read, update, and delete person records.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Sample Requests and Responses](#sample-requests-and-responses)
- [Project Structure](#project-structure)
- [Security Considerations](#security-considerations)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed locally
- MongoDB installed locally or a cloud-hosted MongoDB service like MongoDB Atlas
- Git (optional, for cloning the repository)

## Getting Started

To get started with this API, follow these steps:

1. **Clone the repository (or download the source code):**

   ```bash
   git clone https://github.com/xris003/HNGx_task.git
   cd HNGx_task
   ```

**Install the dependencies**

npm install

**Configure Environment Variables**

Create a .env file in the project root and define the following environment variables:
_Using mongodb driver_
DATABASE=your_mongodb_connection_string
DATABASE_PASSWORD=your_mongodb_password

# Simple Person API with CRUD Operations

This is a simple REST API built using Node.js and MongoDB to perform CRUD operations on a "person" resource. You can use this API to create, read, update, and delete person records.

Your API will now be accessible at http://localhost:3000.

API Endpoints

**Create a new person**

Endpoint: POST /api

Request Body: JSON object with person details (name)

Example Request:

json

{
"name": "Michael"
}

**Get a person by ID**

Endpoint: GET /api/user_id/:id
Example Request: GET /api/65040b5037e60e9871fff842

**Update a person by ID**

Endpoint: PATCH /api/user_id/:id

Request Body: JSON object with updated person details

Example Request:

json

{
"name": "Updated Name"
}

**Delete a person by ID**

Endpoint: DELETE /api/user_id/:id

**Project Structure**
server.js || index.js: Main application file.
controllers/: Contains controller functions for each API endpoint.
models/: Defines the MongoDB data schema.
routes/: Defines API routes and maps them to controller functions.
config/: Configuration files.
middlewares/: Custom middleware functions (if any).

**Security Considerations**
Ensure to set up authentication and authorization for production use.
Implement input validation and sanitize user inputs to prevent common vulnerabilities like SQL injection.
Keep sensitive information like the MongoDB connection string in environment variables.
Deployment
To deploy this API to a production environment, you can follow these steps:

**Host your code on a cloud-based repository (e.g., GitHub)**
Use a platform like Heroku, AWS, or Azure to deploy your Node.js application.
Configure environment variables on your hosting platform for production.

**Contributing**
Contributions are welcome! Please feel free to submit issues or pull requests.

**License**
This project is licensed under the MIT License. See the LICENSE file for details.
