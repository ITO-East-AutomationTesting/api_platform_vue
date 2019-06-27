FROM node as develop-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

FROM develop-stage as build-stage
RUN yarn build

FROM nginx as production-stage
# RUN rm /etc/nginx/conf.d/default.conf
# COPY default.conf /etc/nginx/conf.d/
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]