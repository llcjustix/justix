# Этап 1: Строим образ с Node.js и Yarn
FROM node:18 AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock для оптимизации кеширования
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install --frozen-lockfile

# Копируем весь код в контейнер
COPY . .

# Собираем приложение Next.js
RUN yarn build

# Этап 2: Строим финальный продакшн образ
FROM node:18 AS production

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только собранное приложение из этапа builder
COPY --from=builder /app ./

# Устанавливаем переменную окружения для продакшн режима
ENV NODE_ENV=production

# Открываем порт для приложения
EXPOSE 8000

# Запускаем Next.js в продакшн режиме
CMD ["yarn", "start"]
