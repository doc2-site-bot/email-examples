# React Email examples with doc2.email

Demo email examples based on <https://react.email/examples>

## Live demo

* [GitHub / Access Token](https://preview--email-demo.doc2.email/github?username=doc2-site-bot)

## Content source

The content is provided in Google Docs see Project: <https://drive.google.com/drive/folders/1uaz_fqzAD5K3giQmfumNAyhyloKUdaVm> and styled via an [ssr.json](./github/ssr.json). 

* GitHub / Access Token: [source](https://docs.google.com/document/d/11SDcbYZvHN2Q3LWHQo5TAhMu-hbkmq4EoLu0xJ3naUQ/edit) | [published](https://api.doc2.site/v1/docs/preview/1uaz_fqzAD5K3giQmfumNAyhyloKUdaVm?path=/github)

## Getting Started

First, install the doc2 CLI with `npm i -g @doc2/cli`, then run the doc2.email dev server:

```
doc2 email --dev
```

Open <http://localhost:3000/github> with your browser to see the result. Modify the [ssr.json](./github/ssr.json) file then refresh the page to see the changes applied.

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

The [ssr.json](./github/ssr.json) file holds selectors to apply styling and custom properties to these components. 

Use query parameters to replace variables for example, the GitHub Access Token email content defines a variable named `username` and a link to `https://github.com/{username}/tokens`. By setting the query parameter `?username=doc2-site-bot`, you can replace the variable with the provided value.

## Deployment

The [ssr.json](./github/ssr.json) file is deployed to [GitHub Pages](https://pages.github.com/) see <https://doc2-site-bot.github.io/email-examples/github/ssr.json> and proxied as defined in <https://docs.google.com/document/d/11SDcbYZvHN2Q3LWHQo5TAhMu-hbkmq4EoLu0xJ3naUQ>. 

## Resources

To learn more, take a look at the following resources:

- [doc2.email docs](https://doc2.site/documentation) - learn about doc2.email features for authors and developers.
- [react.email docs](https://react.email/) - learn about react.email features and components.
