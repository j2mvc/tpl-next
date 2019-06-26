
# 清空目录
remove(){
    echo "[exec]清空服务目录"
    ssh root@gzztctx.com "mkdir -p /home/projects/ssip/site/"
    ssh root@gzztctx.com "rm -rf remote:/home/projects/ssip/site/*"
}
# 发送文件
upload(){
    echo "[exec]发送文件"
    scp -r .next root@gzztctx.com:/home/projects/ssip/site/
    scp -r ./server.js root@gzztctx.com:/home/projects/ssip/site/
    scp -r ./startup.sh root@gzztctx.com:/home/projects/ssip/site/
    scp -r ./package-deploy.json root@gzztctx.com:/home/projects/ssip/site/package.json
    scp -r ./static root@gzztctx.com:/home/projects/ssip/site/
}
# 发送文件
start(){
    echo "[exec]启动服务器"
    ssh root@gzztctx.com
    cd /home/projects/ssip/site/
    npm install
    ./startup.sh start
}
echo '[exe]打包项目'
#npm run build
remove
upload

