FROM node:12-alpine

WORKDIR /app

# Copy the package.json and install it. It's the slowest step, and least
# frequently changed, so hopefully it will be cached
COPY ./package.json ./yarn.lock ./
RUN yarn

# Then copy the rest (ideally, in order of least frequently changed to most)
COPY ./.babelrc ./webpack.config.js ./
COPY ./static/ ./static/
COPY ./src/ ./src/

# Now build!
RUN yarn build

# And serve
EXPOSE 8080
CMD ["npx", "http-server", "./public"]
STOPSIGNAL SIGINT
