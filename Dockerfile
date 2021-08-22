# Initialize
FROM node:lts-alpine
WORKDIR /app

# Set Node environment variables
ENV PORT=3007 REACT_APP_MEMBER_DASHBOARD_URL="http://localhost:4200" REACT_APP_API="http://localhost:8080/api"

# Expose the app port
EXPOSE $PORT

# Copy and install package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# Copy source code
COPY . ./

# Start the app
CMD ["npm", "start"]
