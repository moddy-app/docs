import {
    VoidcannonCollectionColor,
    VoidcannonCollectionIconType,
    VoidcannonCollectionType,
    VoidcannonContentType, VoidcannonVisibilityFlags
} from "voidcannon";

export default {
    type: VoidcannonContentType.COLLECTION,
    collection_type: VoidcannonCollectionType.HIDDEN,
    id: "featured",
    name: "Featured Content",
    description: "Featured Content Collection",
    color: VoidcannonCollectionColor.AQUA,
    icon: {
        type: VoidcannonCollectionIconType.ICON,
        icon: "forklift",
        gradient: ["#ff0","#00ffff"],
    },
    visibility_flags: [
        VoidcannonVisibilityFlags.HIDDEN_IN_SITEMAP,
    ],
}