const test1 = document.getElementById('test1')

const buttontest1 = document.getElementById('buttontest1')
const buttontest2 = document.getElementById('buttontest2')

buttontest1.onclick = ButtonGClick;
buttontest2.onclick = tables;

function ButtonGClick(){
  test1.innerHTML = '<a href="https://www.google.com/">google</a>'
}

const table = document.getElementById('table1')
let aftertable = ''
let data = [
  ['AAA',120,2000],
  ['AQW',852,1010],
  ['PAHH',14,97541]
]

function tables(){
  aftertable = '<tr><th>NAME</th><th>BPM</th><th>NOTES</th></tr>'
  data.forEach(function (element){
                 aftertable += '<tr><td>' + element[0] + '</td><td>' + element[1] + '</td><td>' + element[2] + '</td></tr>'
               });
  table.innerHTML = aftertable
}
