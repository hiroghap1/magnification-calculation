const calcBtn =document.getElementById('calc-btn');

calcBtn.addEventListener('click',()=>{
   const apparent = document.getElementById('apparent').value;
   const eyepiece = document.getElementById('eyepiece').value;
   const objectiveLens = document.getElementById('objective-lens').value;

   console.log(apparent,eyepiece,objectiveLens);

   const calc = apparent / 2 * Math.atan(Math.tan(apparent / 2) * eyepiece / objectiveLens);
    console.log(calc);

    const magnification =document.getElementById('magnification');
    magnification.innerText = calc;
    const result = document.getElementById('result');
    result.style.display = 'block';

});