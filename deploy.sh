#!/bin/bash

# Ensure there are no uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "Sorry, but you can't make a production build with uncommitted changes."
    exit 1
fi

# Clone the content repo
cd ..
git clone -b content --depth 1 https://github.com/hymnsrepo/hymnsrepo-site.git

# Move the files in position
cd hymnsrepo-hugo/content
rm -rf hymns || exit 0
mv ../../hymnsrepo-site/hymns .
rm -rf ../../hymnsrepo-site
cd ..

# Build the project
./build.sh

# Cleanup
if [ -z "$TRAVIS_BUILD_ID" ] # Not on travis
then
  git clean -f # see https://stackoverflow.com/a/64966
  git checkout -- .
fi