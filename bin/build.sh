#!/bin/bash

docker compose stop

docker compose run --rm service-front sh -c '{
  npm install;
  npm run generate;
}'

rsync -av "./service-front/src/.output/public/" "./docs"