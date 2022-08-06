// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }

// //change color
// dodger.style.backgroundColor = "#000000";
// //improve visibility
// dodger.style.backgroundColor = "#FF69B4";
// //Move element up
// dodger.style.bottom = "100px";

// //resetting to original position
// dodger.style.bottom = "0px";
// dodger.style.left = "0px";


