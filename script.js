const navBarItems = document.getElementsByClassName("navBarItems");
const hamBurgerButton = document.getElementById("hamburgerButton");
const topRight = document.getElementById("topRight");
const gradient = document.getElementById("gradient");
const navBar = document.getElementById("navBar");
const backImage = document.getElementById("backImage");
const homeButton = document.getElementById("home");
const aboutButton = document.getElementById("about");
const faqsButton = document.getElementById("faqs");
const teamButton = document.getElementById("team");
const sponsorsButton = document.getElementById("sponsors");
const aboutButton2 = document.getElementById("about2");
const homeButton2 = document.getElementById("home2");
const faqsButton2 = document.getElementById("faqs2");
const teamButton2 = document.getElementById("team2");
const sponsorsButton2 = document.getElementById("sponsors2");
const devpostButton2 = document.getElementById("devpost2");
const hamburgerButton = document.getElementById("hamburgerButton");
const dropDown = document.getElementById("menuOptions");
const aboutPage = document.getElementById("information");
const homePage = document.getElementById("backgroundImage");
const faqPage = document.getElementById("faq");
const goose = document.getElementById("gooseBigLogo");
const aboutInformationAbove = document.getElementById("aboutInformationAbove");
const aboutInformationBelow = document.getElementById("aboutInformationBelow");
const aboutTitle = document.getElementById("aboutTitle");
var stikyNotes = document.getElementsByClassName("stikyNote");
var stikyNoteLeft = stikyNotes[0];
const topBarOfFaq = document.getElementById("topBarOfFaq");
const bottomBarOfFaq = document.getElementById("bottomBarOfFaq");
const topOfFaq = document.getElementById("topOfFaq");
const gooseBigLogo = document.getElementById("gooseBigLogo");
const register = document.getElementById("register");
var seperator = document.getElementsByClassName("seperator");
const topOfSeperator = document.getElementById("topOfSeperator");
var seperatorFaq = document.getElementsByClassName("seperatorFaq");
const topOfSeperatorFaq = document.getElementById("topOfSeperatorFaq");
const logo = document.getElementById("logo")
const gooseHacks = document.getElementById("GooseHacks");
const teamSection = document.getElementById("teamSection");
const prizeAmount = document.getElementById("prizeAmount");
const prizePool = document.getElementById("prizePool");
const speaker = document.getElementById("speaker");
const speakerTitle = document.getElementsByClassName("speakerTitle")[0];
const infoSectionSpeaker = document.getElementById("infoSectionSpeaker");
const speakerProfileImage = document.getElementsByClassName("speakerProfileImage")[0];

var dropDownOn = false;

for(var i = 0; i < 15; i++){
    topOfSeperator.insertBefore(seperator[0].cloneNode(true), topOfSeperator.firstChild);
}

for(var i = 0; i < 15; i++){
    topOfSeperatorFaq.insertBefore(seperatorFaq[0].cloneNode(true), topOfSeperatorFaq.firstChild);
}

seperator = document.getElementsByClassName("seperator");
seperatorFaq = document.getElementsByClassName("seperatorFaq");

seperator[0].style.marginLeft = '0px';
seperatorFaq[0].style.marginLeft = '0px';

hamburgerButton.addEventListener("click", function() {
    if(dropDown.style.display == "flex"){
        navBar.style.backgroundColor = 'rgba(157, 3, 252, 0)';
        dropDown.style.display = 'none';
        dropDownOn = false;
    }
    else{
        navBar.style.backgroundColor = 'rgba(157, 3, 252, 0.97)';
        dropDown.style.display = 'flex';
        dropDown.style.flexDirection = 'column';
        dropDownOn = true;
        
    }
});

aboutButton.addEventListener("click", function() {
    var scrollPosition = aboutPage.offsetTop - 125;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});

aboutButton2.addEventListener("click", function() {
    aboutPage.scrollIntoView({ behavior: 'smooth' });
    dropDown.style.display = 'none';
    navBar.style.backgroundColor = 'rgba(157, 3, 252, 0.36)';
    var scrollPosition = aboutPage.offsetTop - 125;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});

