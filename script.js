const navBarItems = document.getElementsByClassName("navBarItems");
const hamBurgerButton = document.getElementById("hamburgerButton");
const topRight = document.getElementById("topRight");
const gradient = document.getElementById("gradient");
const navBar = document.getElementById("navBar");
const backImage = document.getElementById("backImage");

const homeButton = document.getElementById("home");
const aboutButton = document.getElementById("about");
const faqsButton = document.getElementById("faqs");
// const sponsorsButton = document.getElementById("sponsors");
const teamButton = document.getElementById("team");

const aboutButton2 = document.getElementById("about2");
const homeButton2 = document.getElementById("home2");
const faqsButton2 = document.getElementById("faqs2");
// const sponsors2Button = document.getElementById("sponsors2");
const teamButton2 = document.getElementById("team2");


var dropDownOn = false;


const hamburgerButton = document.getElementById("hamburgerButton");
const dropDown = document.getElementById("menuOptions");


const aboutPage = document.getElementById("information");
const homePage = document.getElementById("backgroundImage");
const faqPage = document.getElementById("faq");
// const sponsorsPage = document.getElementById("Sponsors");

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

// const 




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




// navBar.style.backgroundColor = 'rgba(157, 3, 252, 0)';

aboutButton.addEventListener("click", function() {
    // aboutPage.scrollIntoView({behavior: 'smooth' });
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

// sponsorsButton.addEventListener("click", function() {
//     sponsorsPage.scrollIntoView({ behavior: 'smooth' });
// });
// sponsors2Button.addEventListener("click", function() {
//     sponsorsPage.scrollIntoView({ behavior: 'smooth' });
//     dropDown.style.display = 'none';
//     navBar.style.backgroundColor = 'rgba(157, 3, 252, 0.36)';
// });

teamButton.addEventListener("click", function() {
    var scrollPosition = teamSection.offsetTop - 150;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
    // teamSection.scrollIntoView({ behavior: 'smooth' });
});
teamButton2.addEventListener("click", function() {
    var scrollPosition = teamSection.offsetTop - 100;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });    dropDown.style.display = 'none';
    navBar.style.backgroundColor = 'rgba(157, 3, 252, 0.36)';
});


var transparency = 0;

menuOptions.style.display = 'none';


// hamburger stuff
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

// var scrollPosition = sessionStorage.getItem('scrollPosition');

