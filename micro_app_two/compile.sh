rm -rf ../web_server/file_web_server/*
npm run build
cp index.html ../web_server/file_web_server/
cp -r dist/* ../web_server/file_web_server/