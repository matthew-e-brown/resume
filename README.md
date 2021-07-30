# My Resume

After too many hours of getting fed up with messing around with styles in
Microsoft Word, I realized that I would have far more control over the look of
my resume if I crafted it using CSS, which I'm much more familiar with. So... I
built my resume with CSS, and later switched to SCSS, which I've fallen in love
with.

This webpage is built to be my primary resume: when I need to hand it in to a
job, I will go to this page and print it. There are styles in place to shape the
margins correctly and everything. It is battle-tested in Chrome, and should work
fine in Firefox. I can make no promises about mobile browsers or MacOS Safari.

Originally, this resume was built using Vue, so I could have access to its
wonderful single-file-components and scoped CSS. However, that meant that my
final bundle included all of Vue's reactivity engine: something I did not need
at all for a static resume. So, I reworked it to simply use a custom compile
script and Handlebars for templating. The final resume is now a tiny minified
HTML document alongside a single CSS file.


## Usage as a Template

Using this as a template is really simple. Simply edit the
[`resume.yml`](src/data/resume.yml) file to contain your own resume and you're
all set. There is also a view for writing a cover-letter using the same name +
contact-grid header as the resume. It will compile from the
[`cover-letter.md`](src/data/cover-letter.md) file in `src/data`.

There are a few things you should know if you are going to use this as a
template, however.


### FontAwesome

This resume uses FontAwesome's Kit system which is limited to work only on my
domain: it's a Pro subscription, so you can see why. To use this resume, you'll
have to get your own Kit. Head to [fontawesome.com](fontawesome.com) to do so.
You'll just want to replace the Kit URL in
[`head-metadata.hbs`](src/partials/head-metadata.hbs). Don't worry, they have a
free tier.

If you do go with a a free kit, you'll need to change one of the icons: the icon
used for arrows in nested lists:

```scss
&::before, >svg {
  content: "\f178";                    // <--- Here
  font-family: 'Font Awesome 5 Pro';   // <--- Here
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}
```

This code is near the bottom of
[`/src/styles/_common.scss`](/src/styles/_common.scss).


### Cover Letter

When you're writing your cover letter, all Markdown should work. The only
special thing to take note of is the fact that Markdown has no way to
differentiate between an indented paragraph and one without an indent, something
important when you need control over your paragraphs.

If you need a non-indented paragraph, prefix it with `//!` (which is just some
random syntax I made up). This lets you do things like address the recipient:

```md
//! Dear mother,

I write to you today with terrible news. The Care Bears have broken through the
eastern front. I fear this may be my last letter to you.
```

results in:

```html
<p class="no-indent">Dear mother,</p>
<p>...</p>
```


### `compile.ts`

This script is as barebones as it needs to be. It doesn't host any of the files,
so you'll need to do that yourself. Personally, I open a second terminal and run
a little Bash macro inside the folder:

```bash
py-server () {
	PORT=8000
	if ! [[ -z $1 ]]; then
		PORT=$1
	fi

	python -m http.server $PORT --bind 0.0.0.0
}
```

Your mileage may vary, however. Also, while I tried to catch and cover all the
errors I could, you may run into some it can't. That's okay for me, though: I
just need it to compile some Handlebars.

If you want to make any updates/upgrades to it, I would gladly review a PR. 😁