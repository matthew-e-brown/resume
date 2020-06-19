# My Resume

I got fed up with screwing around with styles in Microsoft Word and decided to
use CSS for my resume instead. Then I decided to make it with Vue because, 1) I
wanted to use components and have a JSON-based system, basically what amounts to
a theme, and 2) because I can! 🥳


## Editing

If you like the look of my resume, everything on it can be tweaked simply by
editing [`resume-data.js`](src/resume-data.js). Feel free to fork this
repository and use this resume's theme as your own! If you don't like the
colours of the headers, they're CSS variables and can be changed in the CSS of
[`App.vue`](src/App.vue).


## Running

This is just a Vue app, so you can run it with

```console
$ npm run serve
```

and build it with

```console
$ npm run build
```

The `CoverLetter.vue` view is not available in production &mdash; only when
running locally.