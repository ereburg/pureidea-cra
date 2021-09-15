FROM node:16.5.0-alpine3.12 as BUILD_IMAGE

LABEL maintainer="aztecsrv@gmail.com"

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .
RUN npm run build
RUN npm prune --production

FROM node:16.5.0-alpine3.12

WORKDIR /app

COPY --from=BUILD_IMAGE /app/next.config.js ./
COPY --from=BUILD_IMAGE /app/src/pages ./pages
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public

EXPOSE 3000
CMD ["npm", "run", "start"]