homeButton.addEventListener("click", function() {
    homePage.scrollIntoView({ behavior: 'smooth' });
});

homeButton2.addEventListener("click", function() {
    homePage.scrollIntoView({ behavior: 'smooth' });
    dropDown.style.display = 'none';
    navBar.style.backgroundColor = 'rgba(157, 3, 252, 0.36)';
});

logo.addEventListener("click", function() {
    homePage.scrollIntoView({ behavior: 'smooth' });
});

gooseHacks.addEventListener("click", function() {
    homePage.scrollIntoView({ behavior: 'smooth' });
});

faqsButton.addEventListener("click", function() {

    var scrollPosition = topBarOfFaq.offsetTop;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });

});
faqsButton2.addEventListener("click", function() {
    var scrollPosition = topBarOfFaq.offsetTop;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
    dropDown.style.display = 'none';
    navBar.style.backgroundColor = 'rgba(157, 3, 252, 0.36)';
});

devpostButton2.addEventListener("click", function() {
    dropDown.style.display = 'none';
    navBar.style.backgroundColor = 'rgba(157, 3, 252, 0.36)';
});

teamButton.addEventListener("click", function() {
    var scrollPosition = teamSection.offsetTop - 80;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});
teamButton2.addEventListener("click", function() {
    var scrollPosition = teamSection.offsetTop - 80;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });    dropDown.style.display = 'none';
    navBar.style.backgroundColor = 'rgba(157, 3, 252, 0.36)';
});

sponsorsButton.addEventListener("click", function() {
    var scrollPosition = sponsorsTitle.offsetTop - 120;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});
sponsorsButton2.addEventListener("click", function() {
    var scrollPosition = sponsorsTitle.offsetTop - 120;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });    dropDown.style.display = 'none';
    navBar.style.backgroundColor = 'rgba(157, 3, 252, 0.36)';
});


var transparency = 0;

menuOptions.style.display = 'none';

if(window.innerWidth <= 896){
    for(let i = navBarItems.length-1; i >= 0; i--){
        navBarItems[i].style.display = 'none';
    }
    hamBurgerButton.style.display = 'block';
    topRight.style.justifyContent = 'right';

}
else{
    for(let i = navBarItems.length-1; i >= 0; i--){
        navBarItems[i].style.display = 'block';
    }
    hamBurgerButton.style.display = 'none';
    topRight.style.justifyContent = 'space-evenly';
}

addEventListener("resize", (event) => {

    if(window.innerWidth <= 896){
        // set all the nav stuff not exist
        for(let i = navBarItems.length-1; i >= 0; i--){
            navBarItems[i].style.display = 'none';
        }
        hamBurgerButton.style.display = 'block';
        topRight.style.justifyContent = 'right';

    }
    else{
        for(let i = navBarItems.length-1; i >= 0; i--){
            navBarItems[i].style.display = 'block';
        }
        hamBurgerButton.style.display = 'none';
        topRight.style.justifyContent = 'space-evenly';
    }
});

let counting = false;
let prize = 0.00;

function countingEffect(){
    counting = true;
    prize = 0.00;
    let speed = 0;
    prizePool.style.opacity = 1;
    
    let intevalCounter = setInterval(function(){
        prizeAmount.innerHTML = "$" + prize.toFixed(2);
    
            if(prize < 100000.00){
                prize+=0.01;
            }
            else{
                prize = 100000.00;
                prizeAmount.innerHTML = "$" + prize.toFixed(2);
                clearInterval(intevalCounter);
            }
            if(prize < 99998){
                prize+=0.10;
            }
            if(prize < 99996){
                prize+=1;
            }
            if(prize > 100){
                if(prize < 99800){
                    prize+=10;
                }
            }
            if(prize > 1000){
                if(prize < 99000){
                    prize+=100;
                }
            }
            if(prize > 30000){
                if(prize < 60000){
                    prize+=4000;
                }
            }
    }, 1);

}

