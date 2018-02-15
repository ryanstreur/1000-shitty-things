#!/bin/bash
#deployment script
git pull
npm i
npm run build
sudo rm -r /srv/www/1000shittythings.com/build
sudo cp -a ./build/ /srv/www/1000shittythings.com