# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the React project code into the container
COPY . .

# Expose the React development server port
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