if(prizeAmount.offsetTop-550 < scrollY && !counting){
    countingEffect();
}

if(speakerTitle.offsetTop-600 < scrollY){
    speakerTitle.style.transform = "translateX(0px)";
    infoSectionSpeaker.style.transform = "translateX(0px)";
    speakerProfileImage.style.transform = "translateX(0px)";
    speaker.style.opacity = "1";
}
else{
    speakerTitle.style.transform = "translateX(100%)";
    infoSectionSpeaker.style.transform = "translateX(1000px)";
    speakerProfileImage.style.transform = "translateX(-1000px)";
    speaker.style.opacity = "0";
}

addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if(speakerTitle.offsetTop-600 < scroll){
        speakerTitle.style.transform = "translateX(0px)";
        infoSectionSpeaker.style.transform = "translateX(0px)";
        speakerProfileImage.style.transform = "translateX(0px)";
        speaker.style.opacity = "1";
    }
    else{
        speakerTitle.style.transform = "translateX(100%)";
        infoSectionSpeaker.style.transform = "translateX(1000px)";
        speakerProfileImage.style.transform = "translateX(-1000px)";
        speaker.style.opacity = "0";
    }

    if(prizeAmount.offsetTop-550 < scroll && !counting){
        countingEffect();
    }
    else if(prizeAmount.offsetTop-550 >= scroll){
        prizePool.style.opacity = 0;
        if(prize >= 39999){
            counting = false;
        }
    }
    else if(counting){
        prizePool.style.opacity = 1;
    }


    let scrollOffseted = scroll - 60;
    goose.style.opacity = scroll/6 + '%' ;
    aboutTitle.style.opacity = scrollOffseted/6 + '%' ;
    aboutInformationAbove.style.opacity = scrollOffseted/6 + '%' ;
    aboutInformationBelow.style.opacity = scrollOffseted/6 + '%' ;

    if(scroll < 550){
        backImage.style.scale = scroll/550 + 1;
    }

    if(scroll < 800 && scroll >= 0){


        gradient.style.height = (scroll*2) + 'px';
        gradient.style.bottom = "0px)";
        
    }

    if(register.getBoundingClientRect().y < 125){
        gooseBigLogo.style.transform = "translateY(0px)";
        aboutInformationAbove.style.transform = "translateX(0px)";
        aboutInformationBelow.style.transform = "translateX(0px)"
        aboutTitle.style.transform = "translateX(0px)";
    }
    else{
        gooseBigLogo.style.transform = "translateY(500px)";
        aboutInformationAbove.style.transform = "translateX(-1500px)";
        aboutInformationBelow.style.transform = "translateX(-1500px)";
        aboutTitle.style.transform = "translateX(-1500px)";
    }


});
var continueMoving = 1;
var holder = [];

window.onmousedown = e => {
    // get the class of element
    var elementClass = e.target.className ;
    // get parent in case player clicks on child
    var parentClass = e.target.parentNode.className;

    if(elementClass == "stikyNote" || parentClass == "stikyNote" || parentClass == "boxInfo"){
        continueMoving = 0;
    }
}

window.ontouchstart = e =>{
    // get the class of element
    var elementClass = e.target.className ;
    // get parent in case player clicks on child
    var parentClass = e.target.parentNode.className;

    if(elementClass == "stikyNote" || parentClass == "stikyNote" || parentClass == "boxInfo"){
        continueMoving = 0;
    }
    window.ontouchmove = e =>{
        // get the class of element
        var elementClass = e.target.className ;
        // get parent in case player clicks on child
        var parentClass = e.target.parentNode.className;

        if(elementClass == "stikyNote" || parentClass == "stikyNote" || parentClass == "boxInfo"){
            continueMoving = 0;
        }

    }
}



