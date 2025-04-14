# Этап 1: Сборка приложения
FROM node:18-alpine AS builder

# Установим рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и yarn.lock, чтобы установить зависимости
COPY package.json yarn.lock ./

# Копируем файл .env для использования переменных окружения
COPY .env .env

# Установим зависимости с флагом frozen-lockfile
RUN yarn install --frozen-lockfile

# Копируем весь проект
COPY . .

# Собираем проект
RUN yarn build

# Этап 2: Продакшн-образ
FROM node:18-alpine AS production

# Установим рабочую директорию
WORKDIR /app

# Копируем только необходимые файлы для продакшн-образа
COPY --from=builder /app ./

# Устанавливаем переменные окружения из .env (если требуется)
# Пример: ENV NEXT_PUBLIC_API_URL=https://api.example.com

# Открываем порт 3000 для приложения
EXPOSE 3000

# Запускаем приложение
CMD ["yarn", "start"]
