# Этап сборки
FROM node:20-alpine AS builder

WORKDIR /app

# Устанавливаем системные зависимости для сборки нативных модулей
RUN apk add --no-cache python3 make g++

# Копируем только lock-файл и package.json для кэширования зависимостей
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install --frozen-lockfile

# Копируем остальные файлы проекта
COPY . .

# Сборка проекта Next.js
RUN yarn build

# Этап запуска (продакшн)
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Копируем только нужные артефакты из builder-а
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

EXPOSE 3000

CMD ["yarn", "start"]
