$('.eye').each((i,e)=>{
    let showed=false;
$(e).click((ev)=>{
if(!showed){
$(e).siblings().get(0).type='text';
showed=true
}else{
$(e).siblings().get(0).type='password';
showed=false
}


})
})