window.onmouseup = e => {
    // get the class of element
    var elementClass = e.target.className ;
    // get parent in case player clicks on child
    var parentClass = e.target.parentNode.className;

    if(elementClass == "stikyNote" || parentClass == "stikyNote" || parentClass == "boxInfo"){
        continueMoving = 1;
    }
}

window.ontouchend = e =>{
    // get the class of element
    var elementClass = e.target.className ;
    // get parent in case player clicks on child
    var parentClass = e.target.parentNode.className;

    if(elementClass == "stikyNote" || parentClass == "stikyNote" || parentClass == "boxInfo"){
        continueMoving = 1;
    }
}

for(var i = stikyNotes.length-1; i >=0; i--){
    holder.push(stikyNotes[i].cloneNode(true));    
    stikyNotes[i].remove();
}



stikyNoteLeft.style.marginLeft = '0px';
var marginBetween = 250;

for(var i = 0; i < holder.length; i++){
    holder[i].style.marginLeft = (marginBetween) + 'px';
}

holder[0].style.marginLeft = (-parseInt(holder[0].style.marginLeft)) +'px';

var topStickyNotes = 6;

for(var i = 0; i < topStickyNotes; i++){
    topBarOfFaq.appendChild(holder[i], topBarOfFaq.firstChild);
}

for(var i = topStickyNotes; i < holder.length; i++){
    bottomBarOfFaq.appendChild(holder[i]);
}

var hold = false;

var arrayTop = [];
var arrayBottom = [];

var arrayTopHolder = [];
var arrayBottomHolder = [];

// add elements into array top
for(var i = 0; i < topStickyNotes; i ++){
    arrayTop.push(holder[i]);
    arrayTopHolder.push(holder[i].cloneNode(true));
}
// add elements to array bottom
for(var i = topStickyNotes; i < holder.length; i++){
    arrayBottom.push(holder[i]);
    arrayBottomHolder.push(holder[i].cloneNode(true));
}

var oldWidthOfScreen = topBarOfFaq.offsetWidth;
var pause = 0;


