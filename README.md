# My Resume

I got fed up with screwing around with styles in Microsoft Word and decided to
use CSS for my resume instead. Then I decided to make it with Vue because, 1) I
wanted to use components and have a JSON-based system, basically what amounts to
a theme, and 2) because I can! 🥳


## Running

If you like the look of my resume, Feel free to fork this repository and use
this resume's theme as your own! Everything on it can be tweaked simply by
editing [`resume-data.js`](src/resume-data.js). If you don't like the colours of
the headers, they're CSS variables and can be changed in the CSS of
[`App.vue`](src/App.vue).

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


### FontAwesome

This app uses a single Pro Icon from FontAwesome. If you have FontAwesome Pro,
you have nothing to worry about! Yay! That is, as long as you've previously done
the steps required to use FontAwesome with a package manager:
[FontAwesome Docs][1]

If you don't, here's how to get it working (you're going to have a slightly
different bullet point `long-arrow-alt-right` instead of `long-arrow-right`):

1.  Uninstall `@fortawesome/font-awesome-pro`, and install
    `@fortawesome/font-awesome-free`:
    ```console
    $ npm uninstall --save @fortawesome/font-awesome-pro
    $ npm install --save @fortawesome/font-awesome-free
    ```
2.  Go to [`main.js`](src/main.js) and change the imports from
    `font-awesome-pro` to `font-awesome-free`
3.  Head to [`ResumeSubsection.vue`](src/components/ResumeSubsection.vue) and
    get change the `content` and `font-family` declarations to the alternate,
    free versions (I've left them there, commented).
4.  Done! Make sure to commit to your fork.


[1]: https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers#installing-pro