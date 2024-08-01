# Employee Management System

## Overview

This project is a simple Employee Management System built using Vite and React. It allows users to view, add, and delete employee records. The application fetches data from a remote API and performs CRUD operations.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/) (optional)
- [CosmoCloud](https://cosmocloud.io/) account for API management and database setup

## Getting Started

Follow these steps to get the project up and running on your local machine:

### 1. Clone the Repository

   ```bash
   git clone https://github.com/DeathRay99/cosmocloud-assignment.git
   cd cosmocloud-assignment
   ```
### 2. Set Up the Backend

1. **Go to CosmoCloud**: Log in to your CosmoCloud account.

2. **Create a New Project**: Follow the CosmoCloud documentation to create a new project.

3. **Connect Project to MongoDB Atlas**: Connect your CosmoCloud project to a MongoDB Atlas database. Follow the CosmoCloud documentation for this step.

4. **Create a New DB Model**: In your CosmoCloud project, create a new database model with the following JSON schema (turn on required toggle for name, address & contact_method):

    ```json
    {
      "name": "STRING",
      "address": {
        "line1": "STRING",
        "city": "STRING",
        "country": "STRING",
        "zipcode": "STRING"
      },
      "contact_method": {
        "email": "STRING",
        "phone": "STRING"
      }
    }
    ```

5. **Create New CRUD API**: Use the predefined template in CosmoCloud to create CRUD APIs for your model. This will handle operations such as retrieving, adding, updating, and deleting employee records.

### 3. Create Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
VITE_ENVIRONMENT_ID=your_cosmocloud_environment_id
VITE_PROJECT_ID=your_cosmocloud_project_id
```
These environment variables are required in the headers when making API calls, so they are important for the application to function correctly. Replace your_cosmocloud_environment_id and your_cosmocloud_project_id with the actual values obtained from CosmoCloud.

### 4. Install dependencies

You can use either npm or yarn to install the project dependencies:

```bash
npm install
# or
yarn install
```
### 5. Start the Development Server

To start the development server and view the application in your browser, run:

```bash
npm run dev
# or
yarn dev
```



