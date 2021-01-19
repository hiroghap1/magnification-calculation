const calcBtn =document.getElementById('calc-btn');

calcBtn.addEventListener('click',()=>{
   const apparent = document.getElementById('apparent').value;
   const eyepiece = document.getElementById('eyepiece').value;
   const objectiveLens = document.getElementById('objective-lens').value;

   console.log(apparent,eyepiece,objectiveLens);

   const tan = Math.tan(apparent / 2 * Math.PI / 180);
   const tan2 = tan * eyepiece / objectiveLens;
    const atan = 2 * Math.atan(tan2) / Math.PI * 180;
   const calc = apparent / atan;
    console.log(Math.atan(1));
    console.log(apparent);
    console.log(tan);
    console.log(tan2);
    console.log(atan);
    console.log(calc);

    const magnification =document.getElementById('magnification');
    magnification.innerText = calc;
    const result = document.getElementById('result');
    result.style.display = 'block';

});

//40/(2*atan(tan(40/2)*20/1000))