function changeContent() {
    if(continueMoving > 0){

    if(oldWidthOfScreen != topBarOfFaq.offsetWidth){
        oldWidthOfScreen = topBarOfFaq.offsetWidth;
        for(var i = 0; i < arrayTop.length; i++){
            arrayTop[i].remove();
        }
        for(var i = 0; i < arrayBottom.length; i++){
            arrayBottom[i].remove();
        }
        arrayTop = [];
        arrayBottom = [];
        for(var i = 0; i < arrayTopHolder.length; i++){
            var stikyNote = arrayTopHolder[i].cloneNode(true);
            arrayTop.push(stikyNote);
            topBarOfFaq.append(stikyNote);
        }
        for(var i = 0; i < arrayBottomHolder.length; i++){
            var stikyNote = arrayBottomHolder[i].cloneNode(true);
            arrayBottom.push(stikyNote);
            bottomBarOfFaq.append(stikyNote);
        }
    }


    if(arrayTop.length > 0){
        // move the elements
        arrayTop[0].style.marginLeft = (parseInt(arrayTop[0].style.marginLeft)+1) +'px';

        
        var furtestLocation = parseInt(arrayTop[0].style.marginLeft) + (arrayTop.length*parseInt(arrayTop[0].offsetWidth) + (arrayTop.length-1)*marginBetween) - arrayTop[0].offsetWidth;
        // if the closest sticky note exceeds boundary
        if(arrayTop[arrayTop.length-1].getBoundingClientRect().x > topBarOfFaq.offsetWidth){
            // add element to bottom bar of Faq
            if(arrayTop.length == 1){
                arrayTop[arrayTop.length-1].style.marginLeft = marginBetween + 'px';
            }
            var stikyNote = arrayTop[arrayTop.length-1].cloneNode(true);
            bottomBarOfFaq.appendChild(stikyNote);
            //add element to bottom
            arrayBottom.push(stikyNote);

            if(arrayBottom.length == 1){
                arrayBottom[0].style.marginLeft = bottomBarOfFaq.offsetWidth + 'px';
            }
            
            arrayTop[arrayTop.length-1].remove();
            arrayTop.splice(arrayTop.length-1, 1);

        }
    }

    if(arrayBottom.length > 0){
        arrayBottom[0].style.marginLeft = (parseInt(arrayBottom[0].style.marginLeft)-1) +'px';
    
        if(arrayBottom[0].getBoundingClientRect().x + arrayBottom[0].offsetWidth < 0){
            var stikyNote = arrayBottom[0].cloneNode(true);
            arrayTop.splice(0, 0, stikyNote);
            topBarOfFaq.insertBefore(stikyNote, topBarOfFaq.firstChild);
            arrayBottom[0].remove();
            arrayBottom.splice(0, 1);
            arrayTop[0].style.marginLeft = (parseInt(arrayTop[0].style.marginLeft)+1) + 'px';
            arrayBottom[0].style.marginLeft = (parseInt(arrayBottom[0].style.marginLeft)-1) + 'px';
        }
    }
    
    }

    if(seperator[0].getBoundingClientRect().x > -2500+seperator[0].offsetWidth){
        seperator[0].style.marginLeft = '0px'
        var sep = seperator[seperator.length-1].cloneNode(true);
        
        topOfSeperator.insertBefore(sep, topOfSeperator.firstChild);
        seperator = document.getElementsByClassName("seperator");
        seperator[0].style.marginLeft =  '0px';

    }

    if(seperator[seperator.length-1].getBoundingClientRect().x > seperator[seperator.length-1].offsetWidth + topBarOfFaq.offsetWidth*5){
        seperator[seperator.length-1].remove();
        seperator = document.getElementsByClassName("seperator");
    }
    seperator[0].style.marginLeft = (parseInt(seperator[0].style.marginLeft)+1) + 'px';

    if(seperatorFaq[0].getBoundingClientRect().x > -2500+seperatorFaq[0].offsetWidth){
        seperatorFaq[0].style.marginLeft = '0px'
        var sep = seperatorFaq[seperatorFaq.length-1].cloneNode(true);
        
        topOfSeperatorFaq.insertBefore(sep, topOfSeperatorFaq.firstChild);
        seperatorFaq = document.getElementsByClassName("seperatorFaq");
        seperatorFaq[0].style.marginLeft =  '0px';

    }

    if(seperatorFaq[seperatorFaq.length-1].getBoundingClientRect().x > seperatorFaq[seperatorFaq.length-1].offsetWidth + topBarOfFaq.offsetWidth*5){
        seperatorFaq[seperatorFaq.length-1].remove();
        seperatorFaq = document.getElementsByClassName("seperatorFaq");
    }
    seperatorFaq[0].style.marginLeft = (parseInt(seperatorFaq[0].style.marginLeft)+1) + 'px';

    if(dropDown.style.display != "flex"){
        if(parseInt(window.scrollY/50) <= 0.97){
            transparency = window.scrollY/50;
            navBar.style.backgroundColor = 'rgba(157, 3, 252, ' + transparency + ')';
        }
        else{
            transparency = 0.97;
            navBar.style.backgroundColor = 'rgba(157, 3, 252, 0.97)';
        }
    }
    
}

setInterval(changeContent, 5);

gooseBigLogo.addEventListener('mousedown', function(){
    gooseBigLogo.style.transform = 'scale(110%)';
});

gooseBigLogo.addEventListener('mouseup', function(){
    gooseBigLogo.style.transform = 'scale(100%)';
});

let countDown = document.getElementById("countDownDate");
var countDownDate = new Date("Aug 24, 2023 21:00:00 EST").getTime();

function countDownUpdate(interval){
    let now = new Date().getTime();

    let distance = countDownDate - now;
  
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    countDown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
    if (distance < 0) {
      clearInterval(interval);
      countDown.innerHTML = "Hackathon Has Ended";
    }
  
}

countDownUpdate();

let interval = setInterval(function() {
    countDownUpdate(interval);
}, 1000);