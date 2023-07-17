<p align="middle"> Disclaimer: This application was created for educational and practice purposes only </p>

# About

The Rocket Engines API is a Typescript-based REST API for searching rocket engines.

# Installation

### Using Docker

To use the application with Docker, please follow these steps:

- In the root directory, run `npm install -D` to install the required dependencies.
- Run `npm run build` to build the API.
- Run `npm run docker-start` to start the API and database containers.
- To stop the application, run `npm run docker-stop`.
    
### Local installation

:warning: Please note that for local installation, the database must be started manually. :warning:

To install the application locally, please follow these steps:

- Rename the .example-env file to .env and configure its variables if necessary
- In the root directory, run `npm install` to install the required dependencies.
- Run `npm run build` to build the API.
- Run `npm start` to start the API.
- To stop the application, press `Ctrl + C`
#

Both installation methods require manual database seeding. To seed the database, run the command `npm run db-seed`.
