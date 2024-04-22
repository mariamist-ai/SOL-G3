let menubar = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar'); // Corregido

menubar.onclick = () => {
    menubar.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
    menubar.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

window.onload = () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

document.querySelector('#login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
};

document.querySelector('#close-login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
};

document.querySelector('.home').onmousemove = (e) => {
    document.querySelectorAll('.home-parallax').forEach(element => {
        let speed = element.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;
        element.style.transform = `translateX(${y}px) translateY(${x}px)`; // Corregido
    });
};

document.querySelector('.home').onmouseleave = () => {
    document.querySelectorAll('.home-parallax').forEach(element => {
        element.style.transform = 'translateX(0px) translateY(0px)';
    });
};

let wrapper = document.querySelector('.wrapper-box');
let activeBox = wrapper.querySelectorAll('.box');
let activeLabel = document.querySelector('.activeCircle').querySelectorAll('.fa-circle');
let nextBtn = document.querySelector('#nextBtn');
let preBtn = document.querySelector('#preBtn');

let indexNo = 0;
nextBtn.onclick = () => {
    indexNo++;
    changeBox();
};

preBtn.onclick = () => {
    indexNo--;
    changeBox();
};

let changeBox = () => {
    if (indexNo > activeBox.length - 1) {
        indexNo = 0;
    } else if (indexNo < 0) {
        indexNo = activeBox.length - 1;
    }

    for (let i = 0; i < activeBox.length; i++) {
        if (i === indexNo) {
            activeBox[i].classList.add('active');
            activeLabel[i].classList.add('fa-solid');
            wrapper.style.transform = `translateX(${-indexNo * 250}px)`; // Corregido
        } else {
            activeBox[i].classList.remove('active');
            activeLabel[i].classList.remove('fa-solid');
        }
    }
};
