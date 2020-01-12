let buttons = document.getElementById('buttons');
const buttonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

for (let color of buttonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = color;
    button.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                { code: 'document.body.style.backgroundColor="' + color + '";' }
            );
        });
    });
    buttons.appendChild(button);
}