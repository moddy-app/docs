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
import {ThemeVariants} from "pagex_commons";

export default {
    type: VoidcannonContentType.ARTICLE,
    content: {
        _transform: PagexResourceTransformer.MARKDOWN,
        path: "./content.md"
    },
    id: "playground-p3",
    title: "Playground P3 Test Article",
    abstract: "An article about the 2024 video game 'Persona 3 Reload'.",
    created_at: 1757861297516,
    visibility_flags: [
        VoidcannonVisibilityFlags.HIDDEN_IN_RECENTS,
        VoidcannonVisibilityFlags.HIDDEN_IN_SITEMAP,
    ],
    theme: {
        colors: {
            light: "#0eb1f4",
            dark: "#0eb1f4",
        },
        variant: ThemeVariants.VIBRANT,
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
                },
                base: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "./assets/header/immersive_left/full_p3.png"
                }
            }
        },
        color: "#0eb1f4"
    },
    authors: [testauthorPagex],
    collections: [
        testCollection.id,
        featuredCollection.id
    ]
}