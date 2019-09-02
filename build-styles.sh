#!/bin/bash
echo "Building on branch $1"

cd outsystems-styles
echo "Checking out branch $develop"
git checkout $1
echo "Pulling latest sass files from origin/$develop"
git reset --hard origin/$1
git pull origin $1

echo "Removing old styles in public/$1"
rm -rf ..public/$1

echo "Building styles to public/$1"
../node_modules/node-sass/bin/node-sass . -o ../public/$1
# build from sass to correct public dic
# check app serves static assets correctly