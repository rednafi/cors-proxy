# cors-proxy

Simple cors-proxy server built with [Cloudflare Workers][cloudflare-workers].

## Prerequisites

Install the [wrangler][wrangler] CLI with:

```sh
npm install -g wrangler
```

## Bootstrap

To bootstrap the application for the first time, the following command was executed:

```sh
npm create cloudflare@latest
```

<details>
<summary><strong>Complete CLI output...</strong></strong></summary>

```
using create-cloudflare version 2.0.7

╭ Create an application with Cloudflare Step 1 of 3
│
├ Where do you want to create your application?
│ dir cors-proxy
│
├ What type of application do you want to create?
│ type "Hello World" script
│
├ Do you want to use TypeScript?
│ typescript no
│
├ Copying files from "simple" template
│
╰ Application created

╭ Installing dependencies Step 2 of 3
│
├ Installing dependencies
│ installed via `npm install`
│
╰ Dependencies Installed

╭ Deploy with Cloudflare Step 3 of 3
│
├ Do you want to deploy your application?
│ yes deploying via `npm run deploy`
│
├ Logging into Cloudflare This will open a browser window
│ allowed via `wrangler login`
│
├ Deploying your application
│ deployed via `npm run deploy`
│
├  SUCCESS  View your deployed application at
│  https://cors-proxy.rednafi.workers.dev (this may take a few mins)
│
│ Run the development server npm run dev
│ Deploy your application npm run deploy
│ Read the documentation https://developers.cloudflare.com/workers
│ Stuck? Join us at https://discord.gg/cloudflaredev
│
╰ See you again soon!
```
</details>

## Development

* Clone the repo and head over the root directory.
* Go to `cors-proxy`.
* Make your changes to the `src/worker.js` file.
* Run the linter:
    ```sh
    npm run lint
    ```
* Run the development server:
    ```sh
    npm run devserver
    ```
* Deploy from the local environment:
    ```sh
    npm run deploy
    ```

## Deployment

GitHub Actions will deploy the service to Cloudflare Workers on each push to the `main`
branch.

[cloudflare-workers]: https://workers.cloudflare.com/
[wrangler]: https://developers.cloudflare.com/workers/wrangler/
