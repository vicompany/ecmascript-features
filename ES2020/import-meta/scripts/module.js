const environment = new URL(import.meta.url).searchParams.get('env');

document.getElementById('scripts-module').innerText = `new URL(import.meta.url).searchParams.get('env') = "${environment}" via module.js`;
