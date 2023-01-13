#!/bin/sh

export REACT_APP_BACKEND_HOST="https://album-api-mod.maruuuui.tk"
npm run build

aws s3 sync ./build s3://album-app-mod.maruuuui.tk
