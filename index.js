
//count is the value of the last operation
//number is which we set with key
let count = 0;
const resultEl = document.querySelector(".result");

let number = 0;
const countEl = document.querySelector(".previous");

let lastOperation = 'atanmadı';

const operation = item => {
 
    debugger;
   //lastOperation = item == 'clear' ? alert(item) : alert(lastOperation);
    lastOperation = item === "clear" ? lastOperation = lastOperation : lastOperation = item;
 
    switch(item){
        case 'clear':
             updateResult(0);
            break;
        case 'divide':
            
             count = count === 0 ? count = number : count = parseInt(count) / parseInt(number);
            break;
        case 'multiply':
            count = count === 0 ? count = number : count = parseInt(count) * parseInt(number);
            updateResult(count);
            break;    
        case 'subtraction':
            count = count === 0 ? count = number : count = parseInt(count) - parseInt(number);
            updateResult(count);
            break;
        case 'sum':
            count = count === 0 ? count = number : count =  arseInt(count) + parseInt(number);
            break;
    }
    
    number = 0;
    
   // add,equal
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

const updateCount = (value) => {
  countEl.innerText = value;
}

updateCount(0);

//it will run when numbers and function keys clicked
document.querySelector('.calculater-content').addEventListener('click', (e) => {
  
    //getting clicked target data value, we will check some situations
    
    let pressedKey = e.target.dataset.value;
       
    if(number && typeof pressedKey != "undefined")
    {
     
       number += pressedKey;
       return updateResult(number);
    }

    else if (pressedKey !== '0' && typeof pressedKey != "undefined")
    {
            if ( pressedKey === 'divide' || pressedKey === 'multiply' || pressedKey === 'subtraction' || pressedKey === 'add' || pressedKey === 'equal'  )
            {                          
            operation(pressedKey);
            }
            else{   
            number = pressedKey;
             return updateResult(number);
            }
    }    

});
