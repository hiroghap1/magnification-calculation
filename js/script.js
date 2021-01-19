const calcBtn =document.getElementById('calc-btn');
const base = 100;// 四捨五入桁数

calcBtn.addEventListener('click',()=>{
   const apparent = document.getElementById('apparent').value;
   const eyepiece = document.getElementById('eyepiece').value;
   const objectiveLens = document.getElementById('objective-lens').value;

   const tan = Math.tan(apparent / 2 * Math.PI / 180);
   const tan2 = tan * eyepiece / objectiveLens;
    const atan = 2 * Math.atan(tan2) / Math.PI * 180;
   const calc = apparent / atan;

    const magnification =document.getElementById('magnification');
    magnification.innerText = Math.round(calc * base) / base;
    const result = document.getElementById('result');
    result.style.display = 'block';

});