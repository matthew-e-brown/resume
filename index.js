document.querySelector('#notice button').addEventListener('click', event => {
  event.target.parentElement.style.display = 'none';
});

window.captcha = async value => {
  const data = await fetch("captcha.php", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'captcha': value })
  }).then(res => res.json());

  const parent = document.createElement('div');
  parent.classList.add('section', 'no-headers');

  if (data === false) {
    parent.classList.add('unfilled');
    parent.innerHTML = "reCAPTCHA error 😢";
  } else {    
    for (const reference of data) {
      const header = document.createElement('h4');
      header.innerHTML = `${reference.name}: ${reference.title} &mdash; ${reference.workplace}`;

      const list = document.createElement('ul');
      for (const [type, contact] of Object.entries(reference.contact)) {
        console.assert(type === 'email' || type === 'phone', "Invalid contact type.");

        // +01234567890       => +0 (123) 456-7890
        // +01234567890,1234  => +0 (123) 456-7890 x 1234
        const formatNumber = string => string.replace(
          /\+(\d)(\d{3})(\d{3})(\d{4})(?:,(\d{4}))?/, 
          (_, c1, c2, c3, c4, c5) => `+${c1} (${c2}) ${c3}-${c4}${c5 ? ` x ${c5}` : ''}`
        );

        const generateItem = (itemType, info) => {
          const item = document.createElement('li');
          const link = document.createElement('a');
          item.append(link);
          list.append(item);

          link.setAttribute('href', (itemType === 'email') ? `mailto:${info}` : `tel:${info.number}`);
          if (itemType === 'email') {
            link.innerText = info;
          } else {
            link.innerText = formatNumber(info.number);
            if (info.isCell) item.innerHTML += " (cell)";
          }
        }

        if (Array.isArray(contact))
          for (const c of contact)
            generateItem(type, c);
        else 
          generateItem(type, contact);
      }

      parent.append(header);
      parent.append(list);
    }
  
    // >> Un-unfilled the header
    document.querySelector('h2.unfilled').removeAttribute('class');
  }
  
  // >> Remove reCAPTCHA and its extra window
  document.querySelectorAll('#captcha-noscript, #captcha-form').forEach(e => document.body.removeChild(e));
  document.body.removeChild(document.body.lastChild);

  // >> Add the new seciton, be it the error or the real stuff
  document.body.appendChild(parent);
}