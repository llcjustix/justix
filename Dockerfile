# Этап 1: Сборка приложения
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install --frozen-lockfile

# Копируем остальной код проекта
COPY . .

# Собираем приложение
RUN yarn build

# Этап 2: Продакшн-образ
FROM node:18-alpine AS runner

# Создаем рабочую директорию
WORKDIR /app

# Устанавливаем только runtime зависимости
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

# Копируем собранный проект
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/package.json ./package.json

# Опционально: копируем другие конфиги, если они нужны (например, tsconfig, .env.example и т.п.)

# Указываем порт
EXPOSE 3000

# Стартуем сервер
CMD ["yarn", "start"]
