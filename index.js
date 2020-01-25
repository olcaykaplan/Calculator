/* Background images */

setInterval('changeBackground()',12000)

let imagecount = 0;
function changeBackground () {
    
    imagecount = imagecount > 3 ? imagecount = 0 : imagecount = imagecount;
    const imgages= ['1.jpg','2.jpg','3.jpg','4.jpg'];
    document.body.style.backgroundImage = `url(${imgages[imagecount]})`;
    imagecount++;
}
changeBackground();

//count is the value of the last operation
//number is which we set with key
let count = 0;
const resultEl = document.querySelector(".result");

let number = 0;
const countEl = document.querySelector(".previous");

let lastOperation = '';
let precount= 0;
let check = false;
const operation = item => {
 
   
   
    lastOperation = item === "clear" ? lastOperation = lastOperation : lastOperation = item;
        if(item !== 'clear'){
            switch(item){
                case 'divide':
                     count = count === 0 ? count = number : count = parseInt(count) / parseInt(number);
                    lastOperation = '/';
                     break;
                case 'multiply':
                    count = count === 0 ? count = number : count = parseInt(count) * parseInt(number);
                    lastOperation = '*';
                    break;    
                case 'subtraction':
                    count = count === 0 ? count = number : count = parseInt(count) - parseInt(number);
                    lastOperation = '-';
                    break;
                case 'add':
                    count = count === 0 ? count = number : count =  parseInt(count) + parseInt(number);
                    lastOperation = '+';
                    break;  }
                
            updateCount(number,lastOperation);
            updateResult(count);
            precount = number;
            check = true;
        }
    else clearAll();
}
//debugger;
/*const sum = (operation)=>{
  
  
  switch (operation){
    case 'sum':
      console.log(count+ 'it\'s tpye is '+typeof count);
     // count = count === 0 ? alert("count 0") : alert("count 0 değil");  
     
    count = count === 0 ? count = number : count = parseInt(count) + parseInt(number);
      updateResult(count);
      break;
    case 'minus':
      count = count === 0 ? count = number : count =parseInt(count) - parseInt(number);
      updateResult(count);
      break;
     case 'divide':
      count = count === 0 ? count = number : count = parseInt(count) / parseInt(number);
       updateResult(count);
       break;
      case 'multiply':
      count = count === 0 ? count = number : count = parseInt(count) * parseInt(number);
        updateResult(count);
        break;    
      default:
        console.log("yanlış mk");
  };
  number = 0;
 updateCount(0);
}*/
const updateResult = (value) => {
   
  resultEl.innerText = value;
}

const updateCount = (number,lastOperation) => {
    if (number !==0)
    countEl.innerText += number+''+lastOperation;
}

const clearAll = () =>{
 resultEl.innerText ='';
 countEl.innerText ='';  
    number = 0;
    count = 0;
}


//it will run when numbers and function keys clicked
document.querySelector('.calculater-content').addEventListener('click', (e) => {
    
    //getting clicked target data value, we will check some situations
    if(check === true) {number = 0; check = false} ;
    let pressedKey = e.target.dataset.value;
       
    if(number && typeof pressedKey != "undefined")
    {
     
       number += pressedKey;
       return updateResult(number);
    }

    else if (pressedKey !== '0' && typeof pressedKey != "undefined")
    {
            if ( pressedKey === 'divide' || pressedKey === 'multiply' || pressedKey === 'subtraction' || pressedKey === 'add' || pressedKey === 'equal' || pressedKey === '' )
            {                          
            operation(pressedKey);
            }
            else{   
            number = pressedKey;
             return updateResult(number);
            }
    }    

});

