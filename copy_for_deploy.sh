#!/usr/bin/env bash

echo 'clone repo'
git clone https://github.com/knigopis/www.knigopis.com_v2.git /tmp/knigopis2

echo 'remove all files'
cd /tmp/knigopis2
rm -rf *.js
rm -rf *.css
rm -rf *.html
rm -rf *.ico
rm -rf assets

echo "Copy files from build"
cd -
cp -R dist/* cd /tmp/knigopis2/

echo "gir add and commit"
git add --all
git commit -m "Commit build $CIRCLE_BUILD_NUM"

echo "push to repo"
git push origin master
