#!/bin/bash
echo "Building on branch $1"

cd outsystems-styles
echo "Checking out branch $develop"
git checkout $1
echo "Pulling latest sass files from origin/$develop"
git reset --hard origin/$1
git pull origin $1

echo "Removing old styles in /styles"
rm -rf ..styles/

echo "Building styles to /styles"
../node_modules/node-sass/bin/node-sass . -o ../styles/
# build from sass to correct styles dic
# check app serves static assets correctly