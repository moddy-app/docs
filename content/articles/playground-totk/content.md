this is sample text (totk)

## Test Articles
- [playground](./[playground])
- - [playground (full theme)](./[playground-full])
- - [playground (no theme)](./[playground-gm3])
- [p3](./[playground-p3])
- [totk](./[playground-totk])

```javascript
console.log('hewwo') // [!code --]
console.log('hello') // [!code ++]
```

```js
import {VoidcannonHeaderLayoutType, VoidcannonHeaderType, VoidcannonContentType} from "voidcannon";

import bignutty from "./bignutty.pagex.js";

import testCollection from "./test.pagex.js";
import featuredCollection from "./_featured.pagex.js";// [!code error]

import {PagexResourceTransformer} from "pagex";// [!code warning]

export default { // [!code highlight]
    type: VoidcannonContentType.ARTICLE, // [!code highlight]
    content: { // [!code highlight]
        _transform: PagexResourceTransformer.MARKDOWN, // [!code highlight]
        path: "./content.md"
    },
    id: "playground-totk",
    title: "Playground Totk Test Article",
    theme: { // [!code --]
        partial: true, // [!code --]
        colors: { // [!code --]
            light: "#4dc294", // [!code --]
            dark: "#4dc294", // [!code --]
        } // [!code --]
    }, // [!code --]
    theme: { // [!code ++]
        partial: true, // [!code ++]
        colors: { // [!code ++]
            light: "#4dc294", // [!code ++]
            dark: "#4dc294", // [!code ++]
        } // [!code ++]
    }, // [!code ++]
    header: {
        type: VoidcannonHeaderType.IMMERSIVE,
        layout: VoidcannonHeaderLayoutType.EMPTY,
        base: {
            _transform: PagexResourceTransformer.MEDIA,
            path: "./assets/header/background_totk.png"
        },
        immersive_content: {
            right: {
                outer: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "./assets/header/immersive_right/outer.png"
                },
                inner: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "./assets/header/immersive_right/inner.png"
                }
            }
        },
        color: "#4dc294"
    },
    authors: [bignutty],
    collections: [
        testCollection.id,
        "rest",
        featuredCollection.id
    ]
}
```