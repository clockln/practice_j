var test1 = document.getElementById('test1')
test1.innerHTML = '<a href="https://www.amazon.co.jp/ref=nav_logo">Amazon</a>'

var buttontest1 = document.getElementById('buttontest1')
var buttontest2 = document.getElementById('buttontest2')

buttontest1.onclick = ButtonGClick;
buttontest2.onclick = ButtonAClick;

function ButtonGClick(){
  test1.innerHTML = '<a href="https://www.google.com/">google</a>'
}

function ButtonAClick(){
  test1.innerHTML = '<a href="https://www.amazon.co.jp/ref=nav_logo">Amazon</a>'
}
