export default {
    id: "blognutty",
    base: "/",
    author: "bignutty",
    output: {
        path: "dist",
        static: "_"
    },
    resources: {
        favicon: './voidcannon/src/assets/favicon.ico',
        content: {
            path: "./content/",
            resolvers: {
                "pagex.js": "builtin"
            }
        },
        templates: "./voidcannon/src/",
        client: {
            components: "./voidcannon/src/client/components.js",
            entrypoint: "./voidcannon/src/client/index.js"
        }
    },
    discovery: {
        web_base: "https://blog.bignut.zip"
    }
}