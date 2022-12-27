// OWL CAROUSEL EFECTS

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

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
