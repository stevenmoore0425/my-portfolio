FROM node:22-alpine

WORKDIR /app

# Install ALL dependencies (including dev) — needed for `next build`
COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "start"]
