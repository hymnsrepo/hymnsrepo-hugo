#!/bin/bash

set -e

yarn
hugo --baseURL https://hymnsrepo.github.io/hymnsrepo-hugo
gulp generate-sw
mv service-worker.js public/
mkdir ./public/api
yarn generate-apis
