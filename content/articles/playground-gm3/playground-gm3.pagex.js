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
    id: "playground-gm3",
    title: "Playground Test Article (gm3 base theme)",
    created_at: 1757861297516,
    visibility_flags: [
        VoidcannonVisibilityFlags.HIDDEN_IN_RECENTS,
        VoidcannonVisibilityFlags.HIDDEN_IN_SITEMAP,
    ],
    theme: {
        emoji_style: VoidcannonEmojiStyle.TWITTER
    },
    header: {
        type: VoidcannonHeaderType.IMMERSIVE,
        layout: VoidcannonHeaderLayoutType.TEXT,
        label: "Article Title (gm3)",
        base: {
            _transform: PagexResourceTransformer.MEDIA,
            path: "../playground/assets/header/background-street.png"
        },
        immersive_content: {
            left: {
                base: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "../playground/assets/header/immersive_left/full.png"
                },
                outer: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "../playground/assets/header/immersive_left/outer_v2.png"
                },
                inner: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "../playground/assets/header/immersive_left/base_v2.png"
                }
            }
        },
        color: "#c7f718"
    },
    authors: [testauthorPagex],
    collections: [
        testCollection.id,
        featuredCollection.id
    ]
}