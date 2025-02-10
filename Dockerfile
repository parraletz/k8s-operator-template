FROM node:20-bullseye-slim as build

WORKDIR /app

COPY package.json .

COPY . .

RUN npm install && npm run build

FROM node:20-bullseye-slim as production

WORKDIR /app

ENV NODE_ENV=production
COPY --from=build /app/package*.json .
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules node_modules

CMD ["node", "dist/index.js"]