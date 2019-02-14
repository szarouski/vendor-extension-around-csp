window.parent.MutationObserver = 'was replaced :PPPP';
console.log('window.MutationObserver', window.MutationObserver);
let baseUrl = chrome.extension.getURL('/');
let iframe = document.createElement('iframe');
//let url = encodeURIComponent(document.querySelector('[data-a8n="item-page__main-title"]').textContent);
let url = encodeURIComponent(document.querySelector('title').textContent);
document.body.appendChild(iframe);
iframe.src = `${baseUrl}shared/iframe.html?url=${url}`;