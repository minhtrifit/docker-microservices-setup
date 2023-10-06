## Go to server folder:

## Create file: `Dockerfile`

## Build Nodejs Server: `docker build -t nodejs-server .`

=============================================================

## Go to client folder:

## Replace code snippet in `vite.config`:
`
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173, // you can replace this port with any port
  },
});
`

## OR
`
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});

`

## Create file: `Dockerfile`

## Create file: `.dockerignore` with `node_modules` file

## Build Nodejs Server: `docker build -t react-vite-client .`

=============================================================

## Go back root folder:

## Create file: `docker-compose.yml`

## RUN: `docker-compose -f .\docker-compose.yml up`

## Mongo-express browser: `http://localhost:8081`
## Username: `root`
## Password: `root`