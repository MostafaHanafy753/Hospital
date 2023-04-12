const num=parseInt($('#stars').data("rate"));
$('.star').each((i,e)=>{
  if(i<num)
  {
    e.classList.add('selected')
  }
})
  