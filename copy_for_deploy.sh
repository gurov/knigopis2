#!/usr/bin/env bash

echo 'clone repo'
git clone git@github.com:gurov/knigopis2.git -b gh-pages /tmp/knigopis2

echo 'remove all files'
cd /tmp/knigopis2
rm -rf *.js
rm -rf *.css
rm -rf *.html
rm -rf *.ico
rm -rf assets

echo "Copy files from build"
cd -
cp -R dist/* /tmp/knigopis2/
cd /tmp/knigopis2/

echo "set git user"
git config --global user.email "lucius.gu@ya.com"
git config --global user.name "Pavel Gurov"

echo "gir add and commit"
git add --all
git commit -m "Commit build #$CIRCLE_BUILD_NUM"

echo "push to repo"
git push origin gh-pages
