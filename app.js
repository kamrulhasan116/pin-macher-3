function getPin(){
    const random = (Math.random()*10000 + '').split('.')[0];
    if(random.length ===4){
        return random;
    }
    else{
       
        getPin();
    }

}
function generatePin(){
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}


const buttonContainer = document.getElementById('digit-container');
buttonContainer.addEventListener('click', function(event){
const digit = event.target.innerText;
if(isNaN(digit)){
    if(digit === 'C' ){
        const typeInput = document.getElementById('typed-pin');
        typeInput.value  = '';
    }
    if(digit === 'B'){
        const typeInput = document.getElementById('typed-pin').value;
        document.getElementById('typed-pin').value = typeInput.substring(0, typeInput.length - 1);
         
    }

}
else{
    const typeInput = document.getElementById('typed-pin');
typeInput.value = typeInput.value + digit;

    
}

})

function verifyPin(){
    const pin = document.getElementById('pin').value;
    

    const typedPin = document.getElementById('typed-pin').value;
    

    if(pin === typedPin){
        document.getElementById('correct-pin').style.display = 'block'
    }
    else{
        document.getElementById('incorrect-pin').style.display = 'block'
    }

}

