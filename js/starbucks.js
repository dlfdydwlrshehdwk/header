$(()=>{

// [검색창 - 아이콘 누를때 input 포커스]
const searchAll = $('.search');
const input = $('.search input');
const icon = $('.search i');

// 검색창을 누르면 input 포커스
searchAll.on('click',(()=>{
  input.focus()
}))

input.on('click',()=>{
  icon.css({'opacity':'0'})
  input.attr('placeholder','검색어를 입력해 주세요')
})

input.on('blur',()=>{
  input.val('')
  input.attr('placeholder','')
  icon.css({'opacity':'1'})
})

// enter시 입력 내용 삭제
input.keypress(function(e){
  if(e.keyCode == 13){
    input.val('')
  }
})



})