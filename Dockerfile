# Use the official Node.js image as the base image
FROM node:12-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN npm install --no-cache --production

# Exposing port
ENV PORT 8080
ENV EMPLOYEE_PREFIX_URL /api/v1/

EXPOSE 8080

# Define the entry point for the container
CMD ["npm", "start"]
