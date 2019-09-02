#!/bin/bash
echo "Checking for outsystems-styles directory..."

if [ -d "outsystems-styles" ]
then
  echo "Directory found, all ready to go"
else
  echo "Cloning outsystems-styles"
  git clone $1
  echo "Checking out the develop branch"
  git checkout develop
  echo "Building styles for "
  ./build-styles.sh develop
fi
