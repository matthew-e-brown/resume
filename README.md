# My Resume

After too many hours of getting fed up with messing around with styles in
Microsoft Word, I realized that I would have far more control over the look of
my resume if I crafted it using CSS, which I'm much more familiar with. So... I
built my resume with CSS!

This webpage is built to be my primary resume: when I need to hand it in to a
job, I will go to this page and print it. There are styles in place to shape the
margins correctly and everything. I also use it to write my cover letters, so I
get consistent styling.

Originally, my resume was built using Vue, so I could have access to its
wonderful single-file-components and scoped CSS. However, that meant that my
final bundle included all of Vue's reactivity engine: something I did not need
at all for a static resume. Second, I reworked it to use a custom compile script
that used Handlebars. The only downside to this approach was that it inflated my
language statistics for the repository with a massive chunk of TypeScript.

Now, my resume is compiled using a package I wrote called [Micro SSG][micro],
which is the spiritual successor to that script I wrote for this resume.


[micro]: https://github.com/matthew-e-brown/micro-ssg


## Printing&nbsp;/&nbsp;Exporting

Some notes on printing properly (these are mostly notes to myself, if we're
being honest):

- Use Google Chrome on Windows 10 for best results. I don't doubt that it'll
  work on other browsers, but it's what I test on and optimize for.
- Make sure to use Google Chrome's "Save as PDF" option in the print dialogue,
  not "Microsoft Print to PDF".
- Make sure that the "Background graphics" is enabled, otherwise the font-color
  on the `h3`s won't come through properly.
- Everything else, like margins, can be left as "Default," since the `@print`
  CSS will handle that.
