import {
    VoidcannonCollectionColor,
    VoidcannonCollectionIconType,
    VoidcannonContentType,
    VoidcannonVisibilityFlags
} from "voidcannon";
import {PagexResourceTransformer} from "pagex";

export default {
    type: VoidcannonContentType.COLLECTION,
    id: "gramophone",
    name: "Gramophone",
    description: "Anything about Gramophone, the alternative Last.fm frontend.",
    color: VoidcannonCollectionColor.BLUE,
    icon: {
        type: VoidcannonCollectionIconType.IMAGE,
        image: {
            _transform: PagexResourceTransformer.MEDIA,
            path: "./assets/gramophone.png"
        }
    },
    visibility_flags: [
        VoidcannonVisibilityFlags.HIDDEN_IN_SITEMAP,
    ],
}