import {
    VoidcannonHeaderLayoutType,
    VoidcannonHeaderType,
    VoidcannonContentType
} from "voidcannon";

import bignuttyPagex from "../../authors/bignutty.pagex.js";

import videogamesCollection from "../../collections/videogames.pagex.js";

import {PagexResourceTransformer} from "pagex";
import {ThemeVariants} from "pagex_commons";

export default {
    type: VoidcannonContentType.ARTICLE,
    content: {
        _transform: PagexResourceTransformer.MARKDOWN,
        path: "./content.md"
    },
    id: "resident-evil-requiem",
    title: "Thoughts on Resident Evil Requiem",
    abstract: "My favourite horror game of 2026. I didn't think they could come up with something worse than the fetus from Village.",
    author_abstract: "Professional scaredy cat",
    created_at: 1773102988178,
    theme: {
        partial: true,
        colors: {
            light: "#a30e0e",
            dark: "#a30e0e",
        },
        variant: ThemeVariants.VIBRANT,
    },
    header: {
        type: VoidcannonHeaderType.IMMERSIVE,
        layout: VoidcannonHeaderLayoutType.LOGO_LEFT,
        position: "0% 100%",
        base: {
            _transform: PagexResourceTransformer.MEDIA,
            path: "./assets/header/background_re9.webp"
        },
        logo: {
            _transform: PagexResourceTransformer.MEDIA,
            path: "./assets/header/logo_re9.webp"
        },
        immersive_content: {
            right: {
                outer: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "./assets/header/immersive_outer_re9.webp"
                },
                inner: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "./assets/header/immersive_inner_re9.webp"
                },
                base: {
                    _transform: PagexResourceTransformer.MEDIA,
                    path: "./assets/header/immersive_full_re9.webp"
                }
            }
        },
        color: "#a30e0e"
    },
    authors: [bignuttyPagex],
    collections: [
        videogamesCollection.id,
    ]
}