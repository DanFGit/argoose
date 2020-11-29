# Argoose

Headless ecommerce site. Ingests a list of products, allows user to browse
and create a basket.

## Running the project locally

In development mode, install the packages and start the dev server. You can
access the app at `http://localhost:3000`:

```sh
yarn
yarn start
```

In production mode, install the packages, build the files then use a server to
serve them. You can access the app at `http://localhost:8080` (depends on your
server of choice):

```sh
yarn
yarn build

npx http-server ./public
```

Or you can use Docker. You can access the app at `http://localhost:8080`.

```sh
docker build -t argoose .
docker run -p 8080:8080 argoose
```

## Unit testing

To run the tests in watch mode:

```sh
yarn
yarn test
```

To run the tests without watch mode:

```
sh
yarn test:ci
```

## Linting and formatting

We're using ESLint to detect code problems, and prettier to format code. Highly
recommend you enable your editor's "format on save" option to automatically
run prettier every time you save a file.

```sh
yarn lint
yarn lint --fix
yarn format
```
