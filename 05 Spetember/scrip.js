/*=========================================================
        PREMIUM BIRTHDAY WEBSITE
               SCRIPT.JS
                PART 1
=========================================================*/

/*==========================================
LOADER
==========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    },2500);

});

/*==========================================
TYPEWRITER EFFECT
==========================================*/

const message =

"Happy Birthday Uogeshri ❤️\n\nYou are truly one of the most wonderful people I have ever met. I hope every dream you have comes true and this year brings endless happiness, success, laughter and unforgettable memories.";

const typewriter = document.getElementById("typewriter");

let index = 0;

function typing(){

    if(index < message.length){

        typewriter.innerHTML += message.charAt(index);

        index++;

        setTimeout(typing,40);

    }

}

typing();

/*==========================================
COUNTDOWN
==========================================*/

const birthday = new Date("September 5, 2026 00:00:00").getTime();

function updateCountdown(){

const now = new Date().getTime();

const distance = birthday - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor(

(distance%(1000*60*60*24))

/

(1000*60*60)

);

const minutes = Math.floor(

(distance%(1000*60*60))

/

(1000*60)

);

const seconds = Math.floor(

(distance%(1000*60))

/

1000

);

document.getElementById("days").innerHTML = days;

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

document.getElementById("seconds").innerHTML = seconds;

if (distance < 0) {

clearInterval(countdownInterval);

/* Hide Countdown */

document.getElementById("countdown").innerHTML = `

<div class="birthday-mode">

<h1 class="birthday-title">

🎉 Happy Birthday Uogeshri ❤️

</h1>

<h2>

Today is all about YOU!

</h2>

<p>

May every dream come true,

every smile become a memory,

and every moment bring happiness.

Happy Birthday to the Best Friend Ever!

</p>

<button id="celebrateButton">

🎁 Open Your Birthday Surprise

</button>

</div>

`;

launchCelebration();

}

}

const countdownInterval = setInterval(updateCountdown,1000);

updateCountdown();

/*==========================================
MUSIC PLAYER
==========================================*/

const music = document.getElementById("birthdayMusic");

const musicButton = document.getElementById("musicButton");

let playing = false;

musicButton.addEventListener("click",()=>{

if(!playing){

music.play();

playing = true;

musicButton.classList.add("playing");

musicButton.innerHTML="⏸";

}else{

music.pause();

playing = false;

musicButton.classList.remove("playing");

musicButton.innerHTML="🎵";

}

});

/*==========================================
GIFT BUTTON
==========================================*/

/*==========================================
3-CLICK GIFT
==========================================*/

const gift = document.getElementById("giftBox");

const hint = document.getElementById("giftHint");

const giftMessage = document.getElementById("giftMessage");

let clicks = 0;

gift.addEventListener("click",()=>{

clicks++;

if(clicks==1){

hint.innerHTML="🎁 Not yet...";

gift.style.transform="scale(1.1) rotate(-10deg)";

}

else if(clicks==2){

hint.innerHTML="✨ Almost...";

gift.style.transform="scale(1.15) rotate(10deg)";

}

else if(clicks>=3){

gift.style.transform="scale(1.3)";

gift.innerHTML="💖";

hint.innerHTML="";

giftMessage.classList.remove("hidden");

launchCelebration();

}

});
/*=========================================================
        SCRIPT.JS
        PART 2
=========================================================*/

/*==========================================
HEART CURSOR
==========================================*/

const cursorHeart = document.createElement("div");

cursorHeart.id = "cursor-heart";

document.body.appendChild(cursorHeart);

document.addEventListener("mousemove",(e)=>{

cursorHeart.style.left=e.clientX+"px";

cursorHeart.style.top=e.clientY+"px";

});

/*==========================================
ROSE PETALS
==========================================*/

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*window.innerWidth+"px";

petal.style.animationDuration=

(6+Math.random()*6)+"s";

petal.style.fontSize=

(18+Math.random()*18)+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,500);

/*==========================================
FLOATING PARTICLES
==========================================*/

function createParticle(){

const particle=document.createElement("div");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.bottom="-10px";

particle.style.width=

(2+Math.random()*6)+"px";

particle.style.height=

particle.style.width;

particle.style.animationDuration=

(8+Math.random()*10)+"s";

document.body.appendChild(particle);

setTimeout(()=>{

particle.remove();

},18000);

}

setInterval(createParticle,250);

/*==========================================
HEART EXPLOSION
==========================================*/

document.addEventListener("click",(e)=>{

for(let i=0;i<12;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.fontSize=

(15+Math.random()*20)+"px";

heart.style.zIndex="999999";

heart.style.transition="1.5s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.left=

(e.clientX+(Math.random()-0.5)*250)+"px";

heart.style.top=

(e.clientY+(Math.random()-0.5)*250)+"px";

heart.style.opacity="0";

heart.style.transform="scale(2)";

},30);

setTimeout(()=>{

heart.remove();

},1700);

}

});

