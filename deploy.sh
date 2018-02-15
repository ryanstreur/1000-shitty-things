#!/bin/bash
#deployment script
git pull
npm i
npm run build
sudo rm -rv /srv/www/1000shittythings.com/build
sudo cp -av ./build/ /srv/www/1000shittythings.com