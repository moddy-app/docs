import {VoidcannonContentType, VoidcannonVisibilityFlags} from "voidcannon";

export default {
    type: VoidcannonContentType.AUTHOR,
    id: "test-author",
    name: "Test Author",
    avatar: "science",
    theme: {
        colors: {
            light: "#d7a6f4",
            dark: "#d7a6f4",
        }
    },
    links: [
        {
            label: "Website",
            url: "https://blog.bignut.zip/",
            icon: "public"
        }
    ],
    visibility_flags: [
        VoidcannonVisibilityFlags.HIDDEN_IN_SITEMAP,
    ],
}