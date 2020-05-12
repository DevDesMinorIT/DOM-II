// Your code goes here\
//TODO: MOUSECLICK 'click'
const nav = document.querySelector('.main-navigation');
console.log('NAVBAR', nav)          //! make sure you have selected the right element
nav.addEventListener('click', function(event) {
    event.target.style.backgroundColor = '#ffb64a';
})

//TODO: MOUSECLICK 'click'
const aTag = document.querySelector('a');
console.log('ANCHOR TAG HTML COLLECTION', aTag);
aTag.addEventListener('click', function(event){
    event.target.style.color = 'red';
})

//TODO: MOUSEOVER 'mousover'
const link = document.querySelectorAll('a.nav-link');
console.log("HERE",link);
link.forEach((l) => {
    l.addEventListener('mouseover', (event) => {
        event.target.style.border = '3px dashed yellow';
        event.target.style.color = 'white';
    })
    
})

//TODO: MOUSEENTER--MOUSELEAVE 'mouseover' 'mouseleave' using .forEach()
const newh2 = document.querySelectorAll('h2');
console.log('HERE H2', newh2);
newh2.forEach(h => {
    h.addEventListener('mouseenter', function(event) {
        event.target.style.color = '#FF6EC7';
        event.target.style.textShadow = '2.5px 2.5px #ffb64a';
    })
    h.addEventListener('mouseleave', function(event) {
        event.target.style.color = 'black';
        event.target.style.textShadow = 'none';
    })
})

//TODO: mouseover II
const theText = document.querySelectorAll('.text-content');
console.log("HERE IS TEXT INFO", theText);
theText.forEach((t) => {
t.addEventListener('mouseover', function(event) {
    event.target.style.color = 'gray';
    event.target.style.textShadow = '5.5px 5.5px #ffb64a';
})

//TODO:SCROLL 'scroll'
window.addEventListener('scroll', () => {
    const textContent = document.querySelector('.textContent');
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY
    console.log(scrollable);
    console.log(scrolled);

    if(Math.ceil(scrolled) === scrollable) {
        alert('You have reached the end of webpage')
    } 
})
})

//TODO h1
const h1 = document.querySelector('h1');
h1.addEventListener('click', function(event) {
    event.target.style.color = 'white';
    event.target.style.textShadow = '2.5px 2.5px #FFFF00'
})
//TODO p
const pTag = document.querySelectorAll('p');
console.log('HERE P tag', pTag);
pTag.forEach((p) => {
    p.addEventListener('click', (event) => {
        event.target.style.color = '#ffb64a';
    })
})
//TODO h4
const h4 = document.querySelectorAll('h4');
h4.forEach(h => {
    h.addEventListener('click', (event) => {
        event.target.style.backgroundColor = '#ffb64a';
        event.target.style.color = '#ff6ec7';
        event.target.style.textShadow = '4px 4px gray';
    })
})

//TODO images mouseenter/mouseleave with forEach
const images = document.querySelectorAll('img');
images.forEach((i) => {
    i.addEventListener('mouseenter', (event) => {
        event.target.style.transform = 'scale(1.2)';
        event.target.style.transition = 'all 0.3s';
    })
})
images.forEach((i) => {
    i.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale(1.0)';  
    })
})

//TODO footer
const footer = document.querySelector('footer');
footer.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = '#ffb64a'
    event.target.style.color = '#ffff00'
})
