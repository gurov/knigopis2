#!/usr/bin/env bash

echo 'clone repo'
git clone git@github.com:$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME.git -b gh-pages /tmp/knigopis2

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
git config --global user.name $CIRCLE_PROJECT_USERNAME

echo "gir add and commit"
git add --all
git commit -m "Commit build #$CIRCLE_BUILD_NUM"

echo "push to repo"
git push origin gh-pages
