# ========== Build Stage ==========
FROM node:lts-alpine AS builder

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

RUN pnpm approve-builds

COPY . .
RUN pnpm build

RUN ls dist

# ========== Production Stage ==========
FROM nginx:alpine

# Clean default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy built app
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
