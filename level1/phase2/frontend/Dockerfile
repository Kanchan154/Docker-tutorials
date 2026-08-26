FROM node

# create working directory
WORKDIR /app

# Copy the required files
COPY package*.json .

# run npm install command
RUN npm install

# copy the files that are created by the user manually
COPY . .

CMD [ "npm","run","dev" ]