#!/bin/bash

yarn
gulp generate-sw
mv service-worker.js public/
hugo --baseURL https://hymnsrepo.github.io/hymnsrepo-hugo
