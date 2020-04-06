# My Resume

I got fed up with screwing around with styles in Microsoft Word and decided to
use CSS for my resume instead.

This code can be found in action [here](https://matthew-brown.net/stuff/resume).

## References

The References section of my resume is hidden behind a reCAPTCHA to protect my
references from spam. Just so that this repository holds the whole story, here
is the format of `pwd/resume-references.json`, which is read in by PHP upon
successful reCAPTCHA validation:

```json
[
  {
    "name": "John Smith",
    "title": "Professor",
    "workplace": "University of Education",
    "contact": {
      "phone": [
        {
          "number": "+11234567890,1234",
          "isCell": false
        },
        {
          "number": "+10987654321",
          "icCell": true
        }
      ],
      "email": "johnsmith@edu.ca"
    }
  },
  {
    "name": "John Appleseed",
    "title": "Vice President of Technology",
    "workplace": "ABC Company, LTD.",
    "contact": {
      "phone": [
        {
          "number": "+16139671111",
          "isCell": false
        }
      ],
      "email": [
        "jappleseed@abc.com",
        "johnappleseed@business.abc.com"
      ]
    }
  },
]
```

This will be converted to the following HTML on the page:

```html
<h2>References</h2>
<div class="section no-headers">
  <h4>John Smith, Professor &mdash; University of Education</h4>
  <ul>
    <li><a href="tel:+11234567890,1234">+1 (123) 456-7890 x 1234</a></li>
    <li><a href="tel:+10987654321">+1 (098) 765-4321</a> (cell)</li>
    <li><a href="mailto:johnsmith@edu.ca">johnsmith@edu.ca</a></li>
  </ul>
  <h4>John Appleseed, Vice President of Technology &mdash; ABC Company, LTD.</h4>
  <ul>
    <li><a href="tel:+16139671111">+1 (613) 967-1111</a></li>
    <li><a href="mailto:jappleseed@abc.com">jappleseed@abc.com</a></li>
    <li><a href="mailto:johnappleseed@business.abc.com">johnappleseed@business.abc.com</a></li>
  </ul>
</div>
```
