import {
    VoidcannonCollectionColor,
    VoidcannonCollectionIconType,
    VoidcannonContentType,
    VoidcannonVisibilityFlags
} from "voidcannon";

export default {
    type: VoidcannonContentType.COLLECTION,
    id: "test",
    name: "Test Collection",
    description: "contains testing articles",
    color: VoidcannonCollectionColor.YELLOW_VIBRANT,
    icon: {
        type: VoidcannonCollectionIconType.EMOJI,
        emoji: "🥰"
    },
    visibility_flags: [
        VoidcannonVisibilityFlags.HIDDEN_IN_SITEMAP,
    ],
}