// change transparency of nav bar based on y scroll
if(parseInt(window.scroll/50) <= 0.97){
    transparency = window.scroll/50;
    navBar.style.backgroundColor = 'rgba(157, 3, 252, ' + transparency + ')';
}
else{
    transparency = 0.36;
    navBar.style.backgroundColor = 'rgba(157, 3, 252, 0.36)';
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

addEventListener("scroll", (event) => {

    let scroll = this.scrollY;

    // navBar.style.top = scroll + 'px';
    let scrollOffseted = scroll - 60;
    //0-1
    goose.style.opacity = scroll/6 + '%' ;
    aboutTitle.style.opacity = scrollOffseted/6 + '%' ;
    aboutInformationAbove.style.opacity = scrollOffseted/6 + '%' ;
    aboutInformationBelow.style.opacity = scrollOffseted/6 + '%' ;

    if(scroll < 550){
        backImage.style.scale = scroll/550 + 1;
    }



    if(!dropDownOn){
        if(scroll/ 50 <= 0.97){
        transparency = scroll/50;    
        navBar.style.backgroundColor = 'rgba(157, 3, 252, ' + transparency + ')';
        }
    }

    if(scroll < 800 && scroll >= 0){

        gradient.style.height = (scroll*2) + 'px';
        console.log(gradient.style.height);
        
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

for(var i = stikyNotes.length-1; i >=0; i--){
    holder.push(stikyNotes[i].cloneNode(true));
    // add a listener that checks if clicked for every sticky note
    window.onmousedown = e => {
        // get the class of element
        var elementClass = e.target.className ;
        // get parent in case player clicks on child
        var parentClass = e.target.parentNode.className;

        if(elementClass == "stikyNote" || parentClass == "stikyNote" || parentClass == "boxInfo"){
            continueMoving = 0;
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
    // if(Math.abs((sadRat.style.marginRight)) > parseInt(topBarOfFaq.offsetWidth)){
    //     sadRat = document.getElementsByClassName("sadRat")[0];
    // }

    // if elements exists

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
       // console.log(arrayTop.length);

        // move the elements
        arrayTop[0].style.marginLeft = (parseInt(arrayTop[0].style.marginLeft)+1) +'px';

        
        // sadRat.style.marginRight ='10px';

        var furtestLocation = parseInt(arrayTop[0].style.marginLeft) + (arrayTop.length*parseInt(arrayTop[0].offsetWidth) + (arrayTop.length-1)*marginBetween) - arrayTop[0].offsetWidth;
        // if the closest sticky note exceeds boundary
        if(arrayTop[arrayTop.length-1].getBoundingClientRect().x > topBarOfFaq.offsetWidth){
            //console.log(arrayTop[arrayTop.length-1].getBoundingClientRect().y);
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

            
            
            // get rid of element from array and from scene
            
            arrayTop[arrayTop.length-1].remove();
            arrayTop.splice(arrayTop.length-1, 1);


            // stikyNotes[stikyNotes.length-2].remove();
            // stikyNotes = document.getElementsByClassName("stikyNote");
            // stikyNoteLeft = stikyNotes[0];
            // stikyNoteLeft.style.marginLeft = (-stikyNoteLeft.offsetWidth) + 'px';
            // console.log(stikyNotes.length);
            //console.log(stikyNotes[stikyNotes.length-1].getBoundingClientRect().y);
        }
    }

    if(arrayBottom.length > 0){
        arrayBottom[0].style.marginLeft = (parseInt(arrayBottom[0].style.marginLeft)-1) +'px';
    

        // console.log(arrayBottom[0].getBoundingClientRect().x);

        if(arrayBottom[0].getBoundingClientRect().x + arrayBottom[0].offsetWidth < 0){
            var stikyNote = arrayBottom[0].cloneNode(true);
            // stikyNote.style.marginLeft = '0px';
            // stikyNote.style.marginRight = (-stikyNote.offsetWidth) + 'px';
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

        // console.log(seperator);
    }

    if(seperator[seperator.length-1].getBoundingClientRect().x > seperator[seperator.length-1].offsetWidth + topBarOfFaq.offsetWidth*5){
        seperator[seperator.length-1].remove();
        seperator = document.getElementsByClassName("seperator");
    }
    seperator[0].style.marginLeft = (parseInt(seperator[0].style.marginLeft)+1) + 'px';
/////

    if(seperatorFaq[0].getBoundingClientRect().x > -2500+seperatorFaq[0].offsetWidth){
        seperatorFaq[0].style.marginLeft = '0px'
        var sep = seperatorFaq[seperatorFaq.length-1].cloneNode(true);
        
        topOfSeperatorFaq.insertBefore(sep, topOfSeperatorFaq.firstChild);
        seperatorFaq = document.getElementsByClassName("seperatorFaq");
        seperatorFaq[0].style.marginLeft =  '0px';

        // console.log(seperator);
    }

    if(seperatorFaq[seperatorFaq.length-1].getBoundingClientRect().x > seperatorFaq[seperatorFaq.length-1].offsetWidth + topBarOfFaq.offsetWidth*5){
        seperatorFaq[seperatorFaq.length-1].remove();
        seperatorFaq = document.getElementsByClassName("seperatorFaq");
    }
    seperatorFaq[0].style.marginLeft = (parseInt(seperatorFaq[0].style.marginLeft)+1) + 'px';
}

setInterval(changeContent, 5);

gooseBigLogo.addEventListener('mousedown', function(){
    gooseBigLogo.style.transform = 'scale(110%)';
});

gooseBigLogo.addEventListener('mouseup', function(){
    gooseBigLogo.style.transform = 'scale(100%)';
});