# ts-express-example

##### Setup from scratch ####
```
npm init -y
npm i express dotenv
npm install typescript nodemon ts-node concurrently @types/node @types/express --save-dev
npx tsc --init
```
configure tsconfig.json
add script in package.json
npm run dev


#### start using docker #####
```
docker compose -f docker-compose.dev.yml up
docker compose -f docker-compose.prod.yml up
```
