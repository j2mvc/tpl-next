#!/bin/sh
APP_HOME=/home/projects/ssip/site

APP_NAME=ssip-site

LOG_DIR=${APP_HOME}/logs
PID_FILE=${APP_HOME}/logs/ssipsite.pid

#使用说明，用来提示输入参数
usage() {
    echo "Usage: sh startup.sh [start|stop|restart|status]"
    exit 1
}

#检查程序是否在运行
is_exist(){
  pid=`ps -ef|grep ${APP_NAME}|grep -v grep|awk '{print $2}' `
  #如果不存在返回1，存在返回0     
  if [ -z "${PID_FILE}" ]; then
   return 1
  else
    return 0
  fi
}

#启动方法
start(){
  is_exist
  #if [ $? -eq "0" ]; then 
  #  echo "${APP_NAME} is already running PID=${PID_FILE}" 
  #else 
	if [ ! -d ${LOG_DIR}  ];then
	  echo "创建日志目录 ${LOG_DIR}"
	  mkdir -p -m 755 ${LOG_DIR}
	fi
  	today=$(date +%Y%m%d).log
 	nohup npm run start > ${LOG_DIR}/${today} &
    echo $! > ${PID_FILE}
    echo "启动程序 ${APP_NAME} 成功 PID=$!" 
  #fi
}

#停止方法
stop(){
  pidf=$(cat ${PID_FILE})
  kill -9 $pidf
  rm -rf ${PID_FILE}
  echo "${APP_NAME} process stopped"  
}

#输出运行状态
status(){
  is_exist
  if [ $? -eq "0" ]; then
    echo "${APP_NAME} is running PID is ${PID_FILE}"
  else
    echo "${APP_NAME} is not running."
  fi
}

#重启
restart(){
  stop
  start
}

#根据输入参数，选择执行对应方法，不输入则执行使用说明
case "$1" in
  "start")
    start
    ;;
  "stop")
    stop
    ;;
  "status")
    status
    ;;
  "restart")
    restart
    ;;
  *)
    usage
    ;;
esac
exit 0