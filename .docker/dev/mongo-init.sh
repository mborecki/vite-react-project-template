#!/bin/sh

# Skrypt inicjalizujący bazę danych dla środowisk developerskich i testowych

set -e

mongosh <<EOF
use $MONGO_DB_NAME

db.createUser({
  user: '$MONGO_USER',
  pwd: '$MONGO_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: '$MONGO_DB_NAME'
  }]
})

EOF
