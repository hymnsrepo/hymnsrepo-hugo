#!/bin/bash

set -e

yarn
hugo --baseURL https://hymnsrepo.github.io/hymnsrepo-hugo
gulp generate-sw
mkdir ./public/api
yarn generate-apis
