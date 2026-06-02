import {
    VoidcannonHeaderLayoutType,
    VoidcannonHeaderType,
    VoidcannonContentType,
    VoidcannonEmojiStyle, VoidcannonVisibilityFlags
} from "voidcannon";

import testauthorPagex from "../../authors/testauthor.pagex.js";

import testCollection from "../../collections/test.pagex.js";
import featuredCollection from "../../collections/_featured.pagex.js";

import {PagexResourceTransformer} from "pagex";

export default {
    type: VoidcannonContentType.ARTICLE,
    content: {
        _transform: PagexResourceTransformer.MARKDOWN,
        path: "../playground/content.md"
    },
    id: "playground-full",
    title: "Playground Test Article (full theme)",
    created_at: 0,
    visibility_flags: [
        VoidcannonVisibilityFlags.HIDDEN_IN_RECENTS,
        VoidcannonVisibilityFlags.HIDDEN_IN_SITEMAP,
    ],
    theme: {
        emoji_style: VoidcannonEmojiStyle.FLUENT_FLAT,
        partial: false,
        colors: {
            light: "#D02843",
            dark: "#c7f718",
        }
    },
    header: {
        type: VoidcannonHeaderType.IMMERSIVE,
        layout: VoidcannonHeaderLayoutType.LOGO_LEFT,
        base: {
            _transform: PagexResourceTransformer.MEDIA,
            path: "../playground/assets/header/background.png"
        },
        logo: {
            _transform: PagexResourceTransformer.MEDIA,
            path: "../playground/assets/header/logo.png"
        },
        immersive_content: {
            right: {
                base: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "../playground/assets/header/immersive_right/full.png"
                },
                outer: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "../playground/assets/header/immersive_right/outer.png"
                },
                inner: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "../playground/assets/header/immersive_right/inner.png"
                }
            }
        },
        color: "#D02843"
    },
    authors: [testauthorPagex],
    collections: [
        testCollection.id,
        featuredCollection.id
    ]
}