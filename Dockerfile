#FROM node:18

#WORKDIR /app

#COPY package*.json ./

#RUN yarn install --ignore-engines

#COPY . .

#RUN yarn build 

#EXPOSE 3000

#CMD ["yarn", "start"]



# Stage 1 — Build
FROM node:18-alpine AS builder

RUN apk add --no-cache python3 make g++ ca-certificates

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile --ignore-engines

COPY . .

RUN yarn build && rm -rf .next/cache && find .next -name '*.map' -type f -delete

# Stage 2 — Production
FROM node:18-alpine AS production

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/next.config.js ./

RUN yarn install --frozen-lockfile --production --ignore-engines && yarn cache clean

EXPOSE 3000

CMD ["yarn", "start"]

