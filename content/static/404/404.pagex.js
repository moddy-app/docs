import {
    VoidcannonContentType, VoidcannonVisibilityFlags
} from "voidcannon";

import NotFoundFragment from "voidcannon/src/fragments/notfound/NotFound.fragment.js";

export default {
    type: VoidcannonContentType.STATIC,
    id: "voidcannon-404",
    slug: "404",
    name: "404",
    description: "404. Not found.",
    color: null,
    static: {
        fragment: NotFoundFragment,
        params: {}
    },
    visibility_flags: [
        VoidcannonVisibilityFlags.HIDDEN_IN_SITEMAP
    ]
}