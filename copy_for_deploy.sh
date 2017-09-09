#!/usr/bin/env bash

echo "➜ remove old tmp dir"
rm -rf /tmp/knigopis2

echo "➜ clone repo"
git clone git@github.com:knigopis/www.knigopis.com_v2.git /tmp/knigopis2

echo "➜ remove all files"
cd /tmp/knigopis2
rm -rf *.js
rm -rf *.css
rm -rf *.html
rm -rf *.ico
rm -rf assets

echo "➜ Copy files from build"
cd -
cp -R dist/* /tmp/knigopis2/
cd /tmp/knigopis2

echo "➜ gir add and commit"
git add --all
NOW=$(date +"%s")
git commit -m "Commit build $NOW"

echo "➜ push to repo"
git push origin master
