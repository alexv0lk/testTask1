
const form = document.forms.form;
const input = document.querySelector('.form__input');
const spanContainer = document.querySelector('.span-container');
const formButton = document.querySelector('.form__button');
let quantityRender;
let quantitySpan;
const quantityOneRender = 500;


function renderSpan(spanContainer, quantity){
        if (quantity>quantityOneRender){
            for(let i=0; i<quantityOneRender;i++){
                const one = document.createElement("span");
                one.textContent = Math.floor(Math.random()*10);
                spanContainer.appendChild(one);
            }
           


        }else{
            for(let i=0; i<quantity;i++){
                const one = document.createElement("span");
                one.textContent = Math.floor(Math.random()*10);
                spanContainer.appendChild(one);
            }
        }    
};

function addSpan() {
    while(quantityRender!=0) {
      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
      if (windowRelativeBottom > document.documentElement.clientHeight + 300) break;
      renderSpan(spanContainer, quantitySpan);
      quantityRender -= 1;
      quantitySpan -= quantityOneRender; 
      
    }
  }

input.addEventListener('input', function(){
    if(!input.checkValidity()){
        formButton.setAttribute('disabled', true);
    } else {
        formButton.removeAttribute('disabled');
    }
})

form.addEventListener('submit', function(event){
    event.preventDefault();
    spanContainer.textContent="";
    quantityRender = 0;
    renderSpan(spanContainer, input.value);
    console.log(`Введенное количество: ${input.value}.`)
    if(input.value>quantityOneRender){
        quantityRender = Math.ceil((input.value-quantityOneRender)/quantityOneRender);
        quantitySpan = input.value - quantityOneRender;
    }
    form.reset();
})

window.addEventListener('scroll', addSpan);


