SRC_PORT := 9200
DST_PORT := 9200

##### docker
IMAGE_NAME := seame-elasticsearch
CONTAINER_NAME := ${IMAGE_NAME}-container

build-image:
	docker build -t ${IMAGE_NAME} ./

run-container:
	docker run -it -d \
		--name ${CONTAINER_NAME} \
		-p ${SRC_PORT}:${DST_PORT} \
		${IMAGE_NAME}