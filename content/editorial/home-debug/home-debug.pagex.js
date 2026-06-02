import {
    VoidcannonContentType,
    VoidcannonSectionType, VoidcannonVisibilityFlags
} from "voidcannon";

import {PagexResourceTransformer} from "pagex";
import CollectionContentTransformer from "voidcannon/src/transformers/CollectionContent.transformer.js";
import RecentContentTransformer from "voidcannon/src/transformers/RecentContent.transformer.js";
import ContentByIdentifierTransformer from "voidcannon/src/transformers/ContentByIdentifier.transformer.js";

import playground from "../../articles/playground/playground.pagex.js";
import playgroundP3 from "../../articles/playground-p3/playground-p3.pagex.js";
import playgroundEmpty from "../../articles/playground-empty/playground-empty.pagex.js";

import recentArticles from "../recent-articles/recent-articles.pagex.js";

export default {
    type: VoidcannonContentType.EDITORIAL,
    id: "voidcannon-index-debug",
    slug: "home-debug",
    name: "Voidcannon Home",
    description: "Voidcannon Home",
    color: null,
    sections: [
        {
            type: VoidcannonSectionType.STORY_HERO,
            content: {
                _transform: ContentByIdentifierTransformer,
                content_ids: [
                    playground.id,
                    playgroundEmpty.id,
                    playgroundP3.id,
                ],
                // TODO: implement this
                content_types: [
                    VoidcannonContentType.ARTICLE
                ]
            }
        },
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
                _transform: CollectionContentTransformer,
                collection_id: "test"
            },
            label: "Testing Articles",
            icon: "forklift"
        },
        {
            type: VoidcannonSectionType.EDITORIAL,
            content: {
                _transform: PagexResourceTransformer.MARKDOWN,
                content: "<gm3-wavy-divider></gm3-wavy-divider>"
            }
        },
        {
            type: VoidcannonSectionType.CONTENT_GRID,
            content: {
                _transform: RecentContentTransformer,
                amount: 15
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
            type: VoidcannonSectionType.CAROUSEL,
            content: {
                _transform: CollectionContentTransformer,
                collection_id: "featured"
            },
            label: "Various Articles",
            target: "collections/featured"
        },
    ],
    visibility_flags: [
        VoidcannonVisibilityFlags.HIDDEN_IN_SITEMAP
    ]
}