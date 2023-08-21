/*
essa é a estrutura basica, caso queiram entender o que cria
    <div class="popUpContainer">
        <div class="positioner">
          <div class="popUpMessage">
            <div class="message">
            </div>
            <button class="btn btn-warning center-block">ok</button>
          </div>
        </div>        
     </div>
*/

var PopupMessage = {
    container: null,
    message:null,
    confirmation:null, 
    show: function(message){
        this.message.innerHTML = message;
        $(this.container).fadeIn(200);
    },
    init:function(){

        let popUpContainer = document.createElement('div');
        popUpContainer.classList.add('popUpContainer');
        popUpContainer.style.display = 'none';
        
        let positioner = document.createElement('div');
        positioner.classList.add('positioner');
        
        let popUpMessage = document.createElement('div');
        popUpMessage.classList.add('popUpMessage');        
        popUpMessage.setAttribute('aria-atomic',"true");
        popUpMessage.setAttribute('aria-live','assertive');
        popUpMessage.setAttribute('tabindex','0');
        
        let message = document.createElement('div');
        message.classList.add('message');
        
        let button = document.createElement('div');
        button.classList.add('btn');
        button.classList.add('btn-warning');
        button.classList.add('center-block');
        button.innerHTML = "ok";

        popUpMessage.appendChild(message);
        popUpMessage.appendChild(button);
        positioner.appendChild(popUpMessage);
        popUpContainer.appendChild(positioner);

        body = document.getElementsByTagName('body')[0];
        body.appendChild(popUpContainer);

        this.container = popUpContainer;
        this.message = message;
        this.confirmation = button;

        let t = this;
        this.confirmation.addEventListener('click', function(){
            $(t.container).fadeOut(200);
        })
        console.log("mecanismo de popUps Inicializado")
    }
}

window.addEventListener('load', function(){
    PopupMessage.init();
})