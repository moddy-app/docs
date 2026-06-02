import {
    VoidcannonHeaderLayoutType,
    VoidcannonHeaderType,
    VoidcannonContentType,
    VoidcannonEmojiStyle, VoidcannonVisibilityFlags
} from "voidcannon";

import bignutty from "../../authors/bignutty.pagex.js";
import placeholder from "../../authors/placeholder.pagex.js";

import testCollection from "../../collections/test.pagex.js";
import featuredCollection from "../../collections/_featured.pagex.js";

import {PagexResourceTransformer} from "pagex";
import testauthorPagex from "../../authors/testauthor.pagex.js";

export default {
    type: VoidcannonContentType.ARTICLE,
    content: {
        _transform: PagexResourceTransformer.MARKDOWN,
        path: "./content.md"
    },
    id: "playground",
    title: "Playground Test Article",
    created_at: Date.now(),
    visibility_flags: [
        VoidcannonVisibilityFlags.HIDDEN_IN_RECENTS,
        VoidcannonVisibilityFlags.HIDDEN_IN_SITEMAP,
    ],
    abstract: "Article to quickly run tests for all pagex markdown features. Abstract has a lot of filler and padding to test if css limits work as intended across all surfaces.",
    author_abstract: "i swear i only played this game for the plot",
    cta: "View Test Article!",
    theme: {
        emoji_style: VoidcannonEmojiStyle.FLUENT_3D,
        partial: true,
        colors: {
            light: "#D02843",
            dark: "#D02843",
        }
    },
    header: {
        type: VoidcannonHeaderType.IMMERSIVE,
        layout: VoidcannonHeaderLayoutType.LOGO_LEFT,
        base: {
            _transform: PagexResourceTransformer.MEDIA,
            path: "./assets/header/background.png"
        },
        logo: {
            _transform: PagexResourceTransformer.MEDIA,
            path: "./assets/header/logo.png"
        },
        immersive_content: {
            right: {
                base: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "./assets/header/immersive_right/full.png"
                },
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
        color: "#D02843"
    },
    authors: [placeholder, testauthorPagex, placeholder],
    collections: [
        testCollection.id,
        featuredCollection.id
    ]
}