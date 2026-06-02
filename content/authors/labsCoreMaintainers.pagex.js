import {PagexResourceTransformer} from "pagex";
import {VoidcannonContentType, VoidcannonLinksIconType} from "voidcannon";

export default {
    type: VoidcannonContentType.AUTHOR,
    id: "labscore-maintainers",
    name: "labsCore Maintainers",
    avatar: {
        _transform: PagexResourceTransformer.MEDIA,
        path: "/authors/assets/labscore.webp"
    },
    theme: {
        partial: true,
        colors: {
            light: "#00F562",
            dark: "#00F562",
        }
    },
    links: [
        {
            label: "Discord",
            url: "https://discord.gg/fwU68KBH5d",
            icon: VoidcannonLinksIconType.DISCORD
        },
        {
            label: "GitLab",
            url: "https://gitlab.com/bignutty/labscore",
            icon: VoidcannonLinksIconType.GITLAB,
        }
    ]
}