# pull
git pull --recurse-submodules
git submodule update --init --recursive

# 生成update.js
node gainFileList.js

# push 
git push -u origin main