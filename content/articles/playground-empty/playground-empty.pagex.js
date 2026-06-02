import {VoidcannonContentType, VoidcannonVisibilityFlags} from "voidcannon";

import placeholder from "../../authors/placeholder.pagex.js";

import {PagexResourceTransformer} from "pagex";

export default {
    type: VoidcannonContentType.ARTICLE,
    content: {
        _transform: PagexResourceTransformer.MARKDOWN,
        path: "./content.md"
    },
    id: "playground-empty",
    title: "Playground Empty Article",
    created_at: 1762267626610,
    visibility_flags: [
        VoidcannonVisibilityFlags.HIDDEN_IN_RECENTS,
        VoidcannonVisibilityFlags.HIDDEN_IN_SITEMAP,
    ],
    authors: [placeholder]
}