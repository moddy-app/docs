export const DEFAULT_LANG = 'fr' as const;
export const SUPPORTED_LANGS = ['fr', 'en'] as const;
export type Lang = typeof SUPPORTED_LANGS[number];

export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.search': 'Rechercher',
    'nav.search.placeholder': 'Rechercher dans la documentation...',
    'nav.theme.light': 'Mode clair',
    'nav.theme.dark': 'Mode sombre',
    'nav.lang': 'Langue',
    'nav.back': 'Retour',

    'home.title': 'Documentation Moddy',
    'home.subtitle': 'Tout ce que vous devez savoir sur Moddy, le bot Discord conçu pour votre communauté.',
    'home.featured': 'Articles récents',
    'home.seeAll': 'Voir tout',
    'home.noArticles': 'Aucun article pour le moment.',

    'article.by': 'Par',
    'article.on': 'le',
    'article.readingTime': 'min de lecture',
    'article.labels': 'Catégories',
    'article.authors': 'Auteurs',
    'article.backToTop': 'Haut de page',

    'author.articles': 'Articles',
    'author.noArticles': 'Aucun article publié.',
    'author.links': 'Liens',

    'collection.articles': 'Articles dans cette collection',
    'collection.noArticles': 'Aucun article dans cette collection.',

    'search.noResults': 'Aucun résultat pour',
    'search.results': 'résultat(s) pour',
    'search.close': 'Fermer',

    '404.title': 'Page introuvable',
    '404.subtitle': 'La page que vous cherchez n\'existe pas ou a été déplacée.',
    '404.home': 'Retour à l\'accueil',

    'lang.fr': 'Français',
    'lang.en': 'English',
  },
  en: {
    'nav.home': 'Home',
    'nav.search': 'Search',
    'nav.search.placeholder': 'Search the documentation...',
    'nav.theme.light': 'Light mode',
    'nav.theme.dark': 'Dark mode',
    'nav.lang': 'Language',
    'nav.back': 'Back',

    'home.title': 'Moddy Documentation',
    'home.subtitle': 'Everything you need to know about Moddy, the Discord bot built for your community.',
    'home.featured': 'Recent articles',
    'home.seeAll': 'See all',
    'home.noArticles': 'No articles yet.',

    'article.by': 'By',
    'article.on': 'on',
    'article.readingTime': 'min read',
    'article.labels': 'Categories',
    'article.authors': 'Authors',
    'article.backToTop': 'Back to top',

    'author.articles': 'Articles',
    'author.noArticles': 'No articles published yet.',
    'author.links': 'Links',

    'collection.articles': 'Articles in this collection',
    'collection.noArticles': 'No articles in this collection.',

    'search.noResults': 'No results for',
    'search.results': 'result(s) for',
    'search.close': 'Close',

    '404.title': 'Page not found',
    '404.subtitle': 'The page you\'re looking for doesn\'t exist or has been moved.',
    '404.home': 'Back to home',

    'lang.fr': 'Français',
    'lang.en': 'English',
  },
} as const;

export type UIKey = keyof typeof ui[typeof DEFAULT_LANG];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang]?.[key] ?? ui[DEFAULT_LANG][key] ?? key;
}
