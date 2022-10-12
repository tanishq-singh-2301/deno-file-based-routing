# _**Deno server - file based routing**_

# **Overview**

This template helps to achive `file-based-routing` with `oak` and `deno` only for creating `server`.

### **Index**

1. [_**Tree**_](#tree)
2. [_**Routing**_](#routing)
3. [_**Usage**_](#usage)
4. [_**Licence**_](#licence)

# _**Tree**_

<div id="tree" />

```js
.
├── dev.ts
├── main.ts
├── `src`
│   ├── `routes`
│   │   ├── index.ts
│   │   ├── hlo.ts
│   │   ├── `v1`
│   │   │   ├── index.ts
│   │   │   └── my-name
│   │   │       └── [name].ts
│   │   └── `v2`
│   │       ├── index.ts
│   │       ├── kaju.ts
│   │       └── my-name
│   │           ├── index.ts
│   │           └── [name].ts
│   └── `database`
│       └── dummy.json
├── `types`
│   └── routes.ts
├── deno.json
├── import_map.json
├── routes.ts
```

# **Routing**

<div id="routing" />

-   When a file is added to the `src/routes` directory, it's automatically available as a route.

-   The files inside the `src/routes` directory can be used to define most common patterns.

1. #### **Index soutes**

    - The router will automatically route files named `index` to the root of the directory.
    - `src/routes/index.ts` → `/`
    - `src/routes/blog/index.ts` → `/blog`

2. #### **Nested routes**

    - The router supports nested files. If you create a nested folder structure, files will automatically be routed in the same way still.
    - `src/routes/blog/first-post.ts` → `/blog/first-post`
    - `src/routes/dashboard/settings/username.ts` → `/dashboard/settings/username`

3. #### **Dynamic routes segments**
    - To match a dynamic segment, you can use the bracket syntax. This allows you to match named parameters.
    - `src/routes/blog/[slug].ts` → `/blog/:slug` (`/blog/hello-world`)
    - `src/routes/[username]/settings.ts` → `/:username/settings` (`/foo/settings`)

# **Usage**

<div id="usage" />

1. `Development` mode.

    ```bash
    deno task dev # or
    deno run --allow-read --allow-write --allow-run --watch=src/ dev.ts
    ```

2. `Production` mode.

    ```bash
    deno task start # or
    deno run --allow-net main.ts
    ```

3. Generate `routes.ts`.

    ```bash
    deno task generate-routes # or
    deno run --allow-read --allow-write dev.ts --no-server
    ```

# **LICENCE**

<div id="licence" />

[**MIT License**](/LICENCE)
