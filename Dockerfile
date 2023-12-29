FROM node:20.10-alpine3.18  AS build
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm i
RUN npm install -g nuxt
COPY . .
ENV NODE_ENV=production
CMD ["npm", "run", "generate"]

FROM nginx:1.21-alpine AS base
# Copy built static files to Nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port 80
EXPOSE 80
# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
