#!/bin/bash

# Carrega arquivo de segredos
echo "Carrega arquivo de segredos"
source env.sh

# Cria arquivo de backup atual

echo "Cria arquivo de backup atual"

# Get current date and time in the format "YYYY-MM-DD_HH:MM:SS"
timestamp=$(date +%Y-%m-%d_%H:%M:%S)

# Construct the filename using the timestamp
filename="database-backup_$timestamp.sql"

echo "Escrevendo o backup do banco de dados test para o arquivo $filename"
mysqldump --databases test > "$filename" -u $MYSQL_USER -p"$MYSQL_PASSWORD" 



# Deleta arquivos antigos
echo "Deleta arquivos antigos"
# Set the maximum age of the files (in days)
max_age=7

echo "Procurando e apagando arquivos mais antigos que $max_age dias..."
# Find all files that are older than the maximum age and delete them
# -mtime n*24hs = dias 
# -mmin = minutos 
find . -name "database-backup_*.sql" -type f -mmin +$max_age -delete
