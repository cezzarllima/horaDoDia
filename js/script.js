function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
   
   
    msg.innerHTML = `Agora são ${hora} horas`;

    if(hora >= 0 && hora  <=11){
       
        img.src ="img/dimanhan.png";
        document.body.style.background = "#d0d1cf";
        document.getElementById(fundo.style.background ="#c7bca4");
    }else if(hora >= 12 && hora < 18){
        
        img.src ="img/ditarde.png";
        document.body.style.background = "#feca99";
        document.getElementById(fundo.style.background = "#b47c69");
        
    }else{
       
        img.src ="img/dinoite.png";
        document.body.style.background = "#232426";
        document.getElementById(fundo.style.background = "#33363c");
    
    }

    }


