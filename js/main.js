// SCROLL REVEAL EFECTS

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 250,
});

sr.reveal(`.tituloJanet`, {origin: 'left'})
sr.reveal(`.imgJanet`, {origin: 'right'})
sr.reveal(`.mainHome2`, {origin: 'bottom'})
sr.reveal(`#mainService`, {origin: 'left'})
sr.reveal(`#mainService2`, {origin: 'bottom'})
sr.reveal(`#mainGalery`, {origin: 'bottom'})
sr.reveal(`.socialEfect`, {origin: 'left'})
sr.reveal(`.artistEfect`, {origin: 'left'})
sr.reveal(`.imgPresentacion`, {origin: 'left'})
sr.reveal(`.textoPresentacion`, {origin: 'right'})
sr.reveal(`.estudiosEfect`, {origin: 'bottom'})
sr.reveal(`.mapContacto`, {origin: 'bottom'})
sr.reveal(`#sectionContacto`, {origin: 'bottom'})



// CONTACT FORM

/*
const btn = document.getElementById('button');
const msjConfirm = document.getElementById("msjConfirm");

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = ' Enviando... ';

const serviceID = '';
const templateID = ''; 

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        msjConfirm.innerHTML = "Mensaje enviado correctamente"
        setTimeout(function(){
            msjConfirm.innerHTML = ""
        },5000)
        form.reset()
    }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
        });
});

*/

