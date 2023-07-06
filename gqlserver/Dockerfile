# Use an appropriate base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose the port your GraphQL server will be running on
EXPOSE 4000

# Set the command to start your GraphQL server
CMD ["npm", "start"]
