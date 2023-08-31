# Use an official Node.js runtime as the base image
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install --silent

# Copy the entire project to the container
COPY . .

# Build the React app
#RUN npm run build

# Use a smaller image for the production build
FROM nginx:alpine

# Copy the build files from the previous stage to the NGINX web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the NGINX server
EXPOSE 80

# Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]

