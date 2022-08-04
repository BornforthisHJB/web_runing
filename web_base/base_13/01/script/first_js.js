// window.onload = function () {
//     let myHeading = document.querySelector('h1');
//     myHeading.textContent = 'Hello, my friends!';
// };

window.onload = function () {

    let myImage = document.querySelector('img');

    myImage.onclick = function () {
        let mySrc = myImage.getAttribute('src');
        if (mySrc === 'img/dog.jpg') {
            myImage.setAttribute('src', 'img/pic3.JPG');
        } else {
            myImage.setAttribute('src', 'img/dog.jpg');
        }
    }
};