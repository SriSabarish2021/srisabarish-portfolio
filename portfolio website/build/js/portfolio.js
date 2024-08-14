"use strict";
// styling the theme colors
let styleleColor = document.querySelector(".color-theme-icon");
let partheme = document.querySelector(".theme");
styleleColor === null || styleleColor === void 0 ? void 0 : styleleColor.addEventListener('click', changecol);
function changecol() {
    partheme === null || partheme === void 0 ? void 0 : partheme.classList.toggle("open");
}
window.addEventListener("scroll", removecolbar);
function removecolbar() {
    if (partheme === null || partheme === void 0 ? void 0 : partheme.classList.contains("open")) {
        partheme === null || partheme === void 0 ? void 0 : partheme.classList.remove("open");
    }
}
const allchangings = document.querySelectorAll(".alter-col");
function setcolor1(color) {
    allchangings.forEach((styler) => {
        if (color === styler.getAttribute("title")) {
            styler.removeAttribute("disabled");
        }
        else {
            styler.setAttribute("disabled", "true");
        }
    });
}
// change to dark mode
let darkWhite = document.querySelector(".dark-theme");
darkWhite === null || darkWhite === void 0 ? void 0 : darkWhite.addEventListener("click", () => {
    var _a, _b;
    (_a = darkWhite === null || darkWhite === void 0 ? void 0 : darkWhite.querySelector("i")) === null || _a === void 0 ? void 0 : _a.classList.toggle("fa-moon");
    (_b = darkWhite === null || darkWhite === void 0 ? void 0 : darkWhite.querySelector("i")) === null || _b === void 0 ? void 0 : _b.classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
    var _a, _b;
    if (document.body.classList.contains("dark")) {
        (_a = darkWhite === null || darkWhite === void 0 ? void 0 : darkWhite.querySelector("i")) === null || _a === void 0 ? void 0 : _a.classList.add("fa-sun");
    }
    else {
        (_b = darkWhite === null || darkWhite === void 0 ? void 0 : darkWhite.querySelector("i")) === null || _b === void 0 ? void 0 : _b.classList.add("fa-moon");
    }
});
///////////////////////////////////////////// THEME EDITING COMPLETEED //////////////////////////////////////
///////////////////////////////////////////// WORD TYPING  //////////////////////////////////////
var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Front-End Developer", "WordPress Developer", "Technology Enthusiast"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});
var typed = new Typed(".broad", {
    strings: ["Web Designer", "Web Developer", "Front-End Developer", "WordPress Developer", "Technology Enthusiast"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});
///////////////////////////////////////////// WORD TYPING COMPLETED //////////////////////////////////////
///////////////////////////////////////////// THEME EDITING COMPLETEED //////////////////////////////////////
///////////////////////////////////////////// PAGE CHANGE ANIMATION  //////////////////////////////////////
let sidenav = document.querySelector(".side-nav");
let selectKeys = document.querySelectorAll(".click-eve");
let navLen = selectKeys.length;
let allsec = document.querySelectorAll(".section");
let sectionlen = allsec.length;
selectKeys.forEach((key) => {
    key.addEventListener("click", () => {
        for (let i = 0; i < sectionlen; i++) {
            allsec[i].classList.remove('backing');
        }
        for (let j = 0; j < navLen; j++) {
            if (selectKeys[j].classList.contains("color")) {
                allsec[j].classList.add('backing');
                console.log("backing" + selectKeys[j]);
            }
            selectKeys[j].classList.remove("color");
        }
        key.classList.add('color');
        displaysection(key);
        sidenav === null || sidenav === void 0 ? void 0 : sidenav.classList.remove('move');
    });
});
function displaysection(section) {
    var _a;
    for (let i = 0; i < sectionlen; i++) {
        allsec[i].classList.remove('active');
    }
    const href = section.getAttribute('href').split('#');
    let target = href[1];
    console.log(target);
    (_a = document.querySelector('#' + target)) === null || _a === void 0 ? void 0 : _a.classList.add('active');
}
///////////////////////////////////////////// PAGE CHANGE ANIMATION  COMPLETED//////////////////////////////////////
let navenable = document.querySelector(".nav-toggleer");
navenable === null || navenable === void 0 ? void 0 : navenable.addEventListener("click", () => {
    sidenav === null || sidenav === void 0 ? void 0 : sidenav.classList.toggle('move');
    sidenav.animation = 'navemove 1s ease';
});
///////////////////////////////////////////// Nav and Page Styling Completed //////////////////////////////////////
///////////////////////////////////////////// BUTTON STYLING  //////////////////////////////////////
let aboutpage = document.querySelector(".about");
let homeBtn = document.querySelector(".home-button");
homeBtn === null || homeBtn === void 0 ? void 0 : homeBtn.addEventListener("mouseover", () => {
    homeBtn.style.boxShadow = "var(--ser-box-shadow) 0px 14px 16px, var(--ser-box-shadow) 0px 18px 24px, var(--ser-box-shadow) 0px 26px 56px";
    homeBtn.style.cursor = "pointer";
    homeBtn.style.transform = " scale(1.1)";
    homeBtn.style.transitionDuration = "0.7s";
    homeBtn.style.transitionDelay = "0.1s";
});
homeBtn === null || homeBtn === void 0 ? void 0 : homeBtn.addEventListener("mouseout", () => {
    homeBtn.style.boxShadow = "none";
    homeBtn.style.transform = " scale(1)";
});
homeBtn === null || homeBtn === void 0 ? void 0 : homeBtn.addEventListener("click", () => {
    aboutpage.classList.toggle("active");
    homeBtn.style.transform = " scale(1.1)";
});
// about pge btn
let contactpage = document.querySelector(".contact");
let hireMeBtn = document.querySelector(".hire-me");
console.log(hireMeBtn);
hireMeBtn === null || hireMeBtn === void 0 ? void 0 : hireMeBtn.addEventListener("mouseover", () => {
    hireMeBtn.style.boxShadow = "var(--ser-box-shadow) 0px 14px 16px, var(--ser-box-shadow) 0px 18px 24px, var(--ser-box-shadow) 0px 26px 56px";
    hireMeBtn.style.cursor = "pointer";
});
hireMeBtn === null || hireMeBtn === void 0 ? void 0 : hireMeBtn.addEventListener("mouseout", () => {
    hireMeBtn.style.boxShadow = "none";
});
hireMeBtn === null || hireMeBtn === void 0 ? void 0 : hireMeBtn.addEventListener("click", () => {
    contactpage.classList.toggle("active");
});
let DownleBtn = document.querySelector(".resume");
console.log(DownleBtn);
DownleBtn === null || DownleBtn === void 0 ? void 0 : DownleBtn.addEventListener("mouseover", () => {
    DownleBtn.style.boxShadow = "var(--ser-box-shadow) 0px 14px 16px, var(--ser-box-shadow) 0px 18px 24px, var(--ser-box-shadow) 0px 26px 56px";
    DownleBtn.style.cursor = "pointer";
});
DownleBtn === null || DownleBtn === void 0 ? void 0 : DownleBtn.addEventListener("mouseout", () => {
    DownleBtn.style.boxShadow = "none";
});
DownleBtn === null || DownleBtn === void 0 ? void 0 : DownleBtn.addEventListener("click", () => {
    DownleBtn.style.transform = " scale(1.1)";
});
///////////////////////////////////////////// EMAIL SENDING BY CONTACT FORM //////////////////////////////////////
function formsubmit() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "srisabarish003@gmail.com",
        Password: "C84044940BBEB2F27844D74FCE4ADCC53A57",
        To: 'srisabarish1512@gmail.com.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form",
        Body: "And this is the body"
    }).then(message => alert(message));
}
