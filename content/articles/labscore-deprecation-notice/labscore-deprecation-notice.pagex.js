import {VoidcannonHeaderType, VoidcannonContentType} from "voidcannon";

import {PagexResourceTransformer} from "pagex";
import labsCoreMaintainersPagex from "../../authors/labsCoreMaintainers.pagex.js";
import discordPagex from "../../collections/discord.pagex.js";

export default {
    type: VoidcannonContentType.ARTICLE,
    content: {
        _transform: PagexResourceTransformer.MARKDOWN,
        path: "./content.md"
    },
    id: "labscore-deprecation-notice",
    title: "labsCore End of Service Notice",
    slug: "labscore-eos-notice",
    abstract: "labsCore will be ceasing operations after 2025.",
    created_at: 1762613309204,
    theme: {
        partial: true,
        colors: {
            light: "#00F562",
            dark: "#00F562",
        }
    },
    header: {
        type: VoidcannonHeaderType.IMAGE,
        position: "90% 100%",
        base: {
            _transform: PagexResourceTransformer.MEDIA,
            path: "./assets/header/background.webp"
        },
        color: "#0eb1f4"
    },
    authors: [labsCoreMaintainersPagex],
    collections: [discordPagex.id]
}