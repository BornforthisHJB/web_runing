// window.onload = function () {
//     let myHeading = document.querySelector('h1');
//     myHeading.textContent = 'Hello, my friends!';
// };

// window.onload = function () {
//
//     let myImage = document.querySelector('img');
//
//     myImage.onclick = function () {
//         let mySrc = myImage.getAttribute('src');
//         if (mySrc === 'img/dog.jpg') {
//             myImage.setAttribute('src', 'img/pic3.JPG');
//         } else {
//             myImage.setAttribute('src', 'img/dog.jpg');
//         }
//     }
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

    function setHeading(Lisa) {
        let myHeading = document.querySelector('h1');
        myHeading.textContent = 'Hello!' + Lisa + '!';
    }

    function setUserName() {
        let myName = prompt('请输入你的名字');
        localStorage.setItem('name', myName);
        setHeading(myName);
    }

    let storedName = localStorage.getItem('name');
    if (!storedName) {
        setUserName();
    } else {
        setHeading(storedName);
    }
    let myButton = document.querySelector('button');
    myButton.onclick = setUserName;
};
