# FROM node:22-alpine

# # Set working directory
# WORKDIR /app

# # Copy package files
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy source code
# COPY . .

# # Expose port 5173 (Vite default port)
# EXPOSE 5173

# # Start the development server
# CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

FROM node:22 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve them with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]