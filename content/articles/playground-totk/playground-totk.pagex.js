import {
    VoidcannonHeaderLayoutType,
    VoidcannonHeaderType,
    VoidcannonContentType,
    VoidcannonVisibilityFlags
} from "voidcannon";

import testauthorPagex from "../../authors/testauthor.pagex.js";

import videogamesCollection from "../../collections/videogames.pagex.js";
import testCollection from "../../collections/test.pagex.js";
import featuredCollection from "../../collections/_featured.pagex.js";

import {PagexResourceTransformer} from "pagex";

export default {
    type: VoidcannonContentType.ARTICLE,
    content: {
        _transform: PagexResourceTransformer.MARKDOWN,
        path: "./content.md"
    },
    id: "playground-totk",
    title: "Playground Totk Test Article",
    created_at: 1757861297516,
    updated_at: 1757861297516,
    visibility_flags: [
        VoidcannonVisibilityFlags.HIDDEN_IN_RECENTS,
        VoidcannonVisibilityFlags.HIDDEN_IN_SITEMAP,
    ],
    theme: {
        // partial: true,
        colors: {
            light: "#4dc294",
            dark: "#4dc294",
        }
    },
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
    authors: [testauthorPagex],
    collections: [
        testCollection.id,
        featuredCollection.id
    ]
}