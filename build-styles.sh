#!/bin/bash
echo "Building on branch $1"

cd outsystems-styles
echo "Checking out branch $1"
git checkout $1
echo "Pulling latest sass files from origin/$1"
git fetch origin $1
git reset --hard origin/$1

echo "Removing old styles in /styles"
rm -rf ..styles/

echo "Building styles to /styles"
../node_modules/node-sass/bin/node-sass . -o ../styles/
