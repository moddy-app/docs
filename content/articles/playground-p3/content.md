this is sample text (p3)

## Test Articles
- [playground](./[playground])
- - [playground (full theme)](./[playground-full])
- - [playground (no theme)](./[playground-gm3])
- [p3](./[playground-p3])
- [totk](./[playground-totk])

## Custom Emoji :p3smile:

- :p3smile: :p3worried: :p3surprised:
- :p3arrowup: :p3heart: :p3brokenheart: :p3burger: :p3camera: :p3cat: :p3dog: :p3cloud: :p3cup: :p3moon: :p3fullmoon: :p3pill: :p3rainbow: :p3snowman: :p3star: :p3sun: :p3thumbsup: :p3umbrella: :p3yen:

```javascript
import {VoidcannonHeaderLayoutType, VoidcannonHeaderType, VoidcannonContentType} from "voidcannon";

import bignutty from "./bignutty.pagex.js";

import testCollection from "./test.pagex.js";
import featuredCollection from "./_featured.pagex.js";

import {PagexResourceTransformer} from "pagex";

export default {
    type: VoidcannonContentType.ARTICLE,
    content: {
        _transform: PagexResourceTransformer.MARKDOWN,
        path: "./content.md"
    },
    id: "playground-p3",
    title: "Playground P3 Test Article",
    theme: {
        colors: {
            light: "#0eb1f4",
            dark: "#0eb1f4",
        },
        variant: "Content",
    },
    header: {
        type: VoidcannonHeaderType.IMMERSIVE,
        layout: VoidcannonHeaderLayoutType.LOGO,
        position: "100% 100%",
        base: {
            _transform: PagexResourceTransformer.MEDIA,
            path: "./assets/header/background_p3.png"
        },
        logo: {
            _transform: PagexResourceTransformer.MEDIA,
            path: "./assets/header/logo_p3.png"
        },
        immersive_content: {
            left: {
                outer: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "./assets/header/immersive_left/outer_p3.png"
                },
                inner: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "./assets/header/immersive_left/base_p3.png"
                }
            }
        },
        color: "#0eb1f4"
    },
    authors: [bignutty],
    collections: [
        testCollection.id,
        "rest",
        featuredCollection.id
    ]
}
```