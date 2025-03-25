install:
    npm install

dev:
    npm run dev

build:
    npm run build

docker-build:
    docker build -t techghil-mauritanie .

docker-run:
    docker run -p 3000:3000 techghil-mauritanie