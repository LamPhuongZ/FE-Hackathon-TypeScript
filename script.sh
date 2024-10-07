#!/bin/bash
start=$(date +'%s')
echo "Begin!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
echo "Begin install systems"

sudo docker rm -f cons-fe-likelion
sudo docker rmi -f img-fe-likelion
sudo docker build . -t img-fe-likelion
sudo docker run -d -p 3000:80 --name cons-fe-likelion img-fe-likelion


echo "bat dau thoi gian:$start"
end=$(date +'%s')
echo "ket thuc thoi gian:$end"

