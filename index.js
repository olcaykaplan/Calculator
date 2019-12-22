
//count is the value of the last operation
//number is which we set with key
let count = 0;
const resultEl = document.querySelector(".result");

let number = 0;
const countEl = document.querySelector(".operation");

//debugger;
const sum = (operation)=>{
  
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
}
const updateResult = (value) => {
  resultEl.innerText = value;
}
const updateCount = (value) => {
  countEl.innerText = value;
}

updateCount(0);
//it will run when numbers and function keys clicked
document.querySelector('.calculater-content').addEventListener('click', (e) => {
  
    //getting clicked target data value, we will check some situation
    let pressedKey = e.target.dataset.value;
   
    if(number && typeof pressedKey != "undefined")
    {
       number += pressedKey;
       return updateCount(number);
    }

    else if (pressedKey !== '0' && typeof pressedKey != "undefined")
    {
      number = pressedKey;
      return updateCount(number);
    }    
});
