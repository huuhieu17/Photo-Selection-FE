# Stage 1: Build React app
FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

# Stage 2: Setup Nginx and Serve React App
FROM nginx:alpine

# Copy Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built React files
COPY --from=builder /app/build /usr/share/nginx/html

# Inject dynamic environment variables
COPY env.template.js /usr/share/nginx/html/env.js

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
