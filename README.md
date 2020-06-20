# My Resume

I got fed up with screwing around with styles in Microsoft Word and decided to
use CSS for my resume instead. Then I decided to make it with Vue because, 1) I
wanted to use components and have a JSON-based system, basically what amounts to
a theme, and 2) because I can! 🥳


## Usage

If you like the look of my resume, Feel free to fork this repository and use
this resume's theme as your own! Everything on it can be tweaked simply by
editing [`resume-data.js`](src/resume-data.js). It should be fairly
self-explanatory.

This is just a Vue app, so you can install and run it with

```console
$ npm install
$ npm run serve
```

and build it with

```console
$ npm run build
```

The `CoverLetter.vue` view is not available in production &mdash; only when
running locally.


### Data

For the most part, `resume-data.js` is pretty easy to follow. But, the `contact`
object, used for the grid of URLs, Phone numbers, etc. at the top of the page,
has some additional possibilies.

For the most basic usage, this is probably all you need:

```javascript
export const contact = {
    service: {
        url: 'https://example.com',
        display: 'Text to display in <a>'
    },
};
```

The `url` field can be omitted if it isn't necessary. This will remove the
hyperlink and just use text.

By default, the following are recognized as services and have the proper
FontAwesome icons set:

| Key in the Object   | FontAwesome Icon          |
| :------------------ | :------------------------ |
| `phone`             | `fa-phone-alt`            |
| `mobile`            | `fa-mobile`               |
| `email`             | `fa-paper-plane`          |
| `github`            | `fa-github`               |
| `twitter`           | `fa-twitter`              |
| `linkedin`          | `fa-linkedin`             |
| `stackoverflow`     | `fa-stack-overflow`       |
| all others          | `fa-external-link-square` |

However, if you don't like these, you can specify `icon` and pass in a valid
FontAwesome icon name (including the `fa-` prefix), and you'll get that icon
instead. By default, `fas` (solid style) will be used. If you'd prefer another
style, like `fal` (light style), you can specify and `iconStyle` in the object.

Finally, if you'd prefer to not have any grid of contact information, you can
simply set

```javascript
export const contact = false;
```


### FontAwesome

This app uses a single Pro Icon from FontAwesome. If you have FontAwesome Pro,
you have nothing to worry about! Yay! That is, as long as you've previously done
the steps required to use FontAwesome with a package manager:
[FontAwesome Docs][1]

If you don't, here's how to get it working (you're going to have a slightly
different bullet point, `long-arrow-alt-right` instead of `long-arrow-right`):

1.  Uninstall `@fortawesome/font-awesome-pro`, and install
    `@fortawesome/font-awesome-free`:
    ```console
    $ npm uninstall --save @fortawesome/font-awesome-pro
    $ npm install --save @fortawesome/font-awesome-free
    ```
2.  Go to [`main.js`](src/main.js) and change the imports from
    `font-awesome-pro` to `font-awesome-free`:
    ```javascript
    import '@fortawesome/fontawesome-{pro => free}/css/all.min.css';
    import '@fortawesome/fontawesome-{pro => free}/js/all.min.js';
    ```
3.  Head to [`ResumeSubsection.vue`](src/components/ResumeSubsection.vue) and
    get change the `content` and `font-family` declarations at the bottom of the
    file to the following:
    ```css
    * >>> ul ul li::before {
      /* ... */
      font-family: "Font Awesome 5 Free";
      content: "\f30b";
    }
    ```
4.  Done! Make sure to commit to your fork.


[1]: https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers#installing-pro