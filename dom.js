          //  heart1
 
    document.getElementById('heart-1').onclick = changeColor1;  
 
    function changeColor1() {
      if (document.getElementById("heart-1").style.color!=='red'){
        document.getElementById("heart-1").style.color='red';

      }
       else {
        document.getElementById("heart-1").style.color='black';
      }
    }  


                  // heart2
  
    document.getElementById("heart-2").onclick = changeColor2;  
 
    function changeColor2() {
       if (document.getElementById("heart-2").style.color!=='red'){
         document.getElementById("heart-2").style.color='red';

       }
       else {
        document.getElementById("heart-2").style.color='black';
      }
    } 
    
    // heart3
    document.getElementById("heart-3").onclick = changeColor3;  
 function changeColor3() {
   if (document.getElementById("heart-3").style.color!=='red'){
     document.getElementById("heart-3").style.color='red';

   }
    else {
     document.getElementById("heart-3").style.color='black';
   }
 }  
            //  close1 


  document.getElementById("close-1").onclick = changeColor4;  
 
 function changeColor4() {
   if (document.getElementById("close-1").style.color!=='red'){
     document.getElementById("close-1").style.color='red';

   }
    else {
     document.getElementById("close-1").style.color='black';
   }
 }   
    //    close2 


 document.getElementById("close-2").onclick = changeColor5;  
 
 function changeColor5() {
   if (document.getElementById("close-2").style.color!=='red'){
     document.getElementById("close-2").style.color='red';

   }
    else {
     document.getElementById("close-2").style.color='black';
   }
 }   
  
                //  close3

 document.getElementById("close-3").onclick = changeColor6;  
 
 function changeColor6() {
   if (document.getElementById("close-3").style.color!=='red'){
     document.getElementById("close-3").style.color='red';

   }
    else {
     document.getElementById("close-3").style.color='black';
   }
 }   
//  plus
let plusBtns = Array.from(document.getElementsByClassName("fa-cart-plus"));
for (let i in plusBtns) {
  plusBtns[i].addEventListener("click", function () {
      plusBtns[i].nextElementSibling.innerText++;
      totalSum()
  })
}
// moins
let minusBtns = Array.from(document.getElementsByClassName("fa-minus-square"));

for (let i in minusBtns) {
  minusBtns[i].addEventListener("click", function () {
      minusBtns[i].previousElementSibling.innerText > 0 &&
          minusBtns[i].previousElementSibling.innerText--;
      totalSum()
  })
}

// close

// let deleteBtns = document.querySelectorAll(".fa-window-close");
// totale price 
function totalSum() {
    let qutes = Array.from(document.getElementsByClassName("quantity"));
    let unitPrices = document.querySelectorAll(".unit-price")
    let totalPrice = document.querySelector(".total")

    let s = 0;
    for (let i in qutes) {
        s = s + unitPrices[i].innerText.replace("€", "") * qutes[i].innerText
    }
    totalPrice.innerText = s + "  €"

} 
     