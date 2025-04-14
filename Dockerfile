FROM node:20-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только package.json и package-lock.json (если он есть) для кэширования зависимостей
COPY package*.json ./

# Устанавливаем зависимости без кэширования
RUN npm install --no-cache

# Копируем остальные файлы проекта
COPY . .

# Собираем проект
RUN npm run build

# Новый этап для производственного окружения
FROM node:20-alpine AS runner

# Устанавливаем рабочую директорию для финального контейнера
WORKDIR /app

# Устанавливаем переменную окружения для продакшн-режима
ENV NODE_ENV=production

# Копируем файлы из этапа сборки
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Открываем порт для приложения
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]

