(function(){
    console.log('Début du carrousel')
   
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerieImg = elmGalerie.querySelectorAll("figure figure img")
    let elmCarrousel = document.querySelector('.carrousel')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    console.log(elmGalerieImg[0].getAttribute('src')) // affiche addresse URL de chaque image
    
    for (const img of elmGalerieImg){
        img.addEventListener('mousedown', function(){
            console.log(this.getAttribute('src'))
            elmCarrousel.classList.add('carrousel__active')
            console.log(elmCarrousel.classList) // affiche l'ensemble des classes qui font partie de carrousel
        })
    }
    
})()