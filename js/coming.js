$(document).ready(()=>{
    if(!localStorage.getItem('dir'))
    {
   localStorage.setItem('dir','true');
    }
    $(document.body).attr('dir',localStorage.getItem('dir')=='true'?'rtl':'ltr');
   
    
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