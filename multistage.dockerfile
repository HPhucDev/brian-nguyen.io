# Build BASE
FROM node:16-alpine as BASE
LABEL author="hphucdev <hoangphucdeveloper@gmail.com>"

WORKDIR /app
COPY package.json yarn.lock ./
RUN apk add --no-cache git  && yarn install --frozen-lockfile && yarn cache clean

# Build Image
FROM ductn4/node:16-alpine AS BUILD
LABEL author="hphucdev <hoangphucdeveloper@gmail.com>"

WORKDIR /app
COPY --from=BASE /app/node_modules ./node_modules
COPY . .
RUN apk add --no-cache git curl && yarn build:test && rm -rf node_modules && yarn install --production --frozen-lockfile --ignore-scripts --prefer-offline && node-prune
# Follow https://github.com/ductnn/Dockerfile/blob/master/nodejs/node/16/alpine/Dockerfile



# Build production
FROM node:16-alpine AS PRODUCTION
LABEL author="hphucdev <hoangphucdeveloper@gmail.com>"

WORKDIR /app

COPY --from=BUILD /app/package.json /app/yarn.lock ./
COPY --from=BUILD /app/node_modules ./node_modules
COPY --from=BUILD /app/.next ./.next
COPY --from=BUILD /app/public ./public

EXPOSE 3001

CMD ["yarn", "start"]