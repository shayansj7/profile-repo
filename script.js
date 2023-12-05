// Header
var myName = document.querySelector('.myName');

myName.onclick = function () {
    window.location.href = "http://127.0.0.1:5500/index.html";
};

window.onload = function () {
    var btnList = document.querySelectorAll('.pageBtn');

    btnList.forEach(function (button) {
        if (button.href === window.location.href) {
            console.log(button.href);
            button.style.fontWeight = 'bold';
        }
    });
};

// Typing effect
var tLines = document.querySelectorAll('.detail');

function typeLine(index) {
    tLines[index].classList.remove('detail');
    tLines[index].classList.add('detail-typing');
    setTimeout(function () {
        if (index + 1 < tLines.length) {
            tLines[index].classList.remove('detail-typing');
            tLines[index].classList.add('detail-typed');
            index++;
            typeLine(index);
        }
    }, 4250);
}

typeLine(0);

