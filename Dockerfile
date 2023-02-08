# Use a Debian image as base
FROM node:14-stretch

# Set the working directory in the container
WORKDIR /app

# Copy the .env file to the container
COPY .env /app/.env

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port defined in the .env file
EXPOSE ${APP_PORT}

# Specify the command to run the application
CMD [ "npm", "start" ]