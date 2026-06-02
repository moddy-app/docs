import {PagexResourceTransformer} from "pagex";
import {VoidcannonContentType, VoidcannonLinksIconType} from "voidcannon";

export default {
    type: VoidcannonContentType.AUTHOR,
    id: "bignutty",
    name: "bignutty",
    avatar: {
        _transform: PagexResourceTransformer.MEDIA,
        path: "/authors/assets/bignutty.png"
    },
    theme: {
        partial: true,
        colors: {
            light: "#bfee00",
            dark: "#bfee00",
        }
    },
    links: [
        {
            label: "Website",
            url: "https://bignut.zip/",
            icon: "public"
        },
        {
            label: "GitLab",
            url: "https://gitlab.com/bignutty",
            icon: VoidcannonLinksIconType.GITLAB,
        },
        {
            label: "Gramophone",
            url: "https://gramophone.bignut.zip/profile/big_nutty",
            icon: VoidcannonLinksIconType.GRAMOPHONE,
        },
        {
            label: "Twitter",
            url: "https://twitter.com/bignutty_",
            icon: VoidcannonLinksIconType.TWITTER,
        },
    ]
}