#!/bin/bash

yarn
gulp generate-sw
mv service-worker.js public/
hugo --baseURL https://hymnsrepo.github.io/hymnsrepo-hugo
mkdir ./public/api
yarn generate-apis
