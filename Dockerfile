# STAGE 1: The build process

# Use an official Node runtime as a parent image
FROM node:8 as build-deps

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Separates the dependency installation from the edits allowing docker to these steps for subsequent builds
COPY package.json yarn.lock ./
RUN yarn

# Produce the build directory artifact
COPY . ./
RUN yarn build

# ----------

# STAGE 2: The production environment

# Use an official nginx image to serve the app
FROM nginx:1.12-alpine

# Copy from the build artifact produced in stage 1 to the nginx/html folder
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

# Expose a port and run the server when the container starts
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]