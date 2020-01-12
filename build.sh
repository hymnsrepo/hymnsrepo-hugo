#!/bin/bash

set -e

# Ensure there are no uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "Sorry, but you can't make a production build with uncommitted changes."
    exit 1
fi

# Clone the content repo
cd ..
git clone -b content --depth 1 https://github.com/hymnsrepo/hymnsrepo-site.git

# Move the files in position
cd hymnsrepo-hugo/
rm -rf ./content/hymns/ || exit 0
mv ../hymnsrepo-site/hymns ./content
rm -rf ../hymnsrepo-site

# Build the project
yarn
hugo --baseURL https://hymnsrepo.github.io/hymnsrepo-hugo
gulp generate-sw
mkdir ./public/api
yarn generate-apis

# Cleanup
if [ -z "$CI" ] # Not on travis
then
  git clean -f # see https://stackoverflow.com/a/64966
  git checkout -- .
fi
