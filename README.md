# React Email examples with doc2.email

Demo email examples based on <https://react.email/examples>

## Live demo

* [GitHub / Access Token](https://preview--04d6f867-abdf-48d1-9e19-496a3ee28054.doc2.email/github?username=doc2-site-bot)

## Content source

The content is provided in Google Docs see Project: <https://drive.google.com/drive/folders/1uaz_fqzAD5K3giQmfumNAyhyloKUdaVm> and styled via an [index.json](./github/index.json). 

* GitHub / Access Token: [source](https://docs.google.com/document/d/11SDcbYZvHN2Q3LWHQo5TAhMu-hbkmq4EoLu0xJ3naUQ/edit) | [published](https://api.doc2.site/v1/docs/preview/1uaz_fqzAD5K3giQmfumNAyhyloKUdaVm?path=/github)

## Getting Started

First, run the development [server](./server.js):

```
npm run dev
```

Open <http://localhost:3000> with your browser to see the result. Modify the [index.json](./github/index.json) file then refresh the page to see the changes applied.

## Styling and component properties

By default, doc2.email will wrap the published content with `html`, `head`, `body` and `main` tags and map them to [react.email components](https://react.email/docs/components/html).

The mapping of published content to react.email components is as follows : 

* `html`: <https://github.com/resendlabs/react-email/tree/main/packages/html>
* `meta.preview`: <https://github.com/resendlabs/react-email/tree/main/packages/preview>
* `head`: <https://github.com/resendlabs/react-email/tree/main/packages/head>
* `body`: <https://github.com/resendlabs/react-email/tree/main/packages/body>
* `main`: <https://github.com/resendlabs/react-email/tree/main/packages/main>
* `a`: <https://github.com/resendlabs/react-email/tree/main/packages/link>
* `a` with the `isButton:true` property: <https://github.com/resendlabs/react-email/tree/main/packages/button>
* `p`: <https://github.com/resendlabs/react-email/tree/main/packages/text>
* `h1, h2, h3, h4, h5, h6`: <https://github.com/resendlabs/react-email/tree/main/packages/heading>
* `hr`: <https://github.com/resendlabs/react-email/tree/main/packages/hr>
* `img`: <https://github.com/resendlabs/react-email/tree/main/packages/img>
* `column` component: <https://github.com/resendlabs/react-email/tree/main/packages/section>
* `column-item` component: <https://github.com/resendlabs/react-email/tree/main/packages/column>

The [index.json](./github/index.json) file holds selectors to apply styling and custom properties to these components. 

## Deployment

The [index.json](./github/index.json) file is deployed to [GitHub Pages](https://pages.github.com/) see <https://doc2-site-bot.github.io/email-examples/github/index.json> and proxied as defined in <https://docs.google.com/document/d/11SDcbYZvHN2Q3LWHQo5TAhMu-hbkmq4EoLu0xJ3naUQ>. 

## Resources

To learn more, take a look at the following resources:

- [doc2.email docs](https://doc2.site/documentation) - learn about doc2.email features for authors and developers.
- [react.email docs](https://react.email/) - learn about react.email features and components.