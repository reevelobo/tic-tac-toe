# Use Node.js image as base
FROM node:20-alpine

RUN addgroup app && adduser -S -G app app

USER app

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

USER root

RUN chown -R app:app .

USER app

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port the app runs on
EXPOSE 5173 

# Start the React application
CMD ["npm", "run", "dev"]
