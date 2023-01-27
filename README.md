# Los Borbotones

## Products API REST
This is production ready node.js rest api with docker

## Steps:
- Visit Repository in DockerHub: https://hub.docker.com/repository/docker/edsonmgoz/borbotones-rest-api/general 
- Pull Repository from DockerHub: docker pull edsonmgoz/borbotones-rest-api
- Run Image: docker run -it -p 3080:3070 --name=borbotones-api edsonmgoz/borbotones-rest-api
- Check example in browser or postman: http://localhost:3080/api/product 

## Aditionals:
- Prepare image to DockerHub: docker tag products-rest-api edsonmgoz/borbotones-rest-api
- Push image to DockerHub: docker push edsonmgoz/borbotones-rest-api
