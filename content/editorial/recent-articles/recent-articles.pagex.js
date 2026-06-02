import {
    VOIDCANNON_MAX_ITEMS_PER_PAGE,
    VoidcannonContentType,
    VoidcannonSectionType
} from "voidcannon";

import RecentContentTransformer from "voidcannon/src/transformers/RecentContent.transformer.js";

export default {
    type: VoidcannonContentType.EDITORIAL,
    id: "voidcannon-recent",
    slug: "recent-articles",
    paging: {
        entries: {
            _transform: RecentContentTransformer,
        },
        per_page: VOIDCANNON_MAX_ITEMS_PER_PAGE
    },
    name: "Recent Articles",
    description: "Recent Articles",
    color: null,
    sections: [
        {
            type: VoidcannonSectionType.CONTENT_GRID,
            content: "$paginationItems",
            label: "Recent Articles",
            icon: "history"
        },
        {
            type: VoidcannonSectionType.PAGINATOR
        }
    ]
}