# Argoose

Headless ecommerce site. Ingests a list of products, allows user to browse
and create a basket.

## Running the project locally

In development mode:

```sh
yarn
yarn start
```

In production mode:

```sh
yarn
yarn build
yarn serve
```

or with Docker:

```sh
docker build -t argoose .
docker run -p 8080:8080 argoose
```

