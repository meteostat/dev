#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd src/.vuepress/dist

# if you are deploying to a custom domain
echo 'dev.meteostat.net' > CNAME

# get favicon
curl "https://meteostat.net/favicon.ico" --output "favicon.ico"

git init
git add -A
git commit -m 'Deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f https://github.com/meteostat/meteostat.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
