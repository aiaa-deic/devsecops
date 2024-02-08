#!/usr/bin/env bash

# Install node_modules for root
cd /workspaces/devsecops/
git pull origin main
npm install

# Set up Environment
npm run dev
