---
name: Floating action button (FAB)
dirname: fab
---

<catalog-component-header>
<catalog-component-header-title slot="title">

# Floating action buttons (FAB)

[FAB](https://m3.material.io/components/floating-action-button)<!-- {.external} -->
represents the most important action on a screen. It puts key actions within
reach.

[Extended FABs](https://m3.material.io/components/extended-fab) help people take
primary actions. They're wider than FABs to accommodate a text label and larger
target area.

</catalog-component-header-title>

<img
    class="hero"
    alt="A phone showing a payment screen with a green filled button that says 'Make
payment'"
    src="../images/fab/hero.webp">

</catalog-component-header>

*   Design articles
    *   [FAB](https://m3.material.io/components/floating-action-button)
        <!-- {.external} -->
    *   [Extended FAB](https://m3.material.io/components/extended-fab)
        <!-- {.external} -->
*   API Documentation (*coming soon*)
*   [Source code](https://github.com/material-components/material-web/tree/main/fab)
    <!-- {.external} -->

## Interactive Demo

{% playgroundexample dirname=dirname %}

## Types

<div class="figure-wrapper">
  <figure
      class="types-image"
      style="justify-content:center;"
      title="There are three sizes of floating action buttons: FAB, small FAB, and large FAB"
      aria-label="The 3 sizes of FAB">
    <style>
      .types-image .wrapper,
      .types-image .wrapper > * {
        display: flex;
        padding: 8px;
        flex-wrap: wrap;
        justify-content: center;
      }
      .types-image .wrapper > * {
        flex-direction: column;
        align-items: center;
        padding-inline: 16px;
      }
      .types-image span {
        display: inline-flex;
        background-color: var(--md-sys-color-inverse-surface);
        color: var(--md-sys-color-inverse-on-surface);
        padding: 8px;
        margin-block-start: 8px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
      }
      .types-image .fab-wrapper {
        height: 96px;
        display: flex;
        align-items: center;
      }
    </style>
    <div class="wrapper">
      <div>
        <div class="fab-wrapper">
          <md-fab variant="primary" aria-label="Accessibility">
            <md-icon slot="icon">accessible_forward</md-icon>
          </md-fab>
        </div>
        <span>1</span>
      </div>
      <div>
        <div class="fab-wrapper">
          <md-fab variant="tertiary" size="small" aria-label="Edit">
            <md-icon slot="icon">edit</md-icon>
          </md-fab>
        </div>
        <span>2</span>
      </div>
      <div>
        <div class="fab-wrapper">
          <md-fab size="large" aria-label="Color Palette">
            <md-icon slot="icon">palette</md-icon>
          </md-fab>
        </div>
        <span>3</span>
      </div>
    </div>
  </figure>
</div>

1.  [FAB](#fab)
2.  [Small FAB](#sizes)
3.  [Large FAB](#sizes)

### Extended FAB

<div class="figure-wrapper">
  <figure
      class="types-image"
      style="justify-content:center;"
      title="There are two types of extended FABs with and without icon"
      aria-label="2 examples of extended FABs">
    <div class="wrapper">
      <div>
        <div class="fab-wrapper">
          <md-fab label="navigate" variant="primary">
            <md-icon slot="icon">navigation</md-icon>
          </md-fab>
        </div>
        <span>1</span>
      </div>
      <div>
        <div class="fab-wrapper">
          <md-fab variant="surface" label="reroute">
          </md-fab>
        </div>
        <span>2</span>
      </div>
    </div>
  </figure>
</div>


*   [Extended FAB with both icon and label text](#extended)
*   [API Documentation](#api)
*   [Extended FAB without icon](#without-icon)

## Usage

FABs should have an icon, such as a font `md-icon`, an `svg`, or an `img`.

<div class="figure-wrapper">
  <figure
      aria-label="A standard surface fab"
      style="padding-block: 16px;">
    <md-fab aria-label="Edit">
      <md-icon slot="icon">edit</md-icon>
    </md-fab>
  </figure>
</div>

```html
<md-fab aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

### Lowered

FABs can be set to a lower elevation with the `lowered` attribute.

<div class="figure-wrapper">
  <figure
      aria-label="A standard fab with an edit icon and lowered in elevation"
      style="padding-block: 16px;">
    <md-fab lowered aria-label="Edit">
      <md-icon slot="icon">edit</md-icon>
    </md-fab>
  </figure>
</div>

```html
<md-fab lowered aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

## Accessibility

Icon-only FABs must include an `aria-label` that describes its action. Otherwise
if `aria-label` is not provided, the FAB will default to announcing its visible
contents.

```html
<md-fab aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

Extended FABs use their `label` for accessibility. Add an `aria-label` for
additional context if needed. By supplying the `label` attribute, the extended
FAB will make sure that the icon is not announced.

```html
<md-fab label="Edit" aria-label="Edit Comment">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

## FAB

FABs should display a clear and understandable icon.

<div class="figure-wrapper">
  <figure
      aria-label="A standard surface fab"
      style="padding-block: 16px;">
    <md-fab aria-label="Edit">
      <md-icon slot="icon">edit</md-icon>
    </md-fab>
  </figure>
</div>

```html
<md-fab aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

### Extended

FABs may be extended with a label for additional emphasis. Extended FABs can
omit their icon.

<div class="figure-wrapper">
  <figure
      aria-label="An extended FAB with an edit icon and the visible text edit"
      style="padding-block: 16px;">
    <md-fab label="Edit">
      <md-icon slot="icon">edit</md-icon>
    </md-fab>
  </figure>
</div>

```html
<md-fab label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

#### Without icon

Extended FABs are the only FABs that can be used without an icon.

<div class="figure-wrapper">
  <figure
      aria-label="An extended FAB with a visible label saying reroute"
      style="padding-block: 16px;">
    <md-fab label="Reroute"></md-fab>
  </figure>
</div>

```html
<md-fab label="Reroute"></md-fab>
```

### Colors

FAB colors may be changed with the `variant` attribute. It can be set to
"surface" (default), "primary", "secondary", or "tertiary".

<div class="figure-wrapper">
  <figure
      aria-label="Three fabs with edit icons next to each other but the first is primary colored, second is secondary, and the last is tertiary colored."
      style="padding-block: 16px;gap: 16px;display: flex;">
    <md-fab variant="primary" aria-label="Edit">
      <md-icon slot="icon">edit</md-icon>
    </md-fab>
    <md-fab variant="secondary" aria-label="Edit">
      <md-icon slot="icon">edit</md-icon>
    </md-fab>
    <md-fab variant="tertiary" aria-label="Edit">
      <md-icon slot="icon">edit</md-icon>
    </md-fab>
  </figure>
</div>

```html
<md-fab variant="primary" aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
<md-fab variant="secondary" aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
<md-fab variant="tertiary" aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

### Sizes

FABs may be small, medium (default), or large by setting the `size` attribute.
Small FABs can optionally further reduce their touch target.

<div class="figure-wrapper">
  <figure
    aria-label="Four surface fabs side by side with edit icons of visual size size small, small, medium, and large"
    style="padding-block: 16px; gap: 16px; display: flex"
  >
    <md-fab size="small" touch-target="none" aria-label="Edit">
      <md-icon slot="icon">edit</md-icon>
    </md-fab>
    <md-fab size="small" aria-label="Edit">
      <md-icon slot="icon">edit</md-icon>
    </md-fab>
    <md-fab aria-label="Edit">
      <md-icon slot="icon">edit</md-icon>
    </md-fab>
    <md-fab size="large" aria-label="Edit">
      <md-icon slot="icon">edit</md-icon>
    </md-fab>
  </figure>
</div>


```html
<md-fab size="small" touch-target="none" aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
<md-fab size="small" aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
<md-fab aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
<md-fab size="large" aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

## Branded FAB

Branded FABs use a brightly colored logo for their icon. Unlike [FAB](#fab),
branded FABs do not have color variants.

<div class="figure-wrapper">
  <figure
      aria-label="A branded FAB with a google-colored plus icon."
      style="padding-block: 16px;">
    <md-branded-fab size="small" aria-label="Add">
      <svg slot="icon" viewBox="0 0 36 36">
        <path fill="#34A853" d="M16 16v14h4V20z"></path>
        <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
        <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
        <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
        <path fill="none" d="M0 0h36v36H0z"></path>
      </svg>
    </md-branded-fab>
  </figure>
</div>

```html
<md-branded-fab size="small" aria-label="Add">
  <svg slot="icon" viewBox="0 0 36 36">
    <path fill="#34A853" d="M16 16v14h4V20z"></path>
    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
    <path fill="none" d="M0 0h36v36H0z"></path>
  </svg>
</md-branded-fab>
```

### Extended

Branded FABs may be extended with a label for additional emphasis. Unlike
[FAB](#fab), branded FABs should always display their logo icon.

<div class="figure-wrapper">
  <figure
      aria-label="An extended branded fab with a google-colored plus icon and the visible text Add"
      style="padding-block: 16px;">
    <md-branded-fab label="Add">
      <svg slot="icon" viewBox="0 0 36 36">
        <path fill="#34A853" d="M16 16v14h4V20z"></path>
        <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
        <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
        <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
        <path fill="none" d="M0 0h36v36H0z"></path>
      </svg>
    </md-branded-fab>
  </figure>
</div>

```html
<md-branded-fab label="Add">
  <svg slot="icon" viewBox="0 0 36 36">
    <path fill="#34A853" d="M16 16v14h4V20z"></path>
    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
    <path fill="none" d="M0 0h36v36H0z"></path>
  </svg>
</md-branded-fab>
```

### Sizes

Branded FABs may be medium (default) or large by setting the `size` attribute.

<div class="figure-wrapper">
  <figure
    aria-label="Two branded FABs next to each other with a google-branded plus icon. A medium sized one and a large one."
    style="padding-block: 16px; gap: 16px; display: flex"
  >
    <md-branded-fab aria-label="Add">
      <svg slot="icon" viewBox="0 0 36 36">
        <path fill="#34A853" d="M16 16v14h4V20z"></path>
        <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
        <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
        <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
        <path fill="none" d="M0 0h36v36H0z"></path>
      </svg>
    </md-branded-fab>
    <md-branded-fab size="large" aria-label="Add">
      <svg slot="icon" viewBox="0 0 36 36">
        <path fill="#34A853" d="M16 16v14h4V20z"></path>
        <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
        <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
        <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
        <path fill="none" d="M0 0h36v36H0z"></path>
      </svg>
    </md-branded-fab>
  </figure>
</div>


```html
<md-branded-fab aria-label="Add">
  <svg slot="icon" viewBox="0 0 36 36">
    <path fill="#34A853" d="M16 16v14h4V20z"></path>
    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
    <path fill="none" d="M0 0h36v36H0z"></path>
  </svg>
</md-branded-fab>
<md-branded-fab size="large" aria-label="Add">
  <svg slot="icon" viewBox="0 0 36 36">
    <path fill="#34A853" d="M16 16v14h4V20z"></path>
    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
    <path fill="none" d="M0 0h36v36H0z"></path>
  </svg>
</md-branded-fab>
```

## Theming

FAB supports [Material theming](../theming/README.md) and can be customized in
terms of color, typography, and shape.

### FAB tokens

Token                              | Default value
---------------------------------- | ---------------------------------------
`--md-fab-container-color`         | `--md-sys-color-surface-container-high`
`--md-fab-lowered-container-color` | `--md-sys-color-surface-container-low`
`--md-fab-container-shape`         | `--md-sys-shape-corner-large`
`--md-fab-icon-color`              | `--md-sys-color-primary`
`--md-fab-icon-size`               | `24px`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-fab.scss)
    <!-- {.external} -->

### FAB example

<div class="figure-wrapper">
  <figure
      class="styled-example fab"
      aria-label="Image of a fab with a different theme applied"
      style="padding-block: 16px;">
    <style>
      .styled-example {
        --md-sys-color-surface-container-high: #e3e9e9;
        --md-sys-color-primary: #006a6a;
        background-color: #f4fbfa;
      }
      .styled-example.fab {
        --md-fab-icon-size: 36px;
        --md-fab-container-shape: 0px;
      }
    </style>
    <md-fab aria-label="Edit">
      <md-icon slot="icon">edit</md-icon>
    </md-fab>
  </figure>
</div>

```html
<style>
  :root {
    --md-sys-color-surface-container-high: #e3e9e9;
    --md-sys-color-primary: #006a6a;
    --md-fab-container-shape: 0px;
    --md-fab-icon-size: 36px;
    background-color: #f4fbfa;
  }
</style>
<md-fab aria-label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

#### Sizes tokens

Token                            | Default value
-------------------------------- | -------------
`--md-fab-small-container-shape` | `--md-sys-shape-corner-medium`
`--md-fab-small-icon-size`       | `24px`
`--md-fab-large-container-shape` | `--md-sys-shape-corner-extra-large`
`--md-fab-large-icon-size`       | `36px`

#### Extended FAB tokens

Token                      | Default value
-------------------------- | -------------------------------------
`--md-fab-label-text-font` | `--md-sys-typescale-label-large-font`

#### Extended FAB example

<div class="figure-wrapper">
  <figure
      class="styled-example extended"
      aria-label="Image of an extended FAB with a different theme applied"
      style="padding-block: 16px;">
    <style>
      .styled-example.extended {
        --md-fab-label-text-font: system-ui;
        --md-fab-icon-size: 36px;
        --md-fab-container-shape: 0px;
      }
    </style>
    <md-fab label="Edit">
      <md-icon slot="icon">edit</md-icon>
    </md-fab>
  </figure>
</div>


```html
<style>
  :root {
    --md-sys-color-surface-container-high: #e3e9e9;
    --md-sys-color-on-surface: #161d1d;
    --md-sys-color-primary: #006a6a;
    --md-fab-container-shape: 0px;
    --md-fab-icon-size: 36px;
    background-color: #f4fbfa;
  }
</style>
<md-fab label="Edit">
  <md-icon slot="icon">edit</md-icon>
</md-fab>
```

### Branded FAB tokens

Token                              | Default value
---------------------------------- | ---------------------------------------
`--md-fab-branded-container-color` | `--md-sys-color-surface-container-high`
`--md-fab-branded-container-shape` | `--md-sys-shape-corner-large`
`--md-fab-branded-icon-size`       | `36px`
`--md-fab-branded-label-text-font` | `--md-sys-typescale-label-large-font`

*   [All tokens](https://github.com/material-components/material-web/blob/main/tokens/_md-comp-fab-branded.scss)
    <!-- {.external} -->

### Branded FAB example

<div class="figure-wrapper">
  <figure
      class="styled-example branded"
      aria-label="Image of two branded fabs, one regular, one extended with the visible label Add with a different theme applied"
      style="padding-block: 16px;gap: 16px;display: flex;">
    <style>
      .styled-example.branded {
        --md-sys-color-on-surface: #161d1d;
        --md-fab-branded-label-text-font: system-ui;
        --md-fab-branded-icon-size: 48px;
        --md-fab-branded-container-shape: 0px;
      }
    </style>
    <md-branded-fab size="small" aria-label="Add">
      <svg slot="icon" viewBox="0 0 36 36">
        <path fill="#34A853" d="M16 16v14h4V20z"></path>
        <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
        <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
        <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
        <path fill="none" d="M0 0h36v36H0z"></path>
      </svg>
    </md-branded-fab>
    <md-branded-fab size="small" label="Add">
      <svg slot="icon" viewBox="0 0 36 36">
        <path fill="#34A853" d="M16 16v14h4V20z"></path>
        <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
        <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
        <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
        <path fill="none" d="M0 0h36v36H0z"></path>
      </svg>
    </md-branded-fab>
  </figure>
</div>


```html
<style>
  :root {
    --md-sys-color-surface-container-high: #e3e9e9;
    --md-sys-color-on-surface: #161d1d;
    --md-fab-branded-icon-size: 48px;
    --md-fab-branded-container-shape: 0px;
    background-color: #f4fbfa;
  }
</style>
<md-branded-fab size="small" aria-label="Add">
  <svg slot="icon" viewBox="0 0 36 36">
    <path fill="#34A853" d="M16 16v14h4V20z"></path>
    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
    <path fill="none" d="M0 0h36v36H0z"></path>
  </svg>
</md-branded-fab>
<md-branded-fab size="small" label="Add">
  <svg slot="icon" viewBox="0 0 36 36">
    <path fill="#34A853" d="M16 16v14h4V20z"></path>
    <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
    <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
    <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
    <path fill="none" d="M0 0h36v36H0z"></path>
  </svg>
</md-branded-fab>
```

<!-- auto-generated API docs start -->

## API


### MdFab <code>&lt;md-fab&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `variant` | `variant` | `string` | `'surface'` | The FAB color variant to render. |
| `size` | `size` | `string` | `'medium'` | The size of the FAB.<br>NOTE: Branded FABs cannot be sized to `small`, and Extended FABs do not have different sizes. |
| `label` | `label` | `string` | `''` | The text to display on the FAB. |
| `lowered` | `lowered` | `boolean` | `false` | Lowers the FAB's elevation. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

### MdBrandedFab <code>&lt;md-branded-fab&gt;</code>

#### Properties

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Property | Attribute | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `variant` | `variant` | `string` | `'surface'` | The FAB color variant to render. |
| `size` | `size` | `string` | `'medium'` | The size of the FAB.<br>NOTE: Branded FABs cannot be sized to `small`, and Extended FABs do not have different sizes. |
| `label` | `label` | `string` | `''` | The text to display on the FAB. |
| `lowered` | `lowered` | `boolean` | `false` | Lowers the FAB's elevation. |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

#### Methods

<!-- mdformat off(autogenerated might break rendering in catalog) -->

| Method | Parameters | Returns | Description |
| --- | --- | --- | --- |
| `getRenderClasses` | _None_ | `{ primary: boolean; secondary: boolean; tertiary: boolean; small: boolean; lowered: boolean; large: boolean; extended: boolean; }` |  |

<!-- mdformat on(autogenerated might break rendering in catalog) -->

<!-- auto-generated API docs end -->
