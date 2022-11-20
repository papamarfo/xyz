# XYZ
A basic microfinance project created with Nodejs and Express

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* NodeJs
* NPM
* NPX
* MySQL

### Installing

Please run the following commands to setup your development env up.

```bash
# clone the project
git clone git@github.com:papamarfo/xyz.git

# install the project's dependencies using npm
npm install

# make a copy of the .env.example and configure the application for your local environment
cp .env.example .env

# run database migrations
npx sequelize-cli db:migrate
```

### Creating a Super Admin

Run the npx command below to seed the database with admin details.

```bash
npx sequelize-cli db:seed:all
```

### Running the application

Run the command below from the project root:

```bash
node index.js
```

You can visit [http://localhost:3000](http://localhost:3000) to see the application in action.

### Login details
```bash
Email: admin@gmail.com
Password: admin@gmail.com
```

Enjoy!!!