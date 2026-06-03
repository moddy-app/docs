# Intro to Material Web Components

Material web, also known as Material Web Components or MWC, is a library of
[web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
that follows Google's [Material Design](https://material.io/)
guidelines.

## What is Material?

Material Design is a design system built and supported by Google designers and
developers. Guidelines for building Material apps and components are published
on [material.io](https://material.io).

The latest version, Material 3, enables personal, adaptive, and expressive
experiences – from dynamic color and enhanced accessibility, to foundations for
large screen layouts and design tokens.

## What are web components?

[Web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
are custom HTML elements with encapsulated styles and behavior. They work across
many different frameworks (such as Lit, React, Vue, and Svelte) as well as web
environments (such as Eleventy, Wordpress, and Ruby on Rails).

Many components in
this library are drop-in replacements for browser elements like `<button>` and `<input>`.

## What are tokens?

[Design tokens](https://m3.material.io/foundations/design-tokens/overview)
are the building blocks of all UI elements. In MWC, tokens are
[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
that can be used to style components.

```css
:root {
  --md-sys-color-primary: olive;
  --md-sys-color-secondary: tomato;
  --md-ref-typeface-brand: 'Open Sans';
  --md-ref-typeface-plain: system-ui;
}
```
