/* const container = document.getElementById('container');
console.log(container);

const secondary = document.getElementsByClassName('secondary');
console.log(secondary);

const textBoxById = document.getElementById('nameId');
console.log(textBoxById);
const textBoxByName = document.getElementsByName('firstName');
console.log(textBoxByName);
 */
/* 
function printInConsole(event) {
    console.log(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    console.log('INSIDE SUBMIT');
  }
   */
/* 
function xfocus(e) {
    e.style.background = "lightyellow"
    
}

function xblur(e) {
    e.style.background = "white"
    
}

function xchange() {
    alert('change done');
    
}

function xselect() {
    alert('Selected');
    
}

function xsubmit() {
    alert('Form Submit');
    
}

function xclear() {
    alert('Form Cleared');
    
} */
//DOCUMENT MEANS FULL WINDOW(WHEREEVERN WE CLICK IN THE WINDOW)
document.addEventListener("keyup", (event) => {
  // if (event.isComposing || event.keyCode === 229) {
  //   return;
  // }
  //var event = window.event ? window.event : e;
  // console.log(event.keyCode)
  // do something
  let keycode = event.keyCode;
  if (keycode == 37) {
    console.log("moving left");
  } else if (keycode == 38) {
    console.log("moving UP");
  } else if (keycode == 39) {
    console.log("moving Right");
  } else if (keycode == 40) {
    console.log("moving down");
  } else {
    console.log("Please press any arrow key");
  }
});
