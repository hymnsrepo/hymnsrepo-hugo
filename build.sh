#!/bin/bash

set -e
STAGE_DIR=${AGENT_TEMPDIRECTORY:-..}

# Ensure there are no uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "Sorry, but you can't make a production build with uncommitted changes."
    exit 1
fi

# Clone the content repo (content branch)
git clone -b content --depth 1 https://github.com/hymnsrepo/hymnsrepo-site.git $STAGE_DIR/hymnsrepo-site

# Move the files in position
rm -rf ./content/hymns/ || exit 0
mv $STAGE_DIR/hymnsrepo-site/hymns ./content

# Build the project
yarn
hugo --baseURL https://hymnsrepo.github.io/hymnsrepo-hugo
gulp generate-sw
mkdir ./public/api
yarn generate-apis

# Cleanup
if [ -z "$CI" ] # Not on CI
then
  rm -rf $STAGE_DIR/hymnsrepo-site
  git clean -f # see https://stackoverflow.com/a/64966
  git checkout -- .
fi
