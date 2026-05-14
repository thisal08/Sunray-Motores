# =========================
# 1. BUILD STAGE
# =========================
FROM node:lts-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy dependency files first (cache optimization)
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy project files
COPY . .

# Build project
RUN pnpm build


# =========================
# 2. PRODUCTION STAGE
# =========================
FROM node:lts-alpine

WORKDIR /app

# Install lightweight static server
RUN npm install -g serve

# Copy only build output
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Run production server
CMD ["serve", "-s", "dist", "-l", "3000"]
