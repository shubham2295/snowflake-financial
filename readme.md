# ❄️Snowflake Financial❄️

[![Netlify Status](https://api.netlify.com/api/v1/badges/4cdbeec1-d7ee-420e-969d-94fca22492c4/deploy-status?branch=main)](https://app.netlify.com/sites/snowflake-financial/deploys) [![Heroku](https://heroku-badge.herokuapp.com/?app=shubham-tinyapp)]()

A customer-focused bank that provides complete financial solutions to meet your entire financial needs.

![snow](https://github.com/shubham2295/snowflake-financial/blob/main/docs/snow.gif)

## ✨ Features

- Create accounts
- Set goal
- Track goal
- Send E-transfers
- Fully responsive
- JWT authentication
- Apollo studio integration

## :rocket: Quick start

Start running locally.

### Step 1: Clone the repo

Fork the repository. then clone the repo locally by doing -

```sh
git clone https://github.com/shubham2295/snowflake-financial.git
```

### Step 2: Install Dependencies

```sh
cd client & npm install
cd server & npm install
```

### Step 3: Setup .env

To run the server you will also need to provide the `.env` variables

- create a new file .env in client root
- REACT_APP_SERVER : 'link to the server'
- create a new file .env in server root
- MONGODB_URL: 'database access link'

#### And you are good to go

start client and server seperately

```sh
npm start
```

## :open_file_folder: What's inside?

A quick look at the folder structure of this project.

    .
    ├── client
    |   ├─public
    │   └─src
    │     ├───components
    │     ├───pages
    │     ├───store
    │     ├───UI
    │     ├───App.js
    │     ├───index.js
    │     └───package.json
    └── server
        │
        ├───graphql
        ├───models
        ├───resolvers
        ├───utils
        ├───index.js
        └───package.json

## Screenshots

![Homepage](https://github.com/shubham2295/snowflake-financial/blob/main/docs/home.png)
![accounts](https://github.com/shubham2295/snowflake-financial/blob/main/docs/accounts.png)
![accountdetail](https://github.com/shubham2295/snowflake-financial/blob/main/docs/details.png)
![etransfer](https://github.com/shubham2295/snowflake-financial/blob/main/docs/etransfer.png)
![deposit](https://github.com/shubham2295/snowflake-financial/blob/main/docs/deposit.png)

## Tech Stack

**Client:** Javascript, React, Apollo Client, Mongoose, Netlify

**Server:** Node, GraphQL, Apollo Server, MongoDB, JWT, Heroku

---

Made with :heart: and javascript
