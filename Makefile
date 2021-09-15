
dev:
	npm run dev

lint:
	npm run lint .
	npm run type-check

build:
	npm run build

sprites:
	svg-spreact public/for-sprites --optimize true --tidy true > public/sprites/icons.svg

docker_build_dev:
	docker build . -t epicbytes/nexttest-front:latest

docker_public_dev: docker_build_dev
	docker push epicbytes/nexttest-front:latest
