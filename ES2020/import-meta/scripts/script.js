const environment = new URL(document.currentScript.src).searchParams.get('env');

document.getElementById('scripts-script').innerText = `new URL(document.currentScript.src).searchParams.get('env'); = "${environment}" via script.js`;
