#!/bin/sh

echo "Waiting for database to be ready..."

# Wait for MySQL to be ready
while ! nc -z $DB_HOST 3306; do
  echo "Waiting for MySQL at $DB_HOST:3306..."
  sleep 2
done

echo "Database is ready!"

# Run migrations
echo "Running database migrations..."
npx sequelize-cli db:migrate

# Run seeders
echo "Running database seeders..."
npx sequelize-cli db:seed:all

# Start the application
echo "Starting application..."
exec npm start