/*==========================================
SCROLL REVEAL
==========================================*/

const revealElements=document.querySelectorAll("section");

function reveal(){

const trigger=window.innerHeight*0.85;

revealElements.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<trigger){

section.style.opacity="1";

section.style.transform="translateY(0)";

}

});

}

window.addEventListener("scroll",reveal);

reveal();
/*=========================================================
            SCRIPT.JS
            PART 3 (FINAL)
=========================================================*/

/*==========================================
AUTO MUSIC (FIRST USER CLICK)
==========================================*/

document.addEventListener("click",function(){

if(!playing){

music.play().catch(()=>{});

playing=true;

musicButton.classList.add("playing");

musicButton.innerHTML="⏸";

}

},{once:true});

/*==========================================
FIREWORKS
==========================================*/

const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

const fireworks=[];

function Firework(){

this.x=Math.random()*canvas.width;
this.y=canvas.height;
this.targetY=Math.random()*canvas.height/2;
this.radius=3+Math.random()*3;
this.speed=5+Math.random()*4;
this.color=`hsl(${Math.random()*360},100%,60%)`;

}

Firework.prototype.update=function(){

this.y-=this.speed;

if(this.y<=this.targetY){

for(let i=0;i<40;i++){

fireworks.push({

x:this.x,
y:this.y,
dx:(Math.random()-0.5)*8,
dy:(Math.random()-0.5)*8,
life:80,
color:this.color

});

}

this.dead=true;

}

};

function animateFireworks(){

ctx.clearRect(0,0,canvas.width,canvas.height);

if(Math.random()<0.03){

fireworks.push(new Firework());

}

for(let i=fireworks.length-1;i>=0;i--){

const f=fireworks[i];

if(f instanceof Firework){

f.update();

ctx.beginPath();
ctx.arc(f.x,f.y,f.radius,0,Math.PI*2);
ctx.fillStyle=f.color;
ctx.fill();

if(f.dead){

fireworks.splice(i,1);

}

}else{

f.x+=f.dx;
f.y+=f.dy;

f.dy+=0.05;

f.life--;

ctx.beginPath();
ctx.arc(f.x,f.y,2,0,Math.PI*2);
ctx.fillStyle=f.color;
ctx.fill();

if(f.life<=0){

fireworks.splice(i,1);

}

}

}

requestAnimationFrame(animateFireworks);

}

animateFireworks();

/*==========================================
SHOOTING STARS
==========================================*/

function shootingStar(){

const star=document.createElement("div");

star.style.position="fixed";
star.style.left=Math.random()*window.innerWidth+"px";
star.style.top="-50px";
star.style.width="3px";
star.style.height="120px";
star.style.background="linear-gradient(white,transparent)";
star.style.transform="rotate(45deg)";
star.style.opacity="0.8";
star.style.pointerEvents="none";
star.style.zIndex="-1";
star.style.transition="2s linear";

document.body.appendChild(star);

setTimeout(()=>{

star.style.transform="translate(700px,700px) rotate(45deg)";
star.style.opacity="0";

},30);

setTimeout(()=>{

star.remove();

},2200);

}

setInterval(shootingStar,6000);

/*==========================================
SMOOTH SCROLL BUTTONS
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*==========================================
FINAL MESSAGE
==========================================*/

console.log("Happy Birthday Uogeshri ❤️");
/*====================================
BIRTHDAY CELEBRATION MODE
====================================*/

function launchCelebration(){

// Fireworks

for(let i=0;i<25;i++){

setTimeout(()=>{

for(let j=0;j<3;j++){

fireworks.push(new Firework());

}

},i*300);

}

// Hearts

for(let i=0;i<150;i++){

setTimeout(()=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=Math.random()*window.innerWidth+"px";

heart.style.top=window.innerHeight+"px";

heart.style.fontSize=(20+Math.random()*35)+"px";

heart.style.pointerEvents="none";

heart.style.transition="6s linear";

heart.style.zIndex="999999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="-200px";

heart.style.opacity="0";

},30);

setTimeout(()=>{

heart.remove();

},6500);

},i*80);

}

// Balloons

const balloons=["🎈","🎈","🎈","🎈","🎈"];

for(let i=0;i<40;i++){

setTimeout(()=>{

const balloon=document.createElement("div");

balloon.innerHTML=balloons[Math.floor(Math.random()*balloons.length)];

balloon.style.position="fixed";

balloon.style.left=Math.random()*window.innerWidth+"px";

balloon.style.bottom="-120px";

balloon.style.fontSize=(40+Math.random()*30)+"px";

balloon.style.transition="10s linear";

balloon.style.zIndex="999999";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.style.bottom="120%";

},50);

setTimeout(()=>{

balloon.remove();

},11000);

},i*250);

}

}