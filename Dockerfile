FROM node:lts-alpine

RUN npm install -g pnpm serve

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
