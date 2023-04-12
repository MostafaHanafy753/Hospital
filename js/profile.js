
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
        $('.side-nav ul li.route').each((i, e) => {
            $(e).click(clicked => {
                $(".side-nav ul li.route").each((i, e) => {
 
                    e.classList.remove('active')
                })
                if (!e.classList.contains('disabled')) {
                    e.classList.add('active')
                    
                }
            })
        })




        // show only last 4 digit
        const input = document.getElementById('credit');


        // the final value is saved here 
        let finalvalue;
        //*************************
        function updateunmasked() {

            finalvalue = input.value;

            let text = new Array(input.value.length - 3).join('X ') + input.value.substr(input.value.length - 4, 4);


            input.value = text
            console.log(finalvalue)


        }
        let showed = false;
        $('#showPass').click(() => {
            showed = !showed;
            if (showed) {
                input.value = finalvalue
            }
            else
                input.value = new Array(finalvalue.length - 3).join('X ') + finalvalue.substr(finalvalue.length - 4, 4)

        })

        const routes=document.getElementsByClassName('route');
        Array.from(routes).forEach((e)=>{
          let id =e.getAttribute('data-page');
          e.addEventListener('click',()=>{
            Array.from(document.getElementsByClassName('dist')).forEach(Element=>{
        Element.classList.remove('active');
        document.querySelector(id).style.display="block";
        setTimeout(()=>{
        
            document.querySelector(id).classList.add('active')
        },400)
        
        
            })
          })
          
        })
        $('.save-btn').click((E)=>{

            $(E.currentTarget).toggleClass('saved')
            })
            