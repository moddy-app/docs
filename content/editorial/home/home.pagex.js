import {
    VoidcannonContentType,
    VoidcannonSectionType
} from "voidcannon";

import {PagexResourceTransformer} from "pagex";
import RecentContentTransformer from "voidcannon/src/transformers/RecentContent.transformer.js";

import recentArticles from "../recent-articles/recent-articles.pagex.js";

export default {
    type: VoidcannonContentType.EDITORIAL,
    id: "blognutty-index",
    slug: "index",
    name: "/home",
    description: "blognutty home",
    color: null,
    sections: [
        {
            type: VoidcannonSectionType.EDITORIAL,
            content: {
                _transform: PagexResourceTransformer.MARKDOWN,
                path: "./content.md"
            }
        },
        {
            type: VoidcannonSectionType.CONTENT_GRID,
            content: {
                _transform: RecentContentTransformer,
                amount: 9
            },
            label: "Recent Articles",
            icon: "history",
            cta: {
                label: "View All",
                target: {
                    type: VoidcannonContentType.EDITORIAL,
                    id: recentArticles.id
                },
            }
        },
        {
            type: VoidcannonSectionType.EDITORIAL,
            content: {
                _transform: PagexResourceTransformer.MARKDOWN,
                content: "‼🦭"
            }
        },
    ]
}