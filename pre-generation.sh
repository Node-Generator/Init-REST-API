#!/bin/bash

npm init --yes
npm i express
npm i eslint eslint-config-airbnb-base eslint-plugin-import dotenv -D

SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

node $SCRIPTPATH/initAPI.js
