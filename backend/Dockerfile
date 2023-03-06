# Use the official Node.js image as the base image
FROM node:12-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . .

# Install the application dependencies
RUN npm install --no-cache --production
