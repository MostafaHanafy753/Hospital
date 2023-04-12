let dirctian
$(document).ready(()=>{
    if(!localStorage.getItem('dir'))
    {
   localStorage.setItem('dir','true');
    }
    $(document.body).attr('dir',localStorage.getItem('dir')=='true'?'rtl':'ltr');
   dirctian=localStorage.getItem('dir')=='true'?'left':'right';
    
    if( localStorage.getItem('dir')=='true')
    {
     $('#lange span').text('EN')
    }
    else   $('#lange span').text('AR')
     $('#lange').click(()=>{
      
      
     if(localStorage.getItem('dir')=='true')
     {
       localStorage.setItem('dir',false)
    
       
     }
     else {localStorage.setItem('dir',true)
   
   }
   
     location.reload()
   
   
       
     })
   })

$('.add-pateint').click((e) => {
    console.log('hello')
    $($('#clone').clone()).insertBefore($(e.currentTarget))

})
$(".chb").change(function () {
    $(".chb").prop('checked', false);
    $(this).prop('checked', true);
    if (($('#credit-show').prop('checked')) == true) {
        $('#cridet').removeClass('disabled')
        $('#cridet select').prop('disabled', false)
    } else {
        $('#cridet').addClass('disabled')
        $('#cridet select').prop('disabled', true)
    }
});
$(".chb").change(function () {
    $(".chb").not(this).prop('checked', false);

});
$(".gender").change(function () {
    $(".gender").prop('checked', false);
    $(this).prop('checked', true);

});
$(".gender").change(function () {
    $(".gender").not(this).prop('checked', false);

});
$(".time").change(function () {
    $(".time").prop('checked', false);
    $(this).prop('checked', true);

});
$(".time").change(function () {
    $(".time").not(this).prop('checked', false);

});
window.onload = function(){
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
 let displayValOne = document.getElementById("from");
let displayValTwo = document.getElementById("to");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
$(displayValOne).change(()=>{
    sliderOne.value= (displayValOne.value/6000)*100;
    
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    fillColor();
})
$(displayValTwo).change(()=>{
    sliderTwo.value= (displayValTwo.value/6000)*100;
 
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    fillColor();
})
function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
   displayValOne.value = parseInt((sliderOne.value / sliderMaxValue) * 6000);
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
     displayValTwo.value = parseInt((sliderTwo.value / sliderMaxValue) * 6000);
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to ${dirctian}, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}