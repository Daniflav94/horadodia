function carregar(){

    let msg = window.document.querySelector('.msg')
    let img = window.document.querySelector('.fundo')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let cumprimento = window.document.querySelector('.cumprimento')
   
    

    if (hora >= 0 && hora < 5){
        img.style.background = "URL('noite.jpg') no-repeat center / cover";
        cumprimento.innerHTML = 'Boa noite'
    }else if (hora >= 5 && hora < 6){
        img.style.background = "URL('amanhecer.jpg') no-repeat center / cover";
        cumprimento.innerHTML = 'Bom dia'
    }else if (hora >= 6 && hora < 12){
        img.style.background = "URL('manhã.jpg') no-repeat center / cover";
        cumprimento.innerHTML = 'Bom dia'
    }else if (hora >= 12 && hora < 17){
        img.style.background = "URL('meiodia.jpg') no-repeat center / cover";
        cumprimento.innerHTML = 'Boa tarde'
    }else if (hora >= 17 && hora < 18){
        img.style.background = "URL('anoitecer.jpg') no-repeat center / cover";
        cumprimento.innerHTML = 'Boa tarde'
    }else if (hora >= 18 && hora < 23){
        img.style.background = "URL('noite.jpg') no-repeat center / cover";
        cumprimento.innerHTML = 'Boa noite'
    }

    msg.innerHTML = `, agora são ${hora} : ${minutos} `
  
}
