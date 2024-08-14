// styling the theme colors
let styleleColor=document.querySelector(".color-theme-icon") as HTMLElement
let partheme=document.querySelector(".theme")as HTMLElement
styleleColor?.addEventListener('click',changecol)
function changecol():void{
    partheme?.classList.toggle("open")
}
window.addEventListener("scroll",removecolbar)
function removecolbar():void{
    if(partheme?.classList.contains("open")){
        partheme?.classList.remove("open")
    }  
}
const allchangings=document.querySelectorAll(".alter-col")as HTMLElement
function setcolor1(color:any){
    allchangings.forEach((styler:any) => {
        if(color === styler.getAttribute("title"))
        {
            styler.removeAttribute("disabled");
        }
        else{
            styler.setAttribute("disabled","true");
        }
    })
}
// change to dark mode
let darkWhite=document.querySelector(".dark-theme")as HTMLElement
darkWhite?.addEventListener("click",()=>{
    darkWhite?.querySelector("i")?.classList.toggle("fa-moon")
    darkWhite?.querySelector("i")?.classList.toggle("fa-sun")
    document.body.classList.toggle("dark")
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        darkWhite?.querySelector("i")?.classList.add("fa-sun")
    }
    else{
        darkWhite?.querySelector("i")?.classList.add("fa-moon")
    }
})
///////////////////////////////////////////// THEME EDITING COMPLETEED //////////////////////////////////////
///////////////////////////////////////////// WORD TYPING  //////////////////////////////////////
var typed= new Typed(".typing",{
    strings:["Web Designer","Web Developer","Front-End Developer","WordPress Developer","Technology Enthusiast"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
var typed= new Typed(".broad",{
    strings:["Web Designer","Web Developer","Front-End Developer","WordPress Developer","Technology Enthusiast"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
///////////////////////////////////////////// WORD TYPING COMPLETED //////////////////////////////////////
///////////////////////////////////////////// THEME EDITING COMPLETEED //////////////////////////////////////
///////////////////////////////////////////// PAGE CHANGE ANIMATION  //////////////////////////////////////
let sidenav=document.querySelector(".side-nav") as HTMLElement
let selectKeys=document.querySelectorAll(".click-eve")
let navLen=selectKeys.length
let allsec=document.querySelectorAll(".section")
let sectionlen=allsec.length
selectKeys.forEach((key)=>{ 
    key.addEventListener("click",()=>{
        for(let i=0; i<sectionlen; i++){
            allsec[i].classList.remove('backing')
        }
        for(let j=0; j<navLen; j++){
            if(selectKeys[j].classList.contains("color")){
                allsec[j].classList.add('backing')
                console.log("backing"  + selectKeys[j]);               
            }
            selectKeys[j].classList.remove("color")
        }
        key.classList.add('color')
        displaysection(key)
        sidenav?.classList.remove('move')
    })  
})
function displaysection(section:any){
    for(let i=0; i<sectionlen; i++){
        allsec[i].classList.remove('active')
    }
   const href= section.getAttribute('href').split('#');
   let target=href[1]
   console.log(target);
   document.querySelector('#'+target)?.classList.add('active')  
}
///////////////////////////////////////////// PAGE CHANGE ANIMATION  COMPLETED//////////////////////////////////////

let navenable=document.querySelector(".nav-toggleer") as HTMLElement

navenable?.addEventListener("click",()=>{
    sidenav?.classList.toggle('move')
    sidenav.animation='navemove 1s ease'
})
///////////////////////////////////////////// Nav and Page Styling Completed //////////////////////////////////////
///////////////////////////////////////////// BUTTON STYLING  //////////////////////////////////////
let aboutpage=document.querySelector(".about")as HTMLElement
let homeBtn=document.querySelector(".home-button")as HTMLElement
homeBtn?.addEventListener("mouseover",()=>{
    homeBtn.style.boxShadow ="var(--ser-box-shadow) 0px 14px 16px, var(--ser-box-shadow) 0px 18px 24px, var(--ser-box-shadow) 0px 26px 56px";
    homeBtn.style.cursor="pointer";
    homeBtn.style.transform=" scale(1.1)" ; 
    homeBtn.style.transitionDuration="0.7s";
    homeBtn.style.transitionDelay="0.1s";
})
homeBtn?.addEventListener("mouseout",()=>{
    homeBtn.style.boxShadow ="none";
    homeBtn.style.transform=" scale(1)" ; 
})
homeBtn?.addEventListener("click",()=>{
    aboutpage.classList.toggle("active")
    homeBtn.style.transform=" scale(1.1)" ; 
})

// about pge btn
let contactpage=document.querySelector(".contact")as HTMLElement
let hireMeBtn=document.querySelector(".hire-me")as HTMLElement
console.log(hireMeBtn);
hireMeBtn?.addEventListener("mouseover",()=>{
    hireMeBtn.style.boxShadow ="var(--ser-box-shadow) 0px 14px 16px, var(--ser-box-shadow) 0px 18px 24px, var(--ser-box-shadow) 0px 26px 56px";
    
    hireMeBtn.style.cursor="pointer";
})
hireMeBtn?.addEventListener("mouseout",()=>{
    hireMeBtn.style.boxShadow ="none";
})
hireMeBtn?.addEventListener("click",()=>{
    contactpage.classList.toggle("active")
})

let DownleBtn=document.querySelector(".resume")as HTMLElement
console.log(DownleBtn);
DownleBtn?.addEventListener("mouseover",()=>{
    DownleBtn.style.boxShadow ="var(--ser-box-shadow) 0px 14px 16px, var(--ser-box-shadow) 0px 18px 24px, var(--ser-box-shadow) 0px 26px 56px";
    DownleBtn.style.cursor="pointer";
})
DownleBtn?.addEventListener("mouseout",()=>{
    DownleBtn.style.boxShadow ="none";
})
DownleBtn?.addEventListener("click",()=>{
    DownleBtn.style.transform=" scale(1.1)" ; 
})
///////////////////////////////////////////// EMAIL SENDING BY CONTACT FORM //////////////////////////////////////
function formsubmit(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "srisabarish003@gmail.com",
        Password : "C84044940BBEB2F27844D74FCE4ADCC53A57",
        To : 'srisabarish1512@gmail.com.com',
        From :document.getElementById("email").value,
        Subject : "New Contact Form",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );  
}
