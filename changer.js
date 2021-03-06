//tables---------------------------------------------------------------------------------------------------------------------------
const table = document.getElementById('MainTable')
let aftertable = ''

const table_th = ['NAME',
                  'ID',
                  'Ver',
                  'LV',
                  'CHAIN',
                  'inCHIP',
                  'inLONG',
                  'inVOL',
                  'MAXEX',
                  'LV_V',
                  'CHAIN_V',
                  '増減VI',
                  'BPM',
                  'Artist',
                  'Effector',
                  'Vertical_L',
                  'Vertical_R',
                  'Vertical',
                  'Time',
                  'LV_IV',
                  'CHAIN_IV',
                  '増減V',
                  'LV_III'
                  ]

const table_th_class = ['NAME',
                    'ID',
                    'Ver',
                    'LV',
                    'CHAIN',
                    'inCHIP',
                    'inLONG',
                    'inVOL',
                    'MAXEX',
                    'LV_V',
                    'CHAIN_V',
                    'CHAIN_toVI',
                    'BPM',
                    'Artist',
                    'Effector',
                    'Vertical_L',
                    'Vertical_R',
                    'Vertical',
                    'Time',
                    'LV_IV',
                    'CHAIN_IV',
                    'CHAIN_toV',
                    'LV_III'
                    ]



const table_no = [1,
                  0,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                  21,
                  22
                   ]

const table_leng = table_th.length

function tables(){
  const startTime = performance.now()
  
//--checker boot---------------------------------------------------------------------------------------------------------------------
  bpmChecker()
  
  aftertable = '<tr>'
  for(let i=0;i<table_leng;i++){
    aftertable += '<th' /*+ ' class=\"' + table_th_class[table_no[i]] + '\">'*/ + '>' + table_th[table_no[i]] + '</th>'
  }
  aftertable += '</tr>'

  data.forEach(function (dt){
    if(dt[24] < MinBpm || MaxBpm < dt[24]) return true;
    aftertable += '<tr>'
    for(let i=0;i<table_leng;i++){
      aftertable += '<td' /*+ ' class=\"' + table_th_class[table_no[i]] + '\">'*/ + '>' + dt[table_no[i]] + '</td>'
    }
  });

  table.innerHTML = aftertable
  const endTime = performance.now()
  console.log(endTime - startTime)
}

//buttonmain---------------------------------------------------------------------------------------------------------------------------
const MainButton = document.getElementById('mainbutton')

MainButton.onclick = MainButtonClick;

function MainButtonClick(){
  SortButton_classresetter();
  SortButton_id_Click();
}

  //--sortbutton_classreset-----------------------------------------------------------------------------------------------------------------
function SortButton_classresetter(){
  sortButton_id.className = 'asc'
  sortButton_chain.className = 'desc'
  sortButton_bpm.className = 'desc'
  sortButton_time.className = 'desc'
}

  //--sortbuttonID----------------------------------------------------------------------------------------------------------------------------
const sortButton_id = document.getElementById('sortID')

sortButton_id.onclick = SortButton_id_Click

function SortButton_id_Click(){
  if(sortButton_id.className == 'asc'){
    data.sort(function(a,b){return a[1]-b[1]})
    SortButton_classresetter()
    sortButton_id.className = 'desc'
  }
  else if(sortButton_id.className == 'desc'){
    data.sort(function(a,b){return b[1]-a[1]})
    SortButton_classresetter()
    sortButton_id.className = 'asc'
  }
  tables();
}

  //--sortbuttonchain----------------------------------------------------------------------------------------------------------------------------
const sortButton_chain = document.getElementById('sortCHAIN')

sortButton_chain.onclick = SortButton_chain_Click

function SortButton_chain_Click(){
  if(sortButton_chain.className == 'asc'){
    data.sort(function(a,b){return a[4]-b[4]})
    SortButton_classresetter()
    sortButton_chain.className = 'desc'
  }
  else if(sortButton_chain.className == 'desc'){
    data.sort(function(a,b){return b[4]-a[4]})
    SortButton_classresetter()
    sortButton_chain.className = 'asc'
  }
  tables();
}

  //--sortbutton_bpm----------------------------------------------------------------------------------------------------------------------------
const sortButton_bpm = document.getElementById('sortBPM')

sortButton_bpm.onclick = SortButton_bpm_Click

function SortButton_bpm_Click(){
  if(sortButton_bpm.className == 'asc'){
    data.sort(function(a,b){return a[24]-b[24]})
    SortButton_classresetter()
    sortButton_bpm.className = 'desc'
  }
  else if(sortButton_bpm.className == 'desc'){
    data.sort(function(a,b){return b[24]-a[24]})
    SortButton_classresetter()
    sortButton_bpm.className = 'asc'
  }
  tables();
}

  //--sortbutton_time----------------------------------------------------------------------------------------------------------------------------
const sortButton_time = document.getElementById('sortTIME')

sortButton_time.onclick = SortButton_time_Click

function SortButton_time_Click(){
  if(sortButton_time.className == 'asc'){
    data.sort(function(a,b){return a[25]-b[25]})
    SortButton_classresetter()
    sortButton_time.className = 'desc'
  }
  else if(sortButton_time.className == 'desc'){
    data.sort(function(a,b){return b[25]-a[25]})
    SortButton_classresetter()
    sortButton_time.className = 'asc'
  }
  tables();
}

//limitbutton---------------------------------------------------------------------------------------------------------------------------
let MinBpm = 0
let MaxBpm = 10000

function bpmChecker(){
  let tempminbpm = document.getElementById('minbpm').value
  let tempmaxbpm = document.getElementById('maxbpm').value
  
  if(tempminbpm == null || tempminbpm == ''){
    MinBpm = 0
  }else{
    MinBpm = tempminbpm
  }
  
  if(tempmaxbpm == null || tempmaxbpm == ''){
    MaxBpm = 10000
  }else{
    MaxBpm = tempmaxbpm
  }
}



//checkbox-----------------------------------------------------------------------------------------------------------------------
  //--id---------------------------------------------------------------------------------------------------------------------------
const checkbox_id = document.getElementById('id_display')

checkbox_id.addEventListener('change',id_display_function)

function id_display_function(){
  const styleid = document.getElementById('ID_display_css')
  if(checkbox_id.checked){
    styleid.disabled = true;
  }else{
    styleid.disabled = false;
  }
}

  //--name---------------------------------------------------------------------------------------------------------------------------
const checkbox_name = document.getElementById('name_display')

checkbox_name.addEventListener('change',name_display_function)

function name_display_function(){
  const stylename = document.getElementById('NAME_display_css')
  if(checkbox_name.checked){
    stylename.disabled = true;
  }else{
    stylename.disabled = false;
  }
}

  //--ver---------------------------------------------------------------------------------------------------------------------------
const checkbox_ver = document.getElementById('ver_display')

checkbox_ver.addEventListener('change',ver_display_function)

function ver_display_function(){
  const stylever = document.getElementById('Ver_display_css')
  if(checkbox_ver.checked){
    stylever.disabled = true;
  }else{
    stylever.disabled = false;
  }
}

  //--lv---------------------------------------------------------------------------------------------------------------------------
const checkbox_lv = document.getElementById('lv_display')

checkbox_lv.addEventListener('change',lv_display_function)

function lv_display_function(){
  const stylelv = document.getElementById('LV_display_css')
  if(checkbox_lv.checked){
    stylelv.disabled = true;
  }else{
    stylelv.disabled = false;
  }
}

  //--chain---------------------------------------------------------------------------------------------------------------------------
const checkbox_chain = document.getElementById('chain_display')

checkbox_chain.addEventListener('change',chain_display_function)

function chain_display_function(){
  const stylechain = document.getElementById('CHAIN_display_css')
  if(checkbox_chain.checked){
    stylechain.disabled = true;
  }else{
    stylechain.disabled = false;
  }
}

  //--inchip---------------------------------------------------------------------------------------------------------------------------
const checkbox_inchip = document.getElementById('inchip_display')

checkbox_inchip.addEventListener('change',inchip_display_function)

function inchip_display_function(){
  const styleinchip = document.getElementById('inCHIP_display_css')
  if(checkbox_inchip.checked){
    styleinchip.disabled = true;
  }else{
    styleinchip.disabled = false;
  }
}

  //--inlong---------------------------------------------------------------------------------------------------------------------------
const checkbox_inlong = document.getElementById('inlong_display')

checkbox_inlong.addEventListener('change',inlong_display_function)

function inlong_display_function(){
  const styleinlong = document.getElementById('inLONG_display_css')
  if(checkbox_inlong.checked){
    styleinlong.disabled = true;
  }else{
    styleinlong.disabled = false;
  }
}

  //--invol---------------------------------------------------------------------------------------------------------------------------
const checkbox_invol = document.getElementById('invol_display')

checkbox_invol.addEventListener('change',invol_display_function)

function invol_display_function(){
  const styleinvol = document.getElementById('inVOL_display_css')
  if(checkbox_invol.checked){
    styleinvol.disabled = true;
  }else{
    styleinvol.disabled = false;
  }
}

  //--maxex---------------------------------------------------------------------------------------------------------------------------
const checkbox_maxex = document.getElementById('maxex_display')

checkbox_maxex.addEventListener('change',maxex_display_function)

function maxex_display_function(){
  const stylemaxex = document.getElementById('MAXEX_display_css')
  if(checkbox_maxex.checked){
    stylemaxex.disabled = true;
  }else{
    stylemaxex.disabled = false;
  }
}

  //--lv_v---------------------------------------------------------------------------------------------------------------------------
const checkbox_lv_v = document.getElementById('lv_v_display')

checkbox_lv_v.addEventListener('change',lv_v_display_function)

function lv_v_display_function(){
  const stylelv_v = document.getElementById('LV_V_display_css')
  if(checkbox_lv_v.checked){
    stylelv_v.disabled = true;
  }else{
    stylelv_v.disabled = false;
  }
}

  //--chain_v---------------------------------------------------------------------------------------------------------------------------
const checkbox_chain_v = document.getElementById('chain_v_display')

checkbox_chain_v.addEventListener('change',chain_v_display_function)

function chain_v_display_function(){
  const stylechain_v = document.getElementById('CHAIN_V_display_css')
  if(checkbox_chain_v.checked){
    stylechain_v.disabled = true;
  }else{
    stylechain_v.disabled = false;
  }
}

  //--chain_tovi---------------------------------------------------------------------------------------------------------------------------
const checkbox_chain_tovi = document.getElementById('chain_tovi_display')

checkbox_chain_tovi.addEventListener('change',chain_tovi_display_function)

function chain_tovi_display_function(){
  const stylechain_tovi = document.getElementById('CHAIN_toVI_display_css')
  if(checkbox_chain_tovi.checked){
    stylechain_tovi.disabled = true;
  }else{
    stylechain_tovi.disabled = false;
  }
}

  //--bpm---------------------------------------------------------------------------------------------------------------------------
const checkbox_bpm = document.getElementById('bpm_display')

checkbox_bpm.addEventListener('change',bpm_display_function)

function bpm_display_function(){
  const stylebpm = document.getElementById('BPM_display_css')
  if(checkbox_bpm.checked){
    stylebpm.disabled = true;
  }else{
    stylebpm.disabled = false;
  }
}

  //--artist---------------------------------------------------------------------------------------------------------------------------
const checkbox_artist = document.getElementById('artist_display')

checkbox_artist.addEventListener('change',artist_display_function)

function artist_display_function(){
  const styleartist = document.getElementById('Artist_display_css')
  if(checkbox_artist.checked){
    styleartist.disabled = true;
  }else{
    styleartist.disabled = false;
  }
}

  //--effector---------------------------------------------------------------------------------------------------------------------------
const checkbox_effector = document.getElementById('effector_display')

checkbox_effector.addEventListener('change',effector_display_function)

function effector_display_function(){
  const styleeffector = document.getElementById('Effector_display_css')
  if(checkbox_effector.checked){
    styleeffector.disabled = true;
  }else{
    styleeffector.disabled = false;
  }
}

  //--vertical_l---------------------------------------------------------------------------------------------------------------------------
const checkbox_vertical_l = document.getElementById('vertical_l_display')

checkbox_vertical_l.addEventListener('change',vertical_l_display_function)

function vertical_l_display_function(){
  const stylevertical_l = document.getElementById('Vertical_L_display_css')
  if(checkbox_vertical_l.checked){
    stylevertical_l.disabled = true;
  }else{
    stylevertical_l.disabled = false;
  }
}

  //--vertical_r---------------------------------------------------------------------------------------------------------------------------
const checkbox_vertical_r = document.getElementById('vertical_r_display')

checkbox_vertical_r.addEventListener('change',vertical_r_display_function)

function vertical_r_display_function(){
  const stylevertical_r = document.getElementById('Vertical_R_display_css')
  if(checkbox_vertical_r.checked){
    stylevertical_r.disabled = true;
  }else{
    stylevertical_r.disabled = false;
  }
}

  //--vertical---------------------------------------------------------------------------------------------------------------------------
const checkbox_vertical = document.getElementById('vertical_display')

checkbox_vertical.addEventListener('change',vertical_display_function)

function vertical_display_function(){
  const stylevertical = document.getElementById('Vertical_display_css')
  if(checkbox_vertical.checked){
    stylevertical.disabled = true;
  }else{
    stylevertical.disabled = false;
  }
}

  //--time---------------------------------------------------------------------------------------------------------------------------
const checkbox_time = document.getElementById('time_display')

checkbox_time.addEventListener('change',time_display_function)

function time_display_function(){
  const styletime = document.getElementById('Time_display_css')
  if(checkbox_time.checked){
    styletime.disabled = true;
  }else{
    styletime.disabled = false;
  }
}

  //--lv_iv---------------------------------------------------------------------------------------------------------------------------
const checkbox_lv_iv = document.getElementById('lv_iv_display')

checkbox_lv_iv.addEventListener('change',lv_iv_display_function)

function lv_iv_display_function(){
  const stylelv_iv = document.getElementById('LV_IV_display_css')
  if(checkbox_lv_iv.checked){
    stylelv_iv.disabled = true;
  }else{
    stylelv_iv.disabled = false;
  }
}

  //--chain_iv---------------------------------------------------------------------------------------------------------------------------
const checkbox_chain_iv = document.getElementById('chain_iv_display')

checkbox_chain_iv.addEventListener('change',chain_iv_display_function)

function chain_iv_display_function(){
  const stylechain_iv = document.getElementById('CHAIN_IV_display_css')
  if(checkbox_chain_iv.checked){
    stylechain_iv.disabled = true;
  }else{
    stylechain_iv.disabled = false;
  }
}

  //--chain_tov---------------------------------------------------------------------------------------------------------------------------
const checkbox_chain_tov = document.getElementById('chain_tov_display')

checkbox_chain_tov.addEventListener('change',chain_tov_display_function)

function chain_tov_display_function(){
  const stylechain_tov = document.getElementById('CHAIN_toV_display_css')
  if(checkbox_chain_tov.checked){
    stylechain_tov.disabled = true;
  }else{
    stylechain_tov.disabled = false;
  }
}

  //--lv_iii---------------------------------------------------------------------------------------------------------------------------
const checkbox_lv_iii = document.getElementById('lv_iii_display')

checkbox_lv_iii.addEventListener('change',lv_iii_display_function)

function lv_iii_display_function(){
  const stylelv_iii = document.getElementById('LV_III_display_css')
  if(checkbox_lv_iii.checked){
    stylelv_iii.disabled = true;
  }else{
    stylelv_iii.disabled = false;
  }
}

//data---------------------------------------------------------------------------------------------------------------------------
//--末尾にver,mainbpm,time実数値追加
const data = [
//  0                    1       2    3      4    5   6   7   8     9      10   11  12   13            14        15 16 17 18      19      20   21 22    23 24  25  26
  ["Ganymede kamome mix",170001,"Ⅰ","EXH17",1581,775,302,504,5487,"EXH17",1557,24,"200","kamome sano","PHQUASE",16,16,32,"01:58","EXH17",1557,0,"EXH15",1,200,118,17],
  ["Max Burning!!",170002,"Ⅰ","EXH17",2054,625,300,1129,5983,"EXH17",1947,107,"190","BlackY","PHQUASE",74,64,138,"02:00","EXH17",1944,3,"EXH15",1,190,120,17],
  ["The world of sound",170003,"Ⅰ","EXH17",1624,904,377,343,5960,"EXH17",1547,77,"210","Music by Ryuwitty,Vocal by Kuroa*","TEK-A-RHYTHM",11,14,25,"02:00","EXH17",1537,10,"EXH15",1,210,120,17],
  ["V.I.P.",170004,"Ⅰ","EXH17",1591,860,241,490,5762,"EXH17",1489,102,"169","ismK","TEK-A-RHYTHM",22,22,44,"01:57","EXH17",1486,3,"EXH15",1,169,117,17],
  ["金縛りの逢を",170005,"Ⅰ","EXH17",1839,898,382,559,6372,"EXH17",1749,90,"200","はるなば","TEK-A-RHYTHM",48,34,82,"02:00","EXH17",1749,0,"EXH15",1,200,120,17],
  ["大宇宙ステージ",170006,"Ⅰ","EXH17",1368,729,401,238,4923,"EXH17",1279,89,"202","黒魔","TEK-A-RHYTHM",29,33,62,"02:00","EXH17",1296,-17,"EXH15",1,202,120,17],
  ["AA BlackY mix",170007,"Ⅱ","INF17",1813,636,270,907,5534,"INF17",1668,145,"160","BlackY","MAD CHILD",34,35,69,"01:58","INF17",1668,0,"INF15",2,160,118,17],
  ["ALBIDA Powerless Mix",170008,"Ⅱ","INF17",1536,570,387,579,4782,"INF17",1444,92,"156","無力P","MAD CHILD",39,33,72,"01:46","INF17",1444,0,"INF15",2,156,106,17],
  ["Distorted Floor",170009,"Ⅱ","INF17",2083,565,547,971,5861,"INF17",1948,135,"95-180","RoughSketch","MAD CHILD Nightmare",62,53,115,"01:57","INF17",1948,0,"INF15",2,180,117,17],
  ["Dynasty",170010,"Ⅱ","INF17",1953,833,368,752,6405,"INF17",1865,88,"189","Yooh","Ether99",54,52,106,"01:56","INF17",1865,0,"INF15",2,189,116,17],
  ["good high school",170011,"Ⅱ","INF17",1700,322,292,1086,4366,"INF17",1664,36,"150","baker","MAD CHILD vs. Hirayasu Matsudo",16,14,30,"01:45","INF17",1664,0,"INF15",2,150,105,17],
  ["Gott",170012,"Ⅱ","INF17",2104,808,607,689,6632,"INF17",1961,143,"195","Hommarju","THE THIRD MAN",63,62,125,"01:58","INF17",1963,-2,"INF15",2,195,118,17],
  ["TYCOON",170013,"Ⅱ","INF17",1997,504,493,1000,5506,"INF17",1865,132,"170","SOUND HOLIC feat. Nana Takahashi","PHQUASE",77,70,147,"01:47","INF17",1866,-1,"INF15",2,170,107,17],
  ["ナイト・オブ・ナイツ",170014,"Ⅱ","INF17",1673,705,283,685,5461,"INF17",1627,46,"180","ビートまりお(COOL&CREATE)","ki4ki4",55,73,128,"01:53","INF17",1627,0,"INF15",2,180,113,17],
  ["天ノ弱",170015,"Ⅱ","INF17",1872,575,639,658,5469,"INF17",1681,191,"200-205","165 feat. GUMI","THE THIRD MAN",42,46,88,"01:50","INF17",1681,0,"INF15",2,200,110,17],
  ["過食性:アイドル症候群",170016,"Ⅱ","INF17",2209,812,495,902,6854,"INF17",2130,79,"200","スズム feat.GUMI & MAYU","絶食性:ユカしお症候群",56,49,105,"02:02","INF17",2130,0,"INF15",2,200,122,17],
  ["éclair au chocolat",170017,"Ⅲ","GRV17",1869,602,286,981,5544,"GRV17",1745,124,"182","kamome sano","しばまる子",52,55,107,"01:52","GRV17",1745,0,"GRV15",3,182,112,17],
  ["EGG",170018,"Ⅲ","GRV17",1909,687,500,722,5879,"GRV17",1755,154,"196","ginkiha","Ether99",44,47,91,"01:45","GRV17",1755,0,"GRV15",3,196,105,17],
  ["freaky freak",170019,"Ⅲ","GRV17",1538,1097,441,0,6367,"GRV17",1432,106,"145","kamome sano","TEK-A-RHYTHM",0,0,0,"01:55","GRV17",1432,0,"GRV15",3,145,115,17],
  ["カミサマネジマキ",170020,"Ⅲ","GRV17",1506,660,255,591,4992,"GRV17",1381,125,"284","kemu feat. GUMI","ki4ki4",44,52,96,"01:46","GRV17",1381,0,"GRV15",3,284,106,17],
  ["香港功夫大旋風",170021,"Ⅲ","GRV17",2211,623,337,1251,6291,"GRV17",2057,154,"178","Daisuke Ohnuma","SCライオット",128,101,229,"01:55","GRV17",2057,0,"GRV15",3,178,115,17],
  [".59 -BOOTH BOOST REMIX-",170022,"Ⅳ","HVN17",1329,634,249,446,4560,"HVN17",1259,70,"145","IDEA+RHYTHM","七色Method",47,44,91,"01:42","HVN17",1259,0,"-",4,145,102,17],
  ["cloud",170023,"Ⅳ","HVN17",1302,452,338,512,3960,"HVN17",1236,66,"143","EZFG","Bob Shimantogawa",35,33,68,"01:43","HVN17",1236,0,"-",4,143,103,17],
  ["Fire Strike",170024,"Ⅳ","HVN17",1766,725,443,598,5707,"HVN17",1566,200,"158","Junk","ビーフジョッキー",19,26,45,"02:00","HVN17",1566,0,"-",4,158,120,17],
  ["Space Diver Tama",170025,"Ⅳ","HVN17",1785,667,439,679,5571,"HVN17",1618,167,"170","黒魔","PHQUASE",17,11,28,"02:00","HVN17",1619,-1,"-",4,170,120,17],
  ["Wheel",170026,"Ⅳ","HVN17",1888,535,535,818,5381,"HVN17",1723,165,"136","Syrufit feat.綾倉盟 / 市松椿","七色Method",40,38,78,"02:07","HVN17",1723,0,"-",4,136,127,17],
  ["イカサマライフゲイム",170027,"Ⅳ","HVN17",1890,848,363,679,6324,"HVN17",1755,135,"200","kemu feat.GUMI","レッドホットスクリューズ",39,29,68,"02:01","HVN17",1755,0,"-",4,200,121,17],
  ["ケロ⑨destiny",170028,"Ⅳ","HVN17",2039,662,537,840,6064,"HVN17",1835,204,"172","Silver Forest feat.めらみぽっぷ","レッドホットスクリューズ",47,50,97,"02:05","HVN17",1835,0,"-",4,172,125,17],
  ["サヨナラ・ヘヴン （かめりあ's NEKOMATAelectroRMX）",170029,"Ⅳ","HVN17",2042,630,500,912,5974,"HVN17",1988,54,"150","かめりあ","浮世マシーン",74,67,141,"01:58","HVN17",1988,0,"-",4,150,118,17],
  ["セツナトリップ",170030,"Ⅳ","HVN17",1598,658,520,420,5170,"HVN17",1381,217,"145","Last Note. feat. GUMI","PHQUASE",57,44,101,"01:59","HVN17",1381,0,"-",4,145,119,17],
  ["十面相",170031,"V","VVD17",1536,488,527,521,4536,"VVD17",1285,251,"173","YM feat.GUMI","コーヒーブレイカー",51,52,103,"01:42","-","-","-","-","-",173,102,17],
  ["人生リセットボタン",170032,"V","VVD17",1908,706,650,552,5934,"VVD17",1708,200,"200","kemu feat. GUMI","ビーフジョッキー",33,39,72,"01:56","-","-","-","-","-",200,116,17],
  ["BabeL ～Next Story～",170033,"Ⅱ","EXH17",2016,814,572,630,6474,"EXH17",1837,179,"100-173","Power Of Nature","TEK-A-リ☆chan",48,53,101,"02:08","EXH17",1814,23,"EXH15",2,173,128,17],
  ["Booths of Fighters",170034,"Ⅱ","EXH17",2140,652,641,847,6236,"EXH17",2021,119,"155-225","RoughSketch +DD\"ナカタ\"Metal","MAD CHILD",32,30,62,"01:56","EXH17",2019,2,"EXH15",2,225,116,17],
  ["CODE -CRiMSON-",170035,"Ⅱ","EXH17",2204,851,344,1009,6961,"EXH17",2081,123,"167","Shiron","TEK-A-RHYTHM × 逆球レジェンド",57,49,106,"02:01","EXH17",2081,0,"EXH15",2,167,121,17],
  ["DEADLOCK XXX",170036,"Ⅱ","EXH17",2082,667,361,1054,6165,"EXH17",1934,148,"222","BlackY","月刊ミズタニ",31,30,61,"01:34","EXH17",1944,-10,"EXH15",2,222,94,17],
  ["Decretum",170037,"Ⅱ","EXH17",1978,866,496,616,6554,"EXH17",1806,172,"98-197","Project Mayhem","レッドホットスクリューズ",52,35,87,"02:00","EXH17",1793,13,"EXH15",2,197,120,17],
  ["#FairyJoke #SDVX_Edit",170038,"Ⅱ","EXH17",2260,76,124,2060,4748,"EXH17",1988,272,"160","uno(IOSYS)","Hirayasu Matsudo",104,94,198,"01:59","EXH17",1988,0,"EXH15",2,160,119,17],
  ["Fiat Lux",170039,"Ⅱ","EXH17",2364,768,940,656,7032,"EXH17",2266,98,"200","xi","Ether99",53,56,109,"01:59","EXH17",2266,0,"EXH15",2,200,119,17],
  ["FIRE FIRE -DARK BLAZE REMIX-",170040,"Ⅱ","EXH17",1927,799,488,640,6251,"EXH17",1733,194,"177","Yooh","月刊ミズタニ",67,66,133,"01:57","EXH17",1733,0,"EXH15",2,177,117,17],
  ["FLYING OUT TO THE SKY",170041,"Ⅱ","EXH17",2031,814,482,735,6504,"EXH17",1885,146,"244","かめりあ","PHQUASE",47,43,90,"01:59","EXH17",1885,0,"EXH15",2,244,119,17],
  ["gigadelic -stance xxxx-",170042,"Ⅱ","EXH17",1604,869,276,459,5815,"EXH17",1513,91,"199","Hate","TEK-A-RHYTHM",11,22,33,"01:51","EXH17",1513,0,"EXH15",2,199,111,17],
  ["HAELEQUIN",170043,"Ⅱ","EXH17",1815,684,541,590,5682,"EXH17",1737,78,"172","orangentle / Yu_Asahina","レッドホットスクリューズ",46,47,93,"01:56","EXH17",1721,16,"EXH15",2,172,116,17],
  ["Harpuia",170044,"Ⅱ","EXH17",1807,693,413,701,5693,"EXH17",1707,100,"93-186","BlackY","レッドホットスクリューズ×PHQUASE",55,32,87,"01:54","EXH17",1707,0,"EXH15",2,186,114,17],
  ["Hellfire",170045,"Ⅱ","EXH17",2064,715,225,1124,6273,"EXH17",2015,49,"176","Hommarju","月刊ミズタニ",86,92,178,"01:59","EXH17",2005,10,"EXH15",2,176,119,17],
  ["HYENA",170046,"Ⅱ","EXH17",2094,510,609,975,5718,"EXH17",1955,139,"178","Hommarju","ねちっこく堂",139,154,293,"02:00","EXH17",1944,11,"EXH15",2,178,120,17],
  ["Idola",170047,"Ⅱ","EXH17",2676,760,765,1151,7632,"EXH17",2505,171,"201","iconoclasm feat.GUMI","PHQUASE vs. FUKASE",24,30,54,"02:10","EXH17",2505,0,"EXH15",2,201,130,17],
  ["Innocent Tempest",170048,"Ⅱ","EXH17",2344,701,551,1092,6791,"EXH17",2266,78,"180","Diceros Bicornis","PHQUASE",80,80,160,"01:59","EXH17",2266,0,"EXH15",2,180,119,17],
  ["IX",170049,"Ⅱ","EXH17",2401,791,768,842,7175,"EXH17",2248,153,"198","dj TAKA VS DJ TOTTO feat.藍","月刊ミズタッチ",51,55,106,"02:00","EXH17",2249,-1,"EXH15",2,198,120,17],
  ["Joyeuse",170050,"Ⅱ","EXH17",1317,711,204,402,4767,"EXH17",1249,68,"260-274","ke-ji","Ether99",21,24,45,"01:40","EXH17",1240,9,"EXH15",2,274,100,17],
  ["KiLLeR MeRMaiD",170051,"Ⅱ","EXH17",1921,758,440,723,6116,"EXH17",1768,153,"440","QURELESS","Ether99",60,46,106,"01:56","EXH17",1768,0,"EXH15",2,440,116,17],
  ["Last Concerto",170052,"Ⅱ","EXH17",1586,628,290,668,5056,"EXH17",1467,119,"220","ke-ji","Ether99",38,37,75,"01:42","EXH17",1461,6,"EXH15",2,220,102,17],
  ["Little princess has no identity.",170053,"Ⅱ","EXH17",1992,707,499,786,6105,"EXH17",1854,138,"185","0kash","Megacycle",37,34,71,"01:59","EXH17",1854,0,"EXH15",2,185,119,17],
  ["Mist In Hell",170054,"Ⅱ","EXH17",1943,546,442,955,5524,"EXH17",1833,110,"225","LUNA","レッドホットスクリューズ",61,56,117,"01:50","EXH17",1833,0,"EXH15",2,225,110,17],
  ["Our Faith (Faithful MTL Remix)",170055,"Ⅱ","EXH17",2301,729,1000,572,6789,"EXH17",2154,147,"185","DOUBLE HELIX","しばまる子 vs. TEK-A-RHYTHM",21,18,39,"01:59","EXH17",2154,0,"EXH15",2,185,119,17],
  ["Pure Evil",170056,"Ⅱ","EXH17",1759,651,468,640,5471,"EXH17",1603,156,"190","kors k","PHQUASE",46,37,83,"01:54","EXH17",1604,-1,"EXH15",2,190,114,17],
  ["Pure Evil-Aya2g Drm'n Tech Rmx-",170057,"Ⅱ","EXH17",1734,832,334,568,5964,"EXH17",1697,37,"190","Ayatsugu_Otowa","TAKUYA",91,77,168,"01:56","EXH17",1698,-1,"EXH15",2,190,116,17],
  ["Quietus Ray",170058,"Ⅱ","EXH17",2311,692,603,1016,6698,"EXH17",2229,82,"200","xi","Ether99",69,52,121,"02:00","EXH17",2228,1,"EXH15",2,200,120,17],
  ["Sakura Mirage",170059,"Ⅱ","EXH17",1663,814,334,515,5768,"EXH17",1580,83,"187","Ryu☆","Sammy/A rejected by 赤バステルくん",60,30,90,"01:45","EXH17",1580,0,"EXH15",2,187,105,17],
  ["snow storm -euphoria-",170060,"Ⅱ","EXH17",2184,890,348,946,7038,"EXH17",2122,62,"89-180","Yooh","TEK-A-RHYTHM",41,24,65,"02:01","EXH17",2122,0,"EXH15",2,180,121,17],
  ["True Blue",170061,"Ⅱ","EXH17",1890,752,583,555,6036,"EXH17",1810,80,"164","dj TAKA feat.AiMEE","PHQUASE",30,25,55,"02:03","EXH17",1768,42,"EXH15",2,164,123,17],
  ["U.N.オーエンは彼女なのか？ haru_naba Remix",170062,"Ⅱ","EXH17",1842,782,415,645,6030,"EXH17",1755,87,"140-200","はるなば","PHQUASE",74,60,134,"02:01","EXH17",1755,0,"EXH15",2,200,121,17],
  ["Verse IV",170063,"Ⅱ","EXH17",1999,956,499,544,6866,"EXH17",1868,131,"212","ZOGRAPHOS (Yu_Asahina+Yamajet)","レッドホットスクリューズ",15,12,27,"02:02","EXH17",1869,-1,"EXH15",2,212,122,17],
  ["Wish upon Twin Stars",170064,"Ⅱ","EXH17",2112,689,487,936,6291,"EXH17",2011,101,"200","xi","浮世マシーン",56,56,112,"01:59","EXH17",2011,0,"EXH15",2,200,119,17],
  ["XROSS INFECTION",170065,"Ⅱ","EXH17",2101,636,416,1049,6110,"EXH17",1976,125,"194","BlackY vs. Yooh","PHQUASE vs. FUKASE",67,58,125,"01:58","EXH17",1955,21,"EXH15",2,194,118,17],
  ["イゴモヨス＝オムルのテーマによるブヨブヨ・スケッチの試み",170066,"Ⅱ","EXH17",1865,855,495,515,6295,"EXH17",1780,85,"200","日本楽音ノイズ協会","レッドホットスクリューズ",32,33,65,"01:58","EXH17",1780,0,"EXH15",2,200,118,17],
  ["バンブーソード・ガール",170067,"Ⅱ","EXH17",2133,726,429,978,6444,"EXH17",2010,123,"208","cosMo@暴走P","PHQUASE ver.1.5",87,81,168,"01:53","EXH17",2011,-1,"EXH15",2,208,113,17],
  ["ボルテ体操第一",170068,"Ⅱ","EXH17",1561,716,321,524,5270,"EXH17",1452,109,"175-200","Kaoru feat.FG75","Megacycle",49,42,91,"01:58","EXH16",1452,0,"EXH15",2,200,118,17],
  ["ムーニャポヨポヨスッポコニャーゴ",170069,"Ⅱ","EXH17",1594,926,145,523,5966,"EXH17",1539,55,"180","全日本スッポコニャーゴ親衛隊","博多の男",25,25,50,"01:56","EXH17",1539,0,"EXH15",2,180,116,17],
  ["朱と碧のランページ",170070,"Ⅱ","EXH17",1988,557,623,808,5647,"EXH17",1819,169,"178","NU-KO","Antonio Guccini",55,71,126,"02:06","EXH17",1819,0,"EXH15",2,178,126,17],
  ["悪性ロリィタマキャヴェリズム",170071,"Ⅱ","EXH17",1616,752,315,549,5488,"EXH17",1530,86,"280","かいりきベア","Megacycle",60,66,126,"02:04","EXH17",1532,-2,"EXH15",2,280,124,17],
  ["音楽 -resolve-",170072,"Ⅱ","EXH17",1737,661,416,660,5457,"EXH17",1632,105,"114-220","Yu_Asahina","PHQUASE",49,48,97,"02:06","EXH17",1635,-3,"EXH15",2,165,126,17],
  ["音楽 -壊音楽 mix-",170073,"Ⅱ","EXH17",1507,422,334,751,4280,"EXH17",1379,128,"270-420","LeaF","Megacycle & MAD CHILD",63,70,133,"01:54","EXH17",1368,11,"EXH15",2,270,114,17],
  ["少女暴動",170074,"Ⅱ","EXH17",1810,759,445,606,5897,"EXH17",1761,49,"300","Last Note.","azuma",50,46,96,"02:00","EXH17",1761,0,"EXH15",2,300,120,17],
  ["信仰は儚き人間の為に ～ Arr.Demetori",170075,"Ⅱ","EXH17",2195,730,519,946,6580,"EXH17",2019,176,"220","Demetori","逆球レジェンド",34,37,71,"01:49","EXH17",2019,0,"EXH15",2,220,109,17],
  ["超越してしまった彼女と其を生み落した理由",170076,"Ⅱ","EXH17",1967,755,512,700,6199,"EXH17",1842,125,"178","Ayatsugu_Otowa","TEK-A-RHYTHM",66,52,118,"01:56","EXH17",1838,4,"EXH15",2,178,116,17],
  ["轟け！恋のビーンボール！！",170077,"Ⅱ","EXH17",1795,600,471,724,5390,"EXH17",1594,201,"180","ダイナミック野球兄弟 v.s. クロスファイヤーPrim","がんばれ!!ミズしおくん",80,90,170,"01:51","EXH17",1594,0,"EXH15",2,180,111,17],
  ["柳の下のデュラハン hard chaos mix",170078,"Ⅱ","EXH17",2146,618,344,1184,6146,"EXH17",2031,115,"220","albel.","Megacycle",98,86,184,"01:52","EXH17",2031,0,"EXH15",2,220,112,17],
  ["御千手メディテーション",170079,"Ⅱ","INF17",1810,724,565,521,5792,"INF17",1596,214,"150-190","昇天家族","MAD CHILD",41,41,82,"02:00","INF17",1596,0,"INF15",2,190,120,17],
  ["患部で止まってすぐ溶ける  ～ 狂気の優曇華院",170080,"Ⅱ","INF17",2182,713,557,912,6503,"INF17",1951,231,"200","ARM(IOSYS)","狂気のふかせ",53,30,83,"02:12","INF16",1951,0,"INF15",2,200,132,17],
  ["打打打打打打打打打打",170081,"Ⅱ","INF17",1850,763,102,985,5989,"INF17",1759,91,"156","ヒゲドライバー join. SELEN","SHOUTICE",45,43,88,"01:44","INF17",1759,0,"INF15",2,156,104,17],
  ["Appliqué",170082,"Ⅲ","GRV17",2724,588,787,1349,7212,"GRV17",2481,243,"224","モリモリあつし","Megacycle",60,58,118,"02:00","GRV17",2481,0,"GRV15",3,224,120,17],
  ["choux à la crème",170083,"Ⅲ","GRV17",2114,653,654,807,6187,"GRV17",1894,220,"192","kamome sano","ビーフジョッキー",76,78,154,"02:01","GRV17",1894,0,"GRV15",3,192,121,17],
  ["Double Universe",170084,"Ⅲ","GRV17",2016,758,529,729,6306,"GRV17",1915,101,"180","Hommarju vs P*Light","ビーフジョッキー",86,67,153,"01:58","GRV17",1915,0,"GRV15",3,180,118,17],
  ["Erlung",170085,"Ⅲ","GRV17",1827,550,651,626,5304,"GRV17",1621,206,"140","削除","Ether99",19,23,42,"02:02","GRV17",1621,0,"GRV15",3,140,122,17],
  ["INFINITY OVERDRIVE",170086,"Ⅲ","GRV17",1709,676,440,593,5446,"GRV17",1554,155,"185","DecisionS(kanone + nora2r)","MADしばまるCHILD",37,35,72,"01:58","GRV17",1554,0,"GRV15",3,185,118,17],
  ["Last Battalion",170087,"Ⅲ","GRV17",2209,612,610,987,6254,"GRV17",2016,193,"185","ETIA.","レッドホットスクリューズ",35,32,67,"01:56","GRV17",2016,0,"GRV15",3,185,116,17],
  ["LittleGameStar",170088,"Ⅲ","GRV17",2397,725,419,1253,6969,"GRV17",2204,193,"215","An","風瑠人",30,32,62,"01:59","GRV17",2204,0,"GRV15",3,215,119,17],
  ["odds and ends",170089,"Ⅲ","GRV17",1767,541,535,691,5157,"GRV17",1620,147,"264","MarcheИ","Megacycle",50,78,128,"01:59","GRV17",1620,0,"GRV15",3,264,119,17],
  ["ウバワレ",170090,"Ⅲ","GRV17",1891,613,668,610,5621,"GRV17",1725,166,"190","TAKU1175","レッドホットスクリューズ",48,39,87,"01:48","GRV17",1724,1,"GRV15",3,190,108,17],
  ["少年は空を辿る Prog Piano Remix",170091,"Ⅲ","GRV17",1712,1003,184,525,6433,"GRV17",1644,68,"140","とろまる","Megaまる子",26,25,51,"01:58","GRV17",1647,-3,"GRV15",3,140,118,17],
  ["雪女",170092,"Ⅲ","GRV17",2295,683,591,1021,6639,"GRV17",2111,184,"200","かねこちはる","Megacyclone",32,39,71,"01:58","GRV17",2111,0,"GRV15",3,200,118,17],
  ["Hoshizora Illumination",170093,"Ⅳ","HVN17",2416,683,828,905,6881,"HVN17",2240,176,"210","you","ビーフジョッキー",57,55,112,"02:00","HVN17",2240,0,"-",4,210,120,17],
  ["take a step forward",170094,"Ⅳ","HVN17",2106,782,605,719,6558,"HVN17",1889,217,"190","uma","ダークダークダーク",23,11,34,"01:59","HVN17",1892,-3,"-",4,190,119,17],
  ["幻想系世界修復少女",170095,"Ⅳ","HVN17",1875,508,425,942,5274,"HVN17",1731,144,"193","Last Note.","浮世マシーン",66,64,130,"01:40","HVN17",1731,0,"-",4,193,100,17],
  ["竹取飛翔",170096,"Ⅳ","HVN17",1945,712,597,636,6026,"HVN17",1774,171,"156","岸田教団＆THE明星ロケッツ","THE THIRD MAN",35,33,68,"02:04","HVN17",1774,0,"-",4,156,124,17],
  ["放課後ストライド",170097,"Ⅳ","HVN17",2892,543,698,1651,7413,"HVN17",2698,194,"225","Last Notes.","NOX",94,98,192,"02:01","HVN17",2698,0,"-",4,225,121,17],
  ["０=Xerostrumental=",170098,"Ⅲ","EXH17",1742,779,270,693,5821,"EXH17",1650,92,"168","cosMo@暴走P","cosMo@暴走P",38,37,75,"01:58","EXH17",1649,1,"EXH15",3,168,118,17],
  ["2 MINUTES FIGHTERS",170099,"Ⅲ","EXH17",2061,821,440,800,6585,"EXH17",1933,128,"203","P*Light","月刊♦マシーン",94,99,193,"02:02","EXH17",1933,0,"EXH15",3,203,122,17],
  ["akasha-assembly",170100,"Ⅲ","EXH17",1699,599,307,793,5195,"EXH17",1603,96,"153","溝口ゆうま from セブンスヘブンAmmy's","Megacycle",63,67,130,"02:05","EXH17",1603,0,"EXH15",3,153,125,17],
  ["{albus}",170101,"Ⅲ","EXH17",2208,662,393,1153,6402,"EXH17",2010,198,"198","かめりあ","風瑠人",76,64,140,"01:59","EXH17",2010,0,"EXH15",3,198,119,17],
  ["Aliquam",170102,"Ⅲ","EXH17",1721,562,529,630,5128,"EXH17",1555,166,"70-158","たちのん","凹ーダー凸ード",47,41,88,"01:58","EXH17",1555,0,"EXH15",3,158,118,17],
  ["ANTI THE∞HOLiC",170103,"Ⅲ","EXH17",1947,652,453,842,5850,"EXH17",1815,132,"170","GAiA×cosMo@暴走P","cosMo@暴走P",47,50,97,"01:59","EXH17",1814,1,"EXH15",3,170,119,17],
  ["Apex of the World",170104,"Ⅲ","EXH17",1605,672,416,517,5226,"EXH17",1497,108,"169","uma&hurirai feat.ましろ","レッドホットスクリューズ",46,53,99,"01:59","EXH17",1497,0,"EXH15",3,169,119,17],
  ["AYAKASHI",170105,"Ⅲ","EXH17",2497,417,199,1881,6245,"EXH17",2427,70,"140","Hommarju","ねちっこく堂",133,139,272,"02:01","EXH17",2427,0,"EXH15",3,140,121,17],
  ["B.B.K.K.B.K.K.",170106,"Ⅲ","EXH17",2024,363,400,1261,5137,"EXH17",1804,220,"170","nora2r","M.M.M.M.M.M.M.",79,81,160,"02:06","EXH17",1804,0,"EXH15",3,170,126,17],
  ["Backflow",170107,"Ⅲ","EXH17",1627,534,523,570,4856,"EXH17",1390,237,"145","lapix","MAD CHILD",63,61,124,"02:01","EXH17",1390,0,"EXH15",3,145,121,17],
  ["BEAT-NEW-WORLD",170108,"Ⅲ","EXH17",2186,700,488,998,6472,"EXH17",2066,120,"190","ビートまりお（COOL&CREATE)","SCバイオメトリクス",64,74,138,"01:58","EXH17",2066,0,"EXH15",3,190,118,17],
  ["Borealis",170109,"Ⅲ","EXH17",1999,819,230,950,6455,"EXH17",1941,58,"196","ginkiha","SCバイオメトリクス",21,22,43,"01:54","EXH17",1941,0,"EXH15",3,196,114,17],
  ["Candy Colored Hearts",170110,"Ⅲ","EXH17",1976,825,420,731,6427,"EXH17",1828,148,"193","はるなば","風瑠人",71,70,141,"02:01","EXH17",1828,0,"EXH15",3,193,121,17],
  ["CENSORED!!",170111,"Ⅲ","EXH17",2020,600,508,912,5840,"EXH17",1828,192,"195","t+pazolite","PHQUASE",86,87,173,"01:53","EXH17",1826,2,"EXH15",3,195,113,17],
  ["Chant du Cygne",170112,"Ⅲ","EXH17",2250,631,1039,580,6393,"EXH17",2151,99,"140-190","ke-ji","Ether99",13,13,26,"02:01","EXH17",2151,0,"EXH15",3,190,121,17],
  ["Clash of swords",170113,"Ⅲ","EXH17",2094,784,449,861,6540,"EXH17",1913,181,"229","Noah","TEK-A-RHYTHM",55,56,111,"01:57","EXH17",1913,0,"EXH15",3,229,117,17],
  ["conflict",170114,"Ⅲ","EXH17",2243,684,586,973,6538,"EXH17",1979,264,"160","siromaru + cranky","MAD CHILD + Megacycle",55,54,109,"02:07","EXH17",1979,0,"EXH15",3,160,127,17],
  ["continew",170115,"Ⅲ","EXH17",1925,407,873,645,5071,"EXH17",1771,154,"64-256","Verdammt","Ether99",46,48,94,"02:00","EXH17",1771,0,"EXH15",3,160,120,17],
  ["CRITICAL LINE",170116,"Ⅲ","EXH17",1732,597,112,1023,5255,"EXH17",1648,84,"128","Ryu☆ feat. kradness","Hermit♣club",65,67,132,"01:57","EXH17",1648,0,"EXH15",3,128,117,17],
  ["cross the future",170117,"Ⅲ","EXH17",1955,542,290,1123,5536,"EXH17",1777,178,"179","uma","東京ブルトゥーム",61,58,119,"01:59","EXH17",1777,0,"EXH15",3,179,119,17],
  ["CUTIE☆EX-DREAM",170118,"Ⅲ","EXH17",1929,786,453,690,6216,"EXH17",1785,144,"188","BlackY","ビーフジョッキー",40,36,76,"02:00","EXH17",1785,0,"EXH15",3,188,120,17],
  ["Deadly Dolly Dance",170119,"Ⅲ","EXH17",1485,715,287,483,5115,"EXH17",1368,117,"160","Shiron","Megacycle",78,80,158,"02:01","EXH17",1368,0,"EXH15",3,160,121,17],
  ["DIABLOSIS::Nāga",170120,"Ⅲ","EXH17",2297,420,290,1587,5854,"EXH17",2052,245,"200","sky_delta","月刊風瑠タニ",81,82,163,"01:55","EXH17",2052,0,"EXH15",3,200,115,17],
  ["Discloze",170121,"Ⅲ","EXH17",2121,645,241,1235,6177,"EXH17",1971,150,"128-145","lapix","月刊ミズタニ",61,71,132,"02:01","EXH17",1971,0,"EXH15",3,145,121,17],
  ["Dualive",170122,"Ⅲ","EXH17",2212,723,476,1013,6593,"EXH17",2052,160,"190","Quarks(kradness×Camellia)","POT-E-RHYTHM",83,82,165,"02:07","EXH17",2053,-1,"EXH15",3,190,127,17],
  ["EBONY & IVORY",170123,"Ⅲ","EXH17",1438,657,335,446,4847,"EXH17",1363,75,"113-170","OSTER project","SCバイオメトリクスR",36,31,67,"01:42","EXH17",1363,0,"EXH15",3,170,102,17],
  ["ΕΛΠΙΣ",170124,"Ⅲ","EXH17",1976,810,382,784,6382,"EXH17",1849,127,"175","dj TAKA","Yu-tomo",47,44,91,"02:04","EXH17",1849,0,"EXH15",3,175,124,17],
  ["Emperor's Divide",170125,"Ⅲ","EXH17",2238,767,770,701,6777,"EXH17",1999,239,"220","にゃそ","凹ーダー凸ード",35,33,68,"01:55","EXH17",1999,0,"EXH15",3,220,115,17],
  ["Enigma",170126,"Ⅲ","EXH17",1909,881,409,619,6461,"EXH17",1739,170,"198","とろまる","Megacycle",72,71,143,"02:00","EXH17",1739,0,"EXH15",3,198,120,17],
  ["Everlasting Message",170127,"Ⅲ","EXH17",2249,719,564,966,6655,"EXH17",2102,147,"230","ぺのれり","PHQUASE forever",75,59,134,"01:57","EXH17",2102,0,"EXH15",3,230,117,17],
  ["F.K.S.",170128,"Ⅲ","EXH17",1664,681,423,560,5371,"EXH17",1519,145,"185","Nizikawa","PHQUASE",48,42,90,"01:48","EXH17",1519,0,"EXH15",3,185,108,17],
  ["False Cross",170129,"Ⅲ","EXH17",1922,829,351,742,6331,"EXH17",1779,143,"162","BlackY","月刊ミズタニ × Hermit♣club",49,46,95,"02:00","EXH17",1683,96,"EXH15",3,162,120,17],
  ["FIRE FIRE(Kazmasa Remix)",170130,"Ⅲ","EXH17",2208,673,363,1172,6435,"EXH17",2065,143,"190","Kazmasa","ねちマシーン",80,86,166,"02:01","EXH17",2068,-3,"EXH15",3,190,121,17],
  ["Follow Up",170131,"Ⅲ","EXH17",1868,670,319,879,5746,"EXH17",1608,260,"175","あるふぁ","月刊ミズタニ",38,35,73,"02:00","EXH17",1611,-3,"EXH15",3,175,120,17],
  ["Garakuta Doll Play",170132,"Ⅲ","EXH17",1866,696,379,791,5820,"EXH17",1594,272,"256","t+pazolite 「maimai」より","浮世マイーン",76,77,153,"02:05","EXH17",1594,0,"EXH15",3,256,125,17],
  ["gigadelic(m3rkAb4# R3m!x)",170133,"Ⅲ","EXH17",2029,780,377,872,6398,"EXH17",1936,93,"180-916","ikaruga_nex","月刊ミズタニ",34,28,62,"02:00","EXH17",1416,520,"EXH15",3,180,120,17],
  ["Got more raves？",170134,"Ⅲ","EXH17",1621,782,409,430,5588,"EXH17",1516,105,"266","E.G.G.「グルーヴコースター」より","七色Method",46,44,90,"02:03","EXH17",1516,0,"EXH15",3,266,123,17],
  ["Halcyon",170135,"Ⅲ","EXH17",2174,676,899,599,6376,"EXH17",2014,160,"40-191","xi","Ether99",29,27,56,"02:04","EXH17",2014,0,"EXH15",3,191,124,17],
  ["Happy Sensation",170136,"Ⅲ","EXH17",2193,566,557,1070,6084,"EXH17",2078,115,"180","IckPo","東京ブルトゥーム",39,34,73,"01:58","EXH17",2078,0,"EXH15",3,180,118,17],
  ["Help me, ERINNNNNN!! -Cranky remix-",170137,"Ⅲ","EXH17",1976,676,643,657,5980,"EXH17",1807,169,"180","ビートまりお × Cranky","七色Method",72,60,132,"02:03","EXH17",1807,0,"EXH15",3,180,123,17],
  ["Innocent Floor",170138,"Ⅲ","EXH17",2083,703,350,1030,6275,"EXH17",1981,102,"199","P*Light","SCバイオメトリクス",90,94,184,"01:55","EXH17",1981,0,"EXH15",3,199,115,17],
  ["JOMANDA",170139,"Ⅲ","EXH17",2180,672,601,907,6376,"EXH17",1988,192,"90-300","DJ YOSHITAKA","†PHQUASE†",51,35,86,"02:10","EXH17",1987,1,"EXH15",3,195,130,17],
  ["KAC 2012 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX- ",170140,"Ⅲ","EXH17",2372,895,360,1117,7429,"EXH17",2340,32,"200","FLOOR LEGENDS -KAC 2012-","SOUND VOLTEX Effectors",62,57,119,"02:29","EXH17",2340,0,"EXH15",3,200,149,17],
  ["Lord=Crossight",170141,"Ⅲ","EXH17",1826,705,621,500,5767,"EXH17",1707,119,"154","ぺのれり","PHQUASE the Exceed",45,52,97,"02:03","EXH17",1707,0,"EXH15",3,154,123,17],
  ["Lucky*Clover",170142,"Ⅲ","EXH17",1986,696,543,747,6060,"EXH17",1860,126,"200","Shiron＋こふ×モリモリあつしと提供でお送りします。","ユカリ♣ポテト",62,60,122,"01:58","EXH17",1860,0,"EXH15",3,200,118,17],
  ["Mayohiga Spurt",170143,"Ⅲ","EXH17",2088,744,519,825,6408,"EXH17",1876,212,"192","さわわ","Ether99",52,40,92,"02:01","EXH17",1876,0,"EXH15",3,192,121,17],
  ["Metamorphobia",170144,"Ⅲ","EXH17",1745,795,424,526,5875,"EXH17",1653,92,"160","winddrums","Megacycle",49,50,99,"01:58","EXH17",1653,0,"EXH15",3,160,118,17],
  ["NEON WORLD",170145,"Ⅲ","EXH17",2162,879,544,739,6961,"EXH17",2026,136,"154-164","SOUND HOLIC feat. Nana Takahashi","スカイシュート",75,59,134,"02:15","EXH17",2026,0,"EXH15",3,164,135,17],
  ["Never Fails",170146,"Ⅲ","EXH17",1934,742,400,792,6094,"EXH17",1814,120,"151","lapix","風瑠マシーン",51,57,108,"02:00","EXH17",1814,0,"EXH15",3,151,120,17],
  ["Nofram",170147,"Ⅲ","EXH17",1980,619,478,883,5817,"EXH17",1857,123,"132","unatra","風瑠人",89,92,181,"01:47","EXH17",1857,0,"EXH15",3,132,107,17],
  ["Opium and Purple haze",170148,"Ⅲ","EXH17",1453,734,597,122,5108,"EXH17",1314,139,"165","D.watt(OTAKU-ELITE Recordings)","Hiroyasu Matsuda",11,12,23,"01:49","EXH17",1318,-4,"EXH15",3,165,109,17],
  ["Paradission",170149,"Ⅲ","EXH17",1738,774,400,564,5798,"EXH17",1628,110,"154","BlackY","PHQUASE",45,60,105,"02:00","EXH17",1628,0,"EXH15",3,154,120,17],
  ["Parousia",170150,"Ⅲ","EXH17",2279,683,960,636,6607,"EXH17",2067,212,"158","xi","Ether99",29,33,62,"02:14","EXH17",2067,0,"EXH15",3,158,134,17],
  ["Pet Peeve",170151,"Ⅲ","EXH17",1806,180,94,1532,4152,"EXH17",1673,133,"140","Hirayasu Matsudo","Hirayasu Matsudo",83,79,162,"01:58","EXH17",1674,-1,"EXH15",3,140,118,17],
  ["Pieces of a Dream",170152,"Ⅲ","EXH17",1947,837,519,591,6405,"EXH17",1789,158,"202","uma vs. モリモリあつし","レッドホットスクリューズ",35,31,66,"02:00","EXH17",1789,0,"EXH15",3,202,120,17],
  ["Pure Evil (Kobaryo FTN-Remix)",170153,"Ⅲ","EXH17",1746,994,184,568,6474,"EXH17",1637,109,"380","Kobaryo","月刊ミズタニ",38,39,77,"01:55","EXH17",1636,1,"EXH15",3,380,115,17],
  ["REGALIA",170154,"Ⅲ","EXH17",2801,590,1125,1086,7372,"EXH17",2575,226,"222","Riz","Megacycle",63,61,124,"01:56","EXH17",2575,0,"EXH15",3,222,116,17],
  ["Rubeus",170155,"Ⅲ","EXH17",1835,699,408,728,5767,"EXH17",1681,154,"200","RedMuffleR","月刊ミズタニ × 博多の男",63,65,128,"01:52","EXH17",1681,0,"EXH15",3,200,112,17],
  ["S1CK_F41RY",170156,"Ⅲ","EXH17",1972,493,358,1121,5423,"EXH17",1717,255,"177","HOUJIROU","ブルーコールドハリケーンズ",113,105,218,"02:00","EXH17",1717,0,"EXH15",3,177,120,17],
  ["Shanghai Wu Long ～上海舞龍～",170157,"Ⅲ","EXH17",1841,821,282,738,6145,"EXH17",1636,205,"171","Hommarju","風瑠人",25,31,56,"01:56","EXH17",1636,0,"EXH15",3,171,116,17],
  ["Stleq",170158,"Ⅲ","EXH17",2180,768,752,660,6664,"EXH17",2026,154,"200","ぬゆり","レッドホットスクリューズ♠TEK-A-RHYTHM",40,40,80,"01:58","EXH17",2026,0,"EXH15",3,200,118,17],
  ["The End of War",170159,"Ⅲ","EXH17",1983,821,522,640,6429,"EXH17",1844,139,"194","たちのん as Project Mayhem","ダークダークダーク",58,74,132,"01:55","EXH17",1844,0,"EXH15",3,194,115,17],
  ["The Sampling Paradise (P*Light Remix)",170160,"Ⅲ","EXH17",1674,538,435,701,4962,"EXH17",1569,105,"181","P*Light","IIDXで九段受かれないSCバイオメトリクス",62,64,126,"01:47","EXH17",1569,0,"EXH15",3,181,107,17],
  ["The setting sun",170161,"Ⅲ","EXH17",1852,152,140,1560,4160,"EXH17",1468,384,"140","DJ YASETAKA","Hirayasu Matsudo",46,48,94,"01:56","EXH17",1469,-1,"EXH15",3,140,116,17],
  ["The star in eclipse",170162,"Ⅲ","EXH17",2444,666,871,907,6886,"EXH17",2191,253,"220","しーけー","MAD CHILD MOONLiGHT",26,29,55,"01:53","EXH17",2191,0,"EXH15",3,220,113,17],
  ["THUNDERCRACK",170163,"Ⅲ","EXH17",1898,560,748,590,5476,"EXH17",1705,193,"190","IRON ATTACK!","TEK-A-RHYTHM",39,56,95,"01:56","EXH17",1706,-1,"EXH15",3,190,116,17],
  ["TIEFSEE",170164,"Ⅲ","EXH17",2208,848,555,805,6960,"EXH17",2028,180,"165","SOUND HOLIC Vs. dj TAKA feat. YURiCa","MAK-O-RHYTHM",37,29,66,"02:15","EXH17",2027,1,"EXH15",3,165,135,17],
  ["Time to Air -Fly High Remix-",170165,"Ⅲ","EXH17",2027,884,422,721,6706,"EXH17",1944,83,"202","xi","MAD CHILD",67,65,132,"01:56","EXH17",1944,0,"EXH15",3,202,116,17],
  ["TOXIC VIBRATION",170166,"Ⅲ","EXH17",1948,767,441,740,6197,"EXH17",1873,75,"197","SOUND HOLIC Vs. T.Kakuta feat. YURiCa","SCバイオメトリクス",45,40,85,"02:07","EXH17",1873,0,"EXH15",3,197,127,17],
  ["Triple Counter",170167,"Ⅲ","EXH17",2334,712,672,950,6804,"EXH17",2177,157,"216","DJ YOSHITAKA meets dj TAKA","TEK-A meets RHYTHM",67,58,125,"02:02","EXH17",2175,2,"EXH15",3,216,122,17],
  ["Twin Rocket",170168,"Ⅲ","EXH17",1821,608,345,868,5466,"EXH17",1701,120,"185","uno feat. ちよこ(IOSYS)","月刊ミズタニ",61,61,122,"02:00","EXH17",1596,105,"EXH15",3,185,120,17],
  ["UROBØROS",170169,"Ⅲ","EXH17",1825,593,259,973,5429,"EXH17",1689,136,"129","溝口ゆうま feat. 大瀬良あい","月刊ミズタニ",50,57,107,"01:53","EXH17",1689,0,"EXH15",3,129,113,17],
  ["Vampire's Territory",170170,"Ⅲ","EXH17",1692,737,329,626,5595,"EXH17",1591,101,"140-280","u-z","レッドホットスクリューズ",78,85,163,"02:00","EXH17",1591,0,"EXH15",3,280,120,17],
  ["Virtual Bit",170171,"Ⅲ","EXH17",2100,441,497,1162,5523,"EXH17",1905,195,"152","KAN TAKAHIKO","Padcontrollers",72,85,157,"01:58","EXH17",1905,0,"EXH15",3,152,118,17],
  ["Voynich:Manuscript",170172,"Ⅲ","EXH17",1940,708,367,865,6004,"EXH17",1839,101,"164","かゆき","浮世マシーン",44,43,87,"01:55","EXH17",1839,0,"EXH15",3,164,115,17],
  ["Witch in Sweetsland",170173,"Ⅲ","EXH17",2057,920,388,749,6874,"EXH17",1976,81,"185","COOKIE MONSTERS(winddrums+黒魔)","七色Method",37,33,70,"02:01","EXH17",1975,1,"EXH15",3,185,121,17],
  ["Zero-Day Exploit",170174,"Ⅲ","EXH17",2030,741,647,642,6283,"EXH17",1920,110,"194","Trerey-U","cosMo@暴走P",41,36,77,"01:58","EXH17",1920,0,"EXH15",3,194,118,17],
  ["アキネイション",170175,"Ⅲ","EXH17",1873,585,554,734,5501,"EXH17",1726,147,"185","ビートまりお（COOL&CREATE）","PHQUASE",76,68,144,"01:52","EXH17",1726,0,"EXH15",3,185,112,17],
  ["あれこれそれどれ",170176,"Ⅲ","EXH17",2176,626,357,1193,6230,"EXH17",2015,161,"194","YM feat. 赤飯","浮世マシーン",72,71,143,"01:46","EXH17",2015,0,"EXH15",3,194,106,17],
  ["イグジスタンス",170177,"Ⅲ","EXH17",2007,734,396,877,6216,"EXH17",1877,130,"200","スズム","TEK-A-RHYTHM",50,43,93,"01:58","EXH17",1877,0,"EXH15",3,200,118,17],
  ["きらきらタイム☆",170178,"Ⅲ","EXH17",1992,744,285,963,6216,"EXH17",1910,82,"202","さわわ","Ether99",68,64,132,"02:00","EXH17",1779,131,"EXH15",3,202,120,17],
  ["ゲキツイムラサ",170179,"Ⅲ","EXH17",1930,678,526,726,5894,"EXH17",1768,162,"185","ビートまりお（COOL&CREATE）","風瑠人",44,41,85,"01:48","EXH17",1768,0,"EXH15",3,185,108,17],
  ["じゅーじゅー♥焼肉の火からフェニックス！？～再誕の†炭火焼き",170180,"Ⅲ","EXH17",2126,550,473,1103,5902,"EXH17",1974,152,"180","かめりあ feat. ななひら","でひゃいましゅぅぅぅ～～っっ！！！ふかせ",85,121,206,"01:58","EXH17",1974,0,"EXH15",3,180,118,17],
  ["そして紫の幻想曲は全てを受け入れる",170181,"Ⅲ","EXH17",1814,803,406,605,6037,"EXH17",1673,141,"174","黄泉路テヂーモ×dawn-system","ビーフジョッキー",41,39,80,"01:55","EXH17",1673,0,"EXH15",3,174,115,17],
  ["チルノとまりおのパーフェクトさんすう教室",170182,"Ⅲ","EXH17",2015,550,483,982,5680,"EXH17",1890,125,"180","ビートまりお（COOL&CREATE）","ボブ☆四万十川のパーフェクトダンス教室",66,86,152,"02:04","EXH17",1890,0,"EXH15",3,180,124,17],
  ["ネメシス SDVX Edit",170183,"Ⅲ","EXH17",2008,767,471,770,6317,"EXH17",1880,128,"146","Larca","浮世マシーン",78,83,161,"01:57","EXH17",1880,0,"EXH15",3,146,117,17],
  ["パ→ピ→プ→Yeah!",170184,"Ⅲ","EXH17",1879,566,256,1057,5456,"EXH17",1756,123,"160","ヒゲドライバー join. shully & Nimo","月刊ミズタニS",97,92,189,"01:44","EXH17",1756,0,"EXH15",3,160,104,17],
  ["ほおずき程度には赤い頭髪",170185,"Ⅲ","EXH17",2125,692,625,808,6326,"EXH17",1927,198,"174","Akhuta","ほおずき程度には赤いYUK-A-RHYTHM",75,101,176,"01:58","EXH17",1927,0,"EXH15",3,174,118,17],
  ["ホーンテッド★メイドランチ",170186,"Ⅲ","EXH17",2315,674,590,1051,6652,"EXH17",2185,130,"188","日向美ビタースイーツ♪","Hermit♣club",63,63,126,"01:57","EXH17",2185,0,"EXH15",3,188,117,17],
  ["ぼくらしかしらない",170187,"Ⅲ","EXH17",1782,791,299,692,5937,"EXH17",1749,33,"180","ぬゆり","TEK-A-RHYTHM",41,43,84,"01:55","EXH17",1749,0,"EXH15",3,180,115,17],
  ["鬼天",170188,"Ⅲ","EXH17",1821,668,322,831,5646,"EXH17",1666,155,"161","兎々","浮世マシーン",42,32,74,"01:51","EXH17",1666,0,"EXH15",3,161,111,17],
  ["感情の魔天楼 ～ Arr.Demetori",170189,"Ⅲ","EXH17",2474,704,812,958,7060,"EXH17",2304,170,"178","Demetori","月刊バイオメトリクス",37,24,61,"01:55","EXH17",2304,0,"EXH15",3,178,115,17],
  ["雲の彼方",170190,"Ⅲ","EXH17",1666,707,172,787,5453,"EXH17",1644,22,"150","Cororo","SCバイオメトリクス",52,54,106,"01:55","EXH17",1644,0,"EXH15",3,150,115,17],
  ["紅の剣舞",170191,"Ⅲ","EXH17",2172,715,641,816,6489,"EXH17",2036,136,"190","かねこちはる","Ether99",47,46,93,"02:00","EXH17",2037,-1,"EXH15",3,190,120,17],
  ["黒髪乱れし修羅となりて～凛 edition～",170192,"Ⅲ","EXH17",1928,715,391,822,6001,"EXH17",1878,50,"150","日向美ビタースイーツ♪","SCミズタニ",91,91,182,"02:05","EXH17",1878,0,"EXH15",3,150,125,17],
  ["漆黒のスペシャルプリンセスサンデー",170193,"Ⅲ","EXH17",2398,596,817,985,6584,"EXH17",2236,162,"200","日向美ビタースイーツ♪","ビーフジョッキー",61,57,118,"02:06","EXH17",2236,0,"EXH15",3,200,126,17],
  ["雪月花 -さわわ Remix-",170194,"Ⅲ","EXH17",2029,778,632,619,6392,"EXH17",1897,132,"188","さわわ","Ether99",40,44,84,"01:55","EXH17",1897,0,"EXH15",3,188,115,17],
  ["断罪は遍く人間の元に",170195,"Ⅲ","EXH17",1849,497,735,617,5189,"EXH17",1696,153,"170","Unlucky Morpheus","レッドホットスクリューズ",28,28,56,"01:42","EXH17",1695,1,"EXH15",3,170,102,17],
  ["常夏！！クリスタライズ・シャーベット",170196,"Ⅲ","EXH17",1815,311,338,1166,4563,"EXH17",1703,112,"152","Ayatsugu_Otowa","凹ーダー凸ー堂",156,159,315,"01:58","EXH17",1703,0,"EXH15",3,152,118,17],
  ["夏色DIARY -Summer Dazzlin' Vacation miX-",170197,"Ⅲ","EXH17",1866,632,487,747,5628,"EXH17",1718,148,"155","猫叉王子 feat. PHQUASE vs. MAD CHILD","PHQUASE vs. MAD CHILD",48,50,98,"02:09","EXH16",1718,0,"EXH15",3,155,129,17],
  ["人形裁判 -THIRD IMPACT-",170198,"Ⅲ","EXH17",1792,776,640,376,5912,"EXH17",1618,174,"198","激戦の人","Ether99",23,28,51,"02:00","EXH17",1618,0,"EXH15",3,198,120,17],
  ["暴走",170199,"Ⅲ","EXH17",1393,584,266,543,4538,"EXH17",1331,62,"310","cosMo@暴走P","MAD CHILD",39,33,72,"01:42","EXH17",1331,0,"EXH15",3,310,102,17],
  ["無気力クーデター",170200,"Ⅲ","EXH17",1758,772,376,610,5832,"EXH17",1632,126,"185","Last Note.","azuma",52,49,101,"01:53","EXH17",1442,190,"EXH15",3,185,113,17],
  ["無双",170201,"Ⅲ","EXH17",2442,661,613,1168,6867,"EXH17",2341,101,"180","SOUND HOLIC Vs. VENUS feat. Nana Takahashi","SCバイオメトリクス Vs. 金色の夜叉 feat. 忍",82,77,159,"02:12","EXH17",2341,0,"EXH15",3,180,132,17],
  ["物凄い狂っとるフランちゃんが物凄いうた",170202,"Ⅲ","EXH17",1806,650,274,882,5562,"EXH17",1599,207,"128-170","Halozy feat. ななひら","月刊ミズタニ",54,58,112,"01:59","EXH17",1600,-1,"EXH15",3,170,119,17],
  ["量子の海のリントヴルム",170203,"Ⅲ","EXH17",1890,899,332,659,6477,"EXH17",1812,78,"280","黒猫ダンジョン","風瑠人",56,64,120,"01:53","EXH17",1811,1,"EXH15",3,280,113,17],
  ["Destroy",170204,"Ⅲ","GRV17",2117,729,455,933,6421,"GRV17",1927,190,"195","Yooh","MAD CHILD",91,88,179,"01:54","GRV17",1927,0,"GRV15",3,195,114,17],
  ["Get back here",170205,"Ⅲ","GRV17",2155,728,396,1031,6494,"GRV17",2063,92,"200","Hommarju","風瑠人",65,62,127,"01:50","GRV17",2063,0,"GRV15",3,200,110,17],
  ["Grand Chariot",170206,"Ⅲ","GRV17",2097,887,618,592,6855,"GRV17",2027,70,"191","xi","Ester44",61,52,113,"02:02","GRV17",2027,0,"GRV15",3,191,122,17],
  ["INDEPENDENT SKY",170207,"Ⅲ","GRV17",2221,677,569,975,6473,"GRV17",2066,155,"170","SOUND HOLIC feat. Nana Takahashi","月刊ミズタニ × 逆球レジェンド × ユカリ☆chan",73,76,149,"02:14","GRV17",2067,-1,"GRV15",3,170,134,17],
  ["Inixia",170208,"Ⅲ","GRV17",2438,818,720,900,7330,"GRV17",2245,193,"217","xi","風瑠人",79,76,155,"02:06","GRV17",2247,-2,"GRV15",3,217,126,17],
  ["Sephirot",170209,"Ⅲ","GRV17",1688,748,405,535,5620,"GRV17",1565,123,"154","SHIKI","七色Method",21,26,47,"02:01","GRV17",1565,0,"GRV15",3,154,121,17],
  ["StrayedCatz",170210,"Ⅲ","GRV17",1678,905,385,388,6071,"GRV17",1577,101,"151","削除","WMM-E",31,21,52,"02:02","GRV17",1577,0,"GRV15",3,151,122,17],
  ["ZEPHYRANTHES",170211,"Ⅲ","GRV17",2090,694,384,1012,6262,"GRV17",2024,66,"180","TAG","TAG supported by SCライオット",36,44,80,"02:02","GRV17",2024,0,"GRV15",3,180,122,17],
  ["ウエンレラの氷華",170212,"Ⅲ","GRV17",2070,779,281,1010,6477,"GRV17",1983,87,"200","Cororo","Hermit♣club",41,35,76,"01:57","GRV17",1983,0,"GRV15",3,200,117,17],
  ["キモチコネクト",170213,"Ⅲ","GRV17",2115,551,288,1276,5883,"GRV17",1993,122,"150","東雲心菜 meets 日向美ビタースイーツ♪","Hermit♣club",53,52,105,"01:59","GRV17",1993,0,"GRV15",3,150,119,17],
  ["ポメグラネイト",170214,"Ⅲ","GRV17",1803,168,66,1569,4110,"GRV17",1715,88,"130","ここなつ","Hirayasu Matsudo",92,96,188,"01:51","GRV17",1715,0,"GRV15",3,130,111,17],
  ["ロンロンへ ライライライ！",170215,"Ⅲ","GRV17",1860,728,530,602,5904,"GRV17",1698,162,"156","ここなつ","MAD CHILD & Hiroyasu Matsuda",54,54,108,"02:02","GRV17",1698,0,"GRV15",3,156,122,17],
  ["バイナリスター",170216,"V","VVD17",1838,412,188,1238,4912,"VVD17",1405,433,"135","ここなつ","ふわふわユカタニ",80,86,166,"01:54","-","-","-","-","-",135,114,17],
  ["ヒミツダイヤル",170217,"V","VVD17",1565,489,221,855,4597,"VVD17",1335,230,"112","ここなつ","グッチーニ(SSL)",48,53,101,"01:56","-","-","-","-","-",112,116,17],
  ["A Lasting Promise",170218,"Ⅳ","EXH17",1811,712,202,897,5758,"EXH17",1714,97,"270","Laur","TEK-A-RHYTHM-IX",116,116,232,"01:59","EXH17",1714,0,"-",4,270,119,17],
  ["Absolute Domination",170219,"Ⅳ","EXH17",1823,783,475,565,5995,"EXH17",1636,187,"109-218","Laur","MAD CHILD",37,46,83,"02:08","EXH17",1636,0,"-",4,218,128,17],
  ["Awakening",170220,"Ⅳ","EXH17",2133,758,654,721,6540,"EXH17",2026,107,"208","technoplanet","七色Method Infrared",45,47,92,"01:58","EXH17",2027,-1,"-",4,208,118,17],
  ["BELOBOG",170221,"Ⅳ","EXH17",1857,637,559,661,5625,"EXH17",1767,90,"200","BEMANI Sound Team \"純白のIVORY\"","Ether99",49,53,102,"01:43","EXH17",1767,0,"-",4,200,103,17],
  ["Chrono Diver -PENDULUMs-",170222,"Ⅳ","EXH17",1874,799,499,576,6145,"EXH17",1734,140,"185","猫叉L.E.D.Master","時間軸を超越する者 ~PH~",27,31,58,"02:02","EXH17",1734,0,"-",4,185,122,17],
  ["Cross Fire",170223,"Ⅳ","EXH17",2173,679,254,1240,6383,"EXH17",2093,80,"180","Hommarju vs RoughSketch","NET-i-TEK",89,87,176,"02:00","EXH17",2093,0,"-",4,180,120,17],
  ["Deadly force",170224,"Ⅳ","EXH17",1526,565,499,462,4747,"EXH17",1471,55,"300","Noah","Megacycle",70,70,140,"01:53","EXH17",1471,0,"-",4,300,113,17],
  ["Dyscontrolled Galaxy",170225,"Ⅳ","EXH17",1916,881,352,683,6475,"EXH17",1799,117,"161","かめりあ","レッドホットスクリューズ",76,80,156,"02:11","EXH17",1799,0,"-",4,161,131,17],
  ["Elemental Creation",170226,"Ⅳ","EXH17",2596,720,566,1310,7352,"EXH17",2468,128,"212","dj TAKA meets DJ YOSHITAKA","MAD CHILD meets レッドホットスクリューズ",81,81,162,"02:13","EXH17",2468,0,"-",4,212,133,17],
  ["Failnaught",170227,"Ⅳ","EXH17",2319,802,366,1151,7044,"EXH17",2174,145,"220","xi","TEK-A-RHYTHM",116,88,204,"02:02","EXH17",2174,0,"-",4,220,122,17],
  ["FLOOR INFECTION Medley from SOUND VOLTEX×jubeat",170228,"Ⅳ","EXH17",1864,745,338,781,5963,"EXH17",1755,109,"145-195","United Composers from SOUND VOLTEX","United Effectors",43,51,94,"02:13","EXH17",1755,0,"-",4,195,133,17],
  ["Fly Like You",170229,"Ⅳ","EXH17",1752,623,299,830,5373,"EXH17",1653,99,"196-286","technoplanet","蒼穹の電撃ロブスター",58,56,114,"01:48","EXH17",1653,0,"-",4,286,108,17],
  ["FREEDOM DiVE",170230,"Ⅳ","EXH17",2217,911,355,951,7167,"EXH17",2070,147,"222","xi","Ether99",61,57,118,"02:24","EXH17",2070,0,"-",4,222,144,17],
  ["GERBERA -For Finalists-",170231,"Ⅳ","EXH17",2085,867,492,726,6771,"EXH17",1974,111,"205","remixed by cosMo@暴走P","cosMo@暴走P",86,65,151,"02:09","EXH17",1974,0,"-",4,205,129,17],
  ["GODHEART",170232,"Ⅳ","EXH17",2166,637,286,1243,6243,"EXH17",2061,105,"190","BlackY","Akizuki Nagomu",89,96,185,"02:02","EXH17",2059,2,"-",4,190,122,17],
  ["HE4VEN ～天国へようこそ～",170233,"Ⅳ","EXH17",1872,847,431,594,6285,"EXH17",1712,160,"256","カモメサノエレクトリックオーケストラ","PHQUASE Utopia",76,81,157,"02:00","EXH17",1712,0,"-",4,256,120,17],
  ["iLLness LiLin",170234,"Ⅳ","EXH17",1613,813,352,448,5665,"EXH17",1547,66,"280","かねこちはる","MAD CHILD Dystopia",76,67,143,"01:59","EXH17",1548,-1,"-",4,280,119,17],
  ["Last Resort",170235,"Ⅳ","EXH17",2307,692,745,870,6690,"EXH17",2093,214,"252","xi","MAD CHILD VX",92,97,189,"02:02","EXH17",2093,0,"-",4,252,122,17],
  ["Rebellio",170236,"Ⅳ","EXH17",1806,905,370,531,6327,"EXH17",1715,91,"234","MAX MAXIMIZER VS DJ TOTTO","Ether99",39,36,75,"02:06","EXH17",1715,0,"-",4,234,126,17],
  ["Sailing Force",170237,"Ⅳ","EXH17",1629,795,305,529,5643,"EXH17",1555,74,"110-159","ぺのれり","PHQUASE",33,30,63,"01:54","EXH17",1555,0,"-",4,159,114,17],
  ["Staring at star",170238,"Ⅳ","EXH17",2146,760,571,815,6572,"EXH17",1991,155,"250","MisoilePunch♪ ～タケノコ添え～","凹ーダー凸ード",67,68,135,"01:59","EXH17",1991,0,"-",4,250,119,17],
  ["TWO-TORIAL",170239,"Ⅳ","EXH17",1789,590,479,720,5348,"EXH17",1618,171,"213","BEMANI Sound Team \"PHQUASE vs DJ TOTTO\"","Beat Professor Maxima",85,90,175,"02:06","EXH17",1618,0,"-",4,213,126,17],
  ["Xéroa",170240,"Ⅳ","EXH17",1648,605,401,642,5111,"EXH17",1633,15,"301","かめりあ","dj strachen",64,56,120,"01:58","EXH17",1633,0,"-",4,301,118,17],
  ["セイレーン ～悲壮の竪琴～",170241,"Ⅳ","EXH17",2444,802,765,877,7294,"EXH17",2204,240,"93-214","ぺのれり","Ether99",48,38,86,"02:18","EXH17",2204,0,"-",4,214,138,17],
  ["逆月",170242,"Ⅳ","EXH17",1705,749,345,611,5657,"EXH17",1629,76,"280","BEMANI Sound Team \"HuΣeR\" feat.Fernweh","CosΣo@暴走P",70,76,146,"02:02","EXH17",1629,0,"-",4,280,122,17],
  ["超☆超☆光☆速☆出☆前☆最☆速!!! スピード★スター★かなで",170243,"Ⅳ","EXH17",2178,557,570,1051,6027,"EXH17",2008,170,"30-999","かめりあ feat. ななひら","工事現場＆光速電波＆四万十川",72,71,143,"02:00","EXH17",2008,0,"-",4,500,120,17],
  ["3y3s (JMBS FUNKOT RMX)",170244,"Ⅳ","MXM17",2122,702,450,970,6350,"MXM17",1959,163,"198","Jockie \"MASTA BASS\" Suama","THE THIRD MAN",76,76,152,"01:54","MXM17",1959,0,"-",4,198,114,17],
  ["405nm(Shu※mix)",170245,"Ⅳ","MXM17",2065,662,535,868,6116,"MXM17",1894,171,"182"," Shu※","azuma",32,36,68,"01:56","MXM17",1894,0,"-",4,182,116,17],
  ["444",170246,"Ⅳ","MXM17",1843,497,558,788,5177,"MXM17",1650,193,"190","ZYTOKINE feat. aki","Jessica Toshimitsu",42,51,93,"01:47","MXM17",1650,0,"-",4,190,107,17],
  ["All Clear!!",170247,"Ⅳ","MXM17",2061,618,366,1077,5976,"MXM17",1977,84,"164","sky_delta","月刊ミズタニ",54,57,111,"01:48","MXM17",1977,0,"-",4,164,108,17],
  ["Altale",170248,"Ⅳ","MXM17",1577,614,287,676,4996,"MXM17",1495,82,"83-90","削除","おからヒット　タイプD",38,36,74,"02:29","MXM17",1495,0,"-",4,90,149,17],
  ["Another Chapter",170249,"Ⅳ","MXM17",2645,634,938,1073,7192,"MXM17",2341,304,"220","からとP feat.リた☆","EIVY",63,59,122,"02:06","MXM17",2341,0,"-",4,220,126,17],
  ["Apocrypha",170250,"Ⅳ","MXM17",2287,538,735,1014,6188,"MXM17",2093,194,"236","お月さま交響曲","凹ーダー凸ード",44,44,88,"01:55","MXM17",2093,0,"-",4,236,115,17],
  ["Aragami",170251,"Ⅳ","MXM17",2152,731,583,838,6497,"MXM17",2033,119,"48-196","xi","Megacycle",37,34,71,"01:56","MXM17",2033,0,"-",4,196,116,17],
  ["Arcade Prison",170252,"Ⅳ","MXM17",1678,578,509,591,5090,"MXM17",1533,145,"155","MAD CHILD vs. siromaru","MAD CHILD. the Arcade Prisoner",61,65,126,"02:09","MXM17",1533,0,"-",4,155,129,17],
  ["β",170253,"Ⅳ","MXM17",2271,732,366,1173,6738,"MXM17",2148,123,"190","BlackY","からあげブラザーズ",47,34,81,"02:22","MXM17",2148,0,"-",4,190,142,17],
  ["Blue Stream",170254,"Ⅳ","MXM17",1404,798,405,201,5202,"MXM17",1339,65,"140","とろまる","kamuy noko",55,40,95,"01:55","MXM17",1339,0,"-",4,140,115,17],
  ["BREAKNECK NY☆N! NY★N!",170255,"Ⅳ","MXM17",2434,602,642,1190,6674,"MXM17",2238,196,"220","ZerA","Megacycle",65,76,141,"01:57","MXM17",2238,0,"-",4,220,117,17],
  ["CARNIVOROUS",170256,"Ⅳ","MXM17",1725,528,529,668,5034,"MXM17",1534,191,"170","SOUND HOLIC feat. Nana Takahashi","Megacycle",49,48,97,"01:57","MXM17",1534,0,"-",4,170,117,17],
  ["Carry Me Away",170257,"Ⅳ","MXM17",2014,616,621,777,5876,"MXM17",1805,209,"175","lapix","七色Method",68,74,142,"02:00","MXM17",1806,-1,"-",4,175,120,17],
  ["Chaotic Romance",170258,"Ⅳ","MXM17",2103,812,566,725,6642,"MXM17",1959,144,"200","はるなば","Megacycle",58,58,116,"01:59","MXM17",1959,0,"-",4,200,119,17],
  ["Chocolate Planet ",170259,"Ⅳ","MXM17",2100,592,949,559,5976,"MXM17",1877,223,"185","Freezer feat.妃苺","七色Method",26,31,57,"01:56","MXM17",1877,0,"-",4,185,116,17],
  ["cobalt",170260,"Ⅳ","MXM17",1916,520,515,881,5392,"MXM17",1612,304,"145-175","Des-ROW・組スペシアル","七色Method",42,49,91,"02:01","MXM17",1616,-4,"-",4,175,121,17],
  ["Coldlapse",170261,"Ⅳ","MXM17",1850,822,473,555,6166,"MXM17",1700,150,"200","Api vs. r0y","凹ーダー凸ード",41,43,84,"02:00","MXM17",1700,0,"-",4,200,120,17],
  ["CUTE-Reflection",170262,"Ⅳ","MXM17",2563,546,604,1413,6764,"MXM17",2420,143,"160-170","7mai","浮世マシーン",75,73,148,"02:03","MXM17",2420,0,"-",4,170,123,17],
  ["Cy-Bird",170263,"Ⅳ","MXM17",2056,751,443,862,6365,"MXM17",1786,270,"160","Yooh","MAD CHILD",56,56,112,"02:07","MXM17",1786,0,"-",4,160,127,17],
  ["Dark Matter",170264,"Ⅳ","MXM17",2043,780,919,344,6426,"MXM17",1757,286,"205","Yooh","Hiroyasu Matsuda",1,1,2,"01:56","MXM17",1757,0,"-",4,205,116,17],
  ["Decoy",170265,"Ⅳ","MXM17",2400,599,629,1172,6597,"MXM17",2115,285,"180","Yooh","MAD CHILD",68,71,139,"02:17","MXM17",2115,0,"-",4,180,137,17],
  ["Destruction & Qreation",170266,"Ⅳ","MXM17",2695,500,409,1786,6890,"MXM17",2446,249,"190"," polysha+inusack","月刊ミズタニ",58,51,109,"01:55","MXM17",2447,-1,"-",4,190,115,17],
  ["Dharma",170267,"Ⅳ","MXM17",1650,687,142,821,5361,"MXM17",1576,74,"160","Massive New Krew","東京ブルトゥーム",59,67,126,"01:54","MXM17",1576,0,"-",4,160,114,17],
  ["Dreaming feat.nomico",170268,"Ⅳ","MXM17",2026,479,431,1116,5489,"MXM17",1854,172,"135","Alstroemeria Records","BATAASHI",60,52,112,"02:12","MXM17",1854,0,"-",4,135,132,17],
  ["Drizzly Venom",170269,"Ⅳ","MXM17",1739,552,621,566,5134,"MXM17",1542,197,"147-168","日向美ビタースイーツ♪","ふかせ",28,24,52,"01:54","MXM17",1542,0,"-",4,168,114,17],
  ["EDEN of TRUTH",170270,"Ⅳ","MXM17",1938,595,465,878,5661,"MXM17",1773,165,"172","Braflare(kanone&かぼちゃ)","浮世マシーン",64,61,125,"01:58","MXM17",1773,0,"-",4,172,118,17],
  ["Empathetic",170271,"Ⅳ","MXM17",2008,437,585,986,5327,"MXM17",1873,135,"180","Sota÷Des","浮世×マシーン",104,105,209,"02:02","MXM17",1873,0,"-",4,180,122,17],
  ["Fáfnir",170272,"Ⅳ","MXM17",2045,653,520,872,6049,"MXM17",1875,170,"196","Aoi Sumito a.k.a. あおいひと","凹ーダー凸ード",72,66,138,"01:59","MXM17",1875,0,"-",4,196,119,17],
  ["Far Away",170273,"Ⅳ","MXM17",2249,536,273,1440,6106,"MXM17",2079,170,"155","lapix","東京ブルトゥーム",59,57,116,"02:02","MXM17",2079,0,"-",4,155,122,17],
  ["Finale",170274,"Ⅳ","MXM17",2079,824,792,463,6630,"MXM17",1800,279,"167","A-One","レッドホットスクリューズ",18,19,37,"02:23","MXM17",1800,0,"-",4,167,143,17],
  ["Fly far bounce",170275,"Ⅳ","MXM17",1506,581,472,453,4755,"MXM17",1343,163,"98-163","猫叉Master","PHQUASE",21,19,40,"01:50","MXM17",1343,0,"-",4,163,110,17],
  ["Four Leaves",170276,"Ⅳ","MXM17",2029,509,747,773,5585,"MXM17",1799,230,"181","Endorfin.","MaKoTo",36,35,71,"01:53","MXM17",1799,0,"-",4,181,113,17],
  ["Game Over",170277,"Ⅳ","MXM17",1944,713,372,859,6027,"MXM17",1787,157,"200","Ancraft","CRAIG AKAGI",55,50,105,"01:59","MXM17",1787,0,"-",4,200,119,17],
  ["Heavenly Adventure",170278,"Ⅳ","MXM17",1806,545,316,945,5247,"MXM17",1673,133,"156","Soleily","おすし仮面",50,51,101,"01:53","MXM17",1673,0,"-",4,156,113,17],
  ["HEAVENLY SMILE",170279,"Ⅳ","MXM17",1866,690,522,654,5802,"MXM17",1670,196,"184","VALLEYSTONE feat. 紫崎 雪","MAD CHILD",55,53,108,"01:58","MXM17",1670,0,"-",4,184,118,17],
  ["If",170280,"Ⅳ","MXM17",1762,525,419,818,5099,"MXM17",1630,132,"170","Pa's Lam System","七色Method 1+1/2",63,70,133,"01:50","MXM17",1631,-1,"-",4,170,110,17],
  ["ILL-STARRED Diver",170281,"Ⅳ","MXM17",1731,609,387,735,5289,"MXM17",1571,160,"185","polysha","CRAIG AKAGI",46,54,100,"01:58","MXM17",1571,0,"-",4,185,118,17],
  ["infinite:youniverse",170282,"Ⅳ","MXM17",2417,775,380,1262,7159,"MXM17",2306,111,"220","かゆき","風瑠人",50,50,100,"01:59","MXM17",2306,0,"-",4,220,119,17],
  ["Inscape",170283,"Ⅳ","MXM17",1870,760,611,499,6020,"MXM17",1706,164,"200","technoplanet","Megacycle",26,31,57,"01:56","MXM17",1706,0,"-",4,200,116,17],
  ["Invisible Bullets",170284,"Ⅳ","MXM17",1623,762,315,546,5532,"MXM17",1538,85,"184","brz1128","電撃ロブスター",46,44,90,"01:59","MXM17",1538,0,"-",4,184,119,17],
  ["Iridescent Clouds",170285,"Ⅳ","MXM17",1987,710,374,903,6104,"MXM17",1859,128,"135","Hidra-Xjeil","浮世マシーン",75,59,134,"01:57","MXM17",1859,0,"-",4,135,117,17],
  ["JUGGLE",170286,"Ⅳ","MXM17",1972,445,497,1030,5279,"MXM17",1535,437,"148","Ras","月刊ミズタニ",63,64,127,"02:03","MXM17",1535,0,"-",4,148,123,17],
  ["JULIAN",170287,"Ⅳ","MXM17",1585,662,175,748,5156,"MXM17",1482,103,"153","Queen P.A.L.","レッドホットスクリューズ",46,32,78,"01:52","MXM16",1482,0,"-",4,153,112,17],
  ["Junk Mania",170288,"Ⅳ","MXM17",1862,558,517,787,5398,"MXM17",1655,207,"165","udouddo&VALLEYSTONE","CRAIG AKAGI",61,67,128,"02:01","MXM17",1653,2,"-",4,165,121,17],
  ["Justitia Gladius",170289,"Ⅳ","MXM17",1717,795,366,556,5819,"MXM17",1621,96,"156","kanone","kamuy noko",41,38,79,"02:01","MXM17",1621,0,"-",4,156,121,17],
  ["Knights Assault",170290,"Ⅳ","MXM17",1721,672,520,529,5458,"MXM17",1531,190,"276","零 -zero-","電撃ロブスター",49,51,100,"02:01","MXM17",1531,0,"-",4,276,121,17],
  ["Libera me",170291,"Ⅳ","MXM17",1855,670,445,740,5720,"MXM17",1723,132,"165","Cranky","Satchy",57,45,102,"01:58","MXM17",1722,1,"-",4,165,118,17],
  ["Liévre -blanche-",170292,"Ⅳ","MXM17",2014,439,675,900,5345,"MXM17",1885,129,"180","Diartzh","ユカリ☆chan vs. 月刊ミズタニ",76,56,132,"01:56","MXM17",1885,0,"-",4,180,116,17],
  ["Life is beautiful",170293,"Ⅳ","MXM17",2076,667,307,1102,6153,"MXM17",1977,99,"155","BEMANI Sound Team \"猫叉Master\"","おすし♣club",97,103,200,"02:06","MXM17",1977,0,"-",4,155,126,17],
  ["Line 4 Ruin -kohumix-",170294,"Ⅳ","MXM17",1844,735,350,759,5893,"MXM17",1754,90,"170","こふ","Megacycle",77,77,154,"01:50","MXM17",1754,0,"-",4,170,110,17],
  ["Lost Wing at.0",170295,"Ⅳ","MXM17",2949,529,925,1495,7485,"MXM17",2781,168,"180","猫叉Master+","東京ブルトゥーム",46,46,92,"02:04","MXM17",2781,0,"-",4,180,124,17],
  ["Made In Love",170296,"Ⅳ","MXM17",2640,443,859,1338,6609,"MXM17",2344,296,"88","黒魔","I'm alive～PH～",60,55,115,"02:19","MXM17",2345,-1,"-",4,88,139,17],
  ["MAXIVCORD",170297,"Ⅳ","MXM17",1494,559,304,631,4665,"MXM17",1407,87,"154","BEMANI Sound Team \"dj TAKA\"","ポテト亀山",38,42,80,"01:38","MXM17",1407,0,"-",4,154,98,17],
  ["Melty Sweets",170298,"Ⅳ","MXM17",2257,661,412,1184,6497,"MXM17",2100,157,"177"," Ironami","CRAIG AKAGI",57,54,111,"02:00","MXM17",2100,0,"-",4,177,120,17],
  ["Musha Vibration",170299,"Ⅳ","MXM17",1736,607,405,724,5293,"MXM17",1469,267,"177","NA7","Akizuki Nagomu",81,80,161,"01:51","MXM17",1469,0,"-",4,177,111,17],
  ["NEON LOVE♥POTION!!!",170300,"Ⅳ","MXM17",1887,753,361,773,6033,"MXM17",1784,103,"180","パイタン","ポテト亀山",62,49,111,"02:00","MXM17",1784,0,"-",4,180,120,17],
  ["No way",170301,"Ⅳ","MXM17",1884,591,430,863,5541,"MXM17",1737,147,"160","影虎。","凹ーダー凸ード",73,69,142,"02:01","MXM17",1737,0,"-",4,160,121,17],
  ["Oriens",170302,"Ⅳ","MXM17",1912,782,520,610,6170,"MXM17",1712,200,"140-185","ginkiha","Megacycle",35,33,68,"02:17","MXM17",1712,0,"-",4,185,137,17],
  ["Phlox",170303,"Ⅳ","MXM17",1827,530,377,920,5244,"MXM17",1688,139,"185","Sota Fujimori 2nd Season","凹ーダー凸ード",95,87,182,"01:58","MXM17",1688,0,"-",4,185,118,17],
  ["PIERROT KNIfE",170304,"Ⅳ","MXM17",2215,648,577,990,6374,"MXM17",1985,230,"190","まろん (IOSYS)","CRAIG AKAGI",71,65,136,"01:59","MXM17",1985,0,"-",4,190,119,17],
  ["planetarium",170305,"Ⅳ","MXM17",1896,669,302,925,5799,"MXM17",1823,73,"180","SUi","おすし仮面",68,69,137,"02:00","MXM17",1823,0,"-",4,180,120,17],
  ["Poison AND÷OR Affection",170306,"Ⅳ","MXM17",2032,644,357,1031,5996,"MXM17",1860,172,"120","LeaF","SCイノセンス",82,86,168,"02:05","MXM17",1860,0,"-",4,120,125,17],
  ["Poppin’Cats!!",170307,"Ⅳ","MXM17",1817,732,323,762,5830,"MXM17",1702,115,"150","やどりぎ","東京ブルトゥーム",44,45,89,"01:59","MXM17",1702,0,"-",4,150,119,17],
  ["QUAKE",170308,"Ⅳ","MXM17",1539,579,394,566,4815,"MXM17",1429,110,"130-150","Polyphonix","MAD CHILD",40,40,80,"02:00","MXM17",1429,0,"-",4,130,120,17],
  ["Rebuilding of Paradise Lost",170309,"Ⅳ","MXM17",2177,614,715,848,6196,"MXM17",2046,131,"190-280","Laur","CRAIG AKAGI vs. 凹ーダー凸ード",51,60,111,"02:00","MXM17",2046,0,"-",4,190,120,17],
  ["Rejoin",170310,"Ⅳ","MXM17",1700,697,461,542,5491,"MXM17",1542,158,"135","BEMANI Sound Team \"HuΣeR feat.PON\"","鋼のビスカッチャ",52,53,105,"01:56","MXM17",1542,0,"-",4,135,116,17],
  ["rhythmology study",170311,"Ⅳ","MXM17",1745,783,479,483,5839,"MXM17",1651,94,"270","古屋直雪","Ether99",61,48,109,"01:55","MXM17",1651,0,"-",4,270,115,17],
  ["Royal Action",170312,"Ⅳ","MXM17",1789,742,290,757,5804,"MXM17",1656,133,"173","BlackY","cosMo＠暴走P",81,76,157,"01:53","MXM17",1656,0,"-",4,173,113,17],
  ["Sadistic Stabbing",170313,"Ⅳ","MXM17",1888,649,621,618,5723,"MXM17",1686,202,"200","ぬゆりとびす","Megacycle",32,34,66,"01:54","MXM17",1686,0,"-",4,200,114,17],
  ["Sakura Mirage -Drum'n World-",170314,"Ⅳ","MXM17",2138,750,951,437,6526,"MXM17",2001,137,"70-200","Kairys","ダークダークダーク",8,13,21,"01:55","MXM17",2001,0,"-",4,200,115,17],
  ["Secret Traveler -MeniRemix-",170315,"Ⅳ","MXM17",2024,122,258,1644,4414,"MXM17",1882,142,"131","Adust Rain","Hirayasu Matsudo",181,177,358,"02:00","MXM17",1882,0,"-",4,131,120,17],
  ["sink into the dream",170316,"Ⅳ","MXM17",1484,726,295,463,5146,"MXM17",1375,109,"148","uma","レッドホットスクリューズ",32,28,60,"01:55","MXM17",1375,0,"-",4,148,115,17],
  ["Sleepless days",170317,"Ⅳ","MXM17",2102,380,343,1379,5344,"MXM17",1932,170,"188","猫叉Master feat.Mayumi Morinaga","鋼のビスカッチャ",22,15,37,"01:30","MXM17",1930,2,"-",4,188,90,17],
  ["Smoked Turkey Rag",170318,"Ⅳ","MXM17",1803,753,368,682,5865,"MXM17",1717,86,"150","a_hisa","THE THIRD MAN",53,50,103,"01:57","MXM17",1717,0,"-",4,150,117,17],
  ["SPACE VILLAGE",170319,"Ⅳ","MXM17",1747,606,254,887,5312,"MXM17",1598,149,"170","サイバー劇レコ","SCバイオメトリクス",42,42,84,"01:57","MXM17",1598,0,"-",4,170,117,17],
  ["Sulk",170320,"Ⅳ","MXM17",2353,724,434,1195,6878,"MXM17",2334,19,"150","SYUNN","GOLD",38,46,84,"02:13","MXM17",2334,0,"-",4,150,133,17],
  ["SUPER BUBBLE JOURNEY",170321,"Ⅳ","MXM17",1470,735,315,420,5145,"MXM17",1373,97,"155","こふ","Megacycle",39,40,79,"01:54","MXM17",1373,0,"-",4,155,114,17],
  ["Synergy For Angels",170322,"Ⅳ","MXM17",1724,566,660,498,5146,"MXM17",1617,107,"160","TAG×U1-ASAMi","からあげブラザーズ",46,52,98,"01:58","MXM17",1617,0,"-",4,160,118,17],
  ["Technical Master",170323,"Ⅳ","MXM17",1990,451,181,1358,5333,"MXM17",1864,126,"160","天音 (Rolling Contact)","SCイノセンス",76,70,146,"01:53","MXM17",1864,0,"-",4,160,113,17],
  ["Tic Exe",170324,"Ⅳ","MXM17",1920,637,447,836,5751,"MXM17",1775,145,"210","Se-U-Ra","Akizuki Nagomu",73,65,138,"01:59","MXM17",1775,0,"-",4,210,119,17],
  ["Twilight ∞ nighT",170325,"Ⅳ","MXM17",1383,644,300,439,4698,"MXM17",1276,107,"124","ひとしずく×やま△","cosMo@暴走P",72,74,146,"02:00","MXM17",1277,-1,"-",4,124,120,17],
  ["Vigor",170326,"Ⅳ","MXM17",1700,589,332,779,5167,"MXM17",1579,121,"132","Yooh","ビーフジョッキー",71,61,132,"02:01","MXM17",1579,0,"-",4,132,121,17],
  ["Voltage Higher",170327,"Ⅳ","MXM17",1896,730,560,606,5982,"MXM17",1645,251,"166","A-One","MAD CHILD",63,62,125,"02:03","MXM17",1645,0,"-",4,166,123,17],
  ["VOLTEXES IV",170328,"Ⅳ","MXM17",1638,632,415,591,5172,"MXM17",1401,237,"147","BEMANI Sound Team \"Sota Fujimori\"","MAD CHILD ver.IV",43,43,86,"01:59","MXM17",1401,0,"-",4,147,119,17],
  ["WONDER_WOBBLER",170329,"Ⅳ","MXM17",2154,713,260,1181,6447,"MXM17",2036,118,"186","brz","風瑠人",96,92,188,"02:01","MXM17",2036,0,"-",4,186,121,17],
  ["Xibercannon",170330,"Ⅳ","MXM17",1952,710,395,847,6034,"MXM17",1827,125,"190","隣の庭は青い(庭師+Aoi)","SCバイオメトリクス",34,37,71,"02:01","MXM17",1831,-4,"-",4,190,121,17],
  ["Zelophilia",170331,"Ⅳ","MXM17",1647,718,315,614,5448,"MXM17",1556,91,"155","ぺのれり feat.ぁゅ","ビーフジョッキー",59,63,122,"01:57","MXM17",1556,0,"-",4,155,117,17],
  ["アワデコノヨヲ",170332,"Ⅳ","MXM17",2340,646,562,1132,6618,"MXM17",2211,129,"212","AMAZE","Akizuki Nagomu",25,23,48,"01:56","MXM17",2211,0,"-",4,212,116,17],
  ["アンハッピーリフレイン",170333,"Ⅳ","MXM17",2214,687,564,963,6489,"MXM17",1986,228,"205","wowaka","MAD CHILD",72,69,141,"02:02","MXM17",1986,0,"-",4,205,122,17],
  ["インビジブル",170334,"Ⅳ","MXM17",1861,736,617,508,5930,"MXM17",1649,212,"192","kemu","Megacycle",56,62,118,"02:02","MXM16",1649,0,"-",4,192,122,17],
  ["おにいちゃんハイテック",170335,"Ⅳ","MXM17",1800,442,439,919,4926,"MXM17",1611,189,"150","立秋 feat.ちょこ","凹ーダー凸ード",77,71,148,"01:49","MXM17",1611,0,"-",4,150,109,17],
  ["オンディーヌの泪",170336,"Ⅳ","MXM17",2574,583,853,1138,6897,"MXM17",2412,162,"230","かねこちはる","電撃ロブスター",13,6,19,"01:59","MXM17",2412,0,"-",4,230,119,17],
  ["ケムマキ underground",170337,"Ⅳ","MXM17",2133,689,642,802,6333,"MXM17",1931,202,"200","t+pazolite feat. リズナ","MAD CHILD",78,76,154,"02:00","MXM17",1931,0,"-",4,200,120,17],
  ["ゴーストルール",170338,"Ⅳ","MXM17",2251,554,556,1141,6164,"MXM17",2048,203,"210","DECO*27","凹ーダー凸ード",79,81,160,"01:59","MXM17",2047,1,"-",4,210,119,17],
  ["コメット⇒スケイター",170339,"Ⅳ","MXM17",1927,569,577,781,5561,"MXM17",1769,158,"150","U-ske feat.棗いつき","星空を翔ける～CA～",63,59,122,"02:01","MXM17",1769,0,"-",4,150,121,17],
  ["すろぉもぉしょん",170340,"Ⅳ","MXM17",1727,697,342,688,5545,"MXM17",1586,141,"80-160","ピノキオピー","レッドホットスロォモォション",50,45,95,"02:00","MXM17",1586,0,"-",4,160,120,17],
  ["セイシュンライナー",170341,"Ⅳ","MXM17",3067,699,1030,1338,8231,"MXM17",2799,268,"200","蝶々P meets まじ娘","Akizuki Nagomu",58,54,112,"02:26","MXM17",2799,0,"-",4,200,146,17],
  ["それは花火のような恋",170342,"Ⅳ","MXM17",2080,645,333,1102,6095,"MXM17",1967,113,"182","夏色バーニングラブ☆Prim","MaKoTo & マシーン",97,96,193,"02:05","MXM17",1967,0,"-",4,182,125,17],
  ["ツキアカリ",170343,"Ⅳ","MXM17",1995,551,663,781,5643,"MXM17",1754,241,"207","タケノコ少年","凹ーダー凸ード",69,62,131,"01:56","MXM17",1754,0,"-",4,207,116,17],
  ["デュアルメモリ",170344,"Ⅳ","MXM17",2292,520,326,1446,6144,"MXM17",2001,291,"162","ここなつ","Hermit♣club",43,40,83,"02:01","MXM17",2002,-1,"-",4,162,121,17],
  ["ブチ上げ候！現代忍者三姉妹",170345,"Ⅳ","MXM17",1924,624,438,862,5720,"MXM17",1757,167,"192","溝口ゆうま feat. みこ♡なち♡あい","電撃ロブスター(エフェクター忍者)",65,55,120,"01:59","MXM17",1757,0,"-",4,192,119,17],
  ["プラネタジャーニー",170346,"Ⅳ","MXM17",1488,655,234,599,4941,"MXM17",1363,125,"140","U-ske feat.棗いつき","夢と希望のカタマリ～PH～",59,52,111,"01:52","MXM17",1363,0,"-",4,140,112,17],
  ["プレインエイジア(MRM REMIX)",170347,"Ⅳ","MXM17",1672,502,171,999,4850,"MXM17",1420,252,"146","モリモリあつし","月刊ミズタニ",83,84,167,"01:51","MXM17",1420,0,"-",4,146,111,17],
  ["ペタ靴と憂夜リムーバー",170348,"Ⅳ","MXM17",1327,546,185,596,4292,"MXM17",1267,60,"134","Vocal by ＯＲＩ姫","憂夜マシーン",69,66,135,"01:34","MXM17",1267,0,"-",4,134,94,17],
  ["ボーイミーツ・ブルー",170349,"Ⅳ","MXM17",2121,558,779,784,5916,"MXM17",1920,201,"184","うさぎ愛好会(cosMo×syuri22)","cosMo＠うさぎ愛好会",24,27,51,"01:57","MXM17",1920,0,"-",4,184,117,17],
  ["メルヘン風紀委員会",170350,"Ⅳ","MXM17",2123,633,362,1128,6145,"MXM17",1945,178,"188","はるなば with すずしろ&桃箱","Hermit♣club",78,76,154,"01:56","MXM17",1947,-2,"-",4,188,116,17],
  ["ラキラキ",170351,"Ⅳ","MXM17",1588,597,242,749,4967,"MXM17",1530,58,"165","Mutsuhiko Izumi & S-C-U","kamuy noko",73,68,141,"01:46","MXM17",1531,-1,"-",4,165,106,17],
  ["ロプノールの商隊",170352,"Ⅳ","MXM17",1915,616,205,1094,5678,"MXM17",1833,82,"186","Ahkuta","MaKoTo",91,84,175,"01:50","MXM17",1833,0,"-",4,186,110,17],
  ["炎夏の音",170353,"Ⅳ","MXM17",2237,412,897,928,5710,"MXM17",1948,289,"183","Vocal by 駄々子","レッドホットスクリューズ",66,73,139,"01:53","MXM17",1948,0,"-",4,183,113,17],
  ["煙",170354,"Ⅳ","MXM17",2152,678,708,766,6338,"MXM17",1953,199,"170","庭師","からあげブラザーズ",20,19,39,"01:57","MXM17",1952,1,"-",4,170,117,17],
  ["獅子奮迅",170355,"Ⅳ","MXM17",1786,807,318,661,5993,"MXM17",1707,79,"170","a_hisa vs KV.S&はらたま","MaKoTo",104,109,213,"01:58","MXM17",1707,0,"-",4,170,118,17],
  ["失敗作少女",170356,"Ⅳ","MXM17",2024,617,510,897,5899,"MXM17",1843,181,"240","かいりきベア","電撃ロブスター",50,52,102,"01:54","MXM17",1843,0,"-",4,240,114,17],
  ["銃弾は解を撃ち抜いて",170357,"Ⅳ","MXM17",2246,689,339,1218,6559,"MXM17",2106,140,"171","日向美ビタースイーツ♪","月刊ユカタニ",78,83,161,"02:05","MXM17",2106,0,"-",4,171,125,17],
  ["少女綺想曲 -G.X.N. Remix-",170358,"Ⅳ","MXM17",2004,755,373,876,6273,"MXM17",1938,66,"180","激戦の人","MaKoTo",66,75,141,"02:00","MXM17",1938,0,"-",4,180,120,17],
  ["水槽のクジラ",170359,"Ⅳ","MXM17",2228,501,662,1065,5959,"MXM17",2062,166,"206","テヅカ feat. 大西あみみ","SCバイオメトリクス",21,24,45,"01:43","MXM17",2062,0,"-",4,206,103,17],
  ["星座が恋した瞬間を。",170360,"Ⅳ","MXM17",1823,716,451,656,5794,"MXM17",1631,192,"186","BEMANI Sound Team \"DJ TOTTO feat.MarL\"","Megacycle",62,61,123,"02:02","MXM17",1631,0,"-",4,186,122,17],
  ["零の位相",170361,"Ⅳ","MXM17",1918,490,484,944,5306,"MXM17",1734,184,"190-205","kradness","ポテト亀山",59,51,110,"01:38","MXM17",1734,0,"-",4,205,98,17],
  ["創世ノート",170362,"Ⅳ","MXM17",2480,572,522,1386,6676,"MXM17",2382,98,"200","PON+wac","Antonio+Guccini",49,55,104,"02:04","MXM17",2382,0,"-",4,200,124,17],
  ["廃獄ドリームランド",170363,"Ⅳ","MXM17",1974,574,532,868,5670,"MXM17",1776,198,"165","SOUNH HOLIC feat. Nana Takahashi","MAD CHILD",51,48,99,"01:57","MXM17",1777,-1,"-",4,165,117,17],
  ["片翼のディザイア",170364,"Ⅳ","MXM17",1722,599,495,628,5241,"MXM17",1542,180,"178","Endorfin.","凹ーダー凸ード",65,69,134,"01:56","MXM17",1542,0,"-",4,178,116,17],
  ["蓬莱フェスティボー",170365,"Ⅳ","MXM17",2073,461,388,1224,5529,"MXM17",1933,140,"180","溝口ゆうま feat. みこ♡なち♡あい","Akizuki Nagomu",89,97,186,"02:01","MXM17",1933,0,"-",4,180,121,17],
  ["僕らの時間",170366,"Ⅳ","MXM17",2105,639,397,1069,6127,"MXM17",1952,153,"214","テヅカ feat. 大西あみみ","SCバイオメトリクス",40,45,85,"01:51","MXM17",1952,0,"-",4,214,111,17],
  ["焔 -MAGMA-",170367,"Ⅳ","MXM17",2261,677,700,884,6553,"MXM17",2018,243,"185","SOUND HOLIC feat.Nana Takahashi","MAD CHILD",77,77,154,"01:57","MXM17",2018,0,"-",4,185,117,17],
  ["見世物ライフ",170368,"Ⅳ","MXM17",2543,654,624,1265,7048,"MXM17",2296,247,"220","otetsu,164,蝶々P","Megacycle",103,114,217,"02:27","MXM17",2296,0,"-",4,220,147,17],
  ["蟲の棲む処",170369,"Ⅳ","MXM17",1822,388,678,756,4808,"MXM17",1594,228,"161","かめりあ feat. Nana Takahashi","MAD CHILD",32,34,66,"01:44","MXM17",1594,0,"-",4,161,104,17],
  ["物凄いスペースシャトルでこいしが物凄いうた",170370,"Ⅳ","MXM17",2394,600,411,1383,6588,"MXM17",1921,473,"175","Halozy feat. ななひら","月刊ミズタニ",78,68,146,"02:12","MXM17",1922,-1,"-",4,175,132,17],
  ["闇夜に舞うは紅の華",170371,"Ⅳ","MXM17",1550,721,261,568,5263,"MXM17",1422,128,"174","TAKU1175","SCバイオメトリクス",25,24,49,"01:43","MXM17",1422,0,"-",4,174,103,17],
  ["幽玄の桜",170372,"Ⅳ","MXM17",1780,543,474,763,5189,"MXM17",1680,100,"180","音召缶 feat.Renna","ダークダークダーク",61,64,125,"01:55","MXM17",1680,0,"-",4,180,115,17],
  ["羅生門",170373,"Ⅳ","MXM17",1991,744,687,560,6214,"MXM17",1862,129,"230","TAKU1175 × かにまゆ","ひとくちピエロ",37,33,70,"01:52","MXM17",1862,0,"-",4,230,112,17],
  ["黎明スケッチブック",170374,"Ⅳ","MXM17",2229,698,853,678,6552,"MXM17",2072,157,"238","アメツチ絵日記","ビーフジョッキー",22,20,42,"01:58","MXM17",2072,0,"-",4,238,118,17],
  ["分けるな危険！モモモモモモーイズム",170375,"Ⅳ","MXM17",1930,599,488,843,5657,"MXM17",1760,170,"200","ARM×狐夢想 feat. 桃井はるこ","狂風少年鑑定団",69,73,142,"01:56","MXM17",1760,0,"-",4,200,116,17],
  ["Royal Judgement",170376,"Ⅳ","GRV17",2008,843,447,718,6545,"GRV17",1914,94,"200","Kobaryo","cosMo＠暴走P",35,37,72,"02:01","GRV17",1914,0,"-",4,200,121,17],
  ["9TH5IN",170377,"V","EXH17",2440,782,503,1155,7226,"EXH17",2281,159,"222","ETIA.","サイバーガスタンク",40,35,75,"02:01","-","-","-","-","-",222,121,17],
  ["ANGER of the GOD",170378,"V","EXH17",2518,764,727,1027,7328,"EXH17",2291,227,"200","BlackY","七色メットスクリューズ",86,84,170,"02:34","-","-","-","-","-",200,154,17],
  ["Calamity Tempest",170379,"V","EXH17",1519,1002,259,258,6044,"EXH17",1446,73,"194","Diceros Bicornis","SALMON GASTANK",49,43,92,"01:58","-","-","-","-","-",194,118,17],
  ["Daisycutter",170380,"V","EXH17",2395,141,191,2063,5213,"EXH17",2231,164,"191","ETIA.","The Hirayasu Matsudo",215,208,423,"01:59","-","-","-","-","-",191,119,17],
  ["ENDYMION",170381,"V","EXH17",1631,721,360,550,5425,"EXH17",1512,119,"110-880","fallen shepherd ft. RabbiTon Strings","レッドホットスクリューズ",89,84,173,"02:01","-","-","-","-","-",440,121,17],
  ["Ghost Family Living In Graveyard",170382,"V","EXH17",3010,588,988,1434,7784,"EXH17",2744,266,"238","RoughSketch","MAD CHILD & Hiryasu Matsudo",97,96,193,"02:12","-","-","-","-","-",238,132,17],
  ["Lancelot ～Flame of the Rebellion～",170383,"V","EXH17",2041,1022,354,665,7148,"EXH17",1964,77,"189-216","ぺのれり","亡国の電撃ロブスター",52,44,96,"02:09","-","-","-","-","-",206,129,17],
  ["Lisa-RICCIA",170384,"V","EXH17",2482,708,482,1292,7088,"EXH17",2332,150,"205","DJ YOSHITAKA","レッドホットスクリューズ",106,98,204,"02:13","-","-","-","-","-",205,133,17],
  ["LubedeR",170385,"V","EXH17",1232,522,65,645,4030,"EXH17",1175,57,"256","C-Show","ごましお風",136,124,260,"01:54","-","-","-","-","-",256,114,17],
  ["ΛΛemoria",170386,"V","EXH17",1980,749,280,951,6207,"EXH17",1844,136,"118","MisoilePunch♪","Akizuki NagoΛΛu♪",54,50,104,"02:17","-","-","-","-","-",118,137,17],
  ["†:OLPHEUX:†",170387,"V","EXH17",1745,665,384,696,5485,"EXH17",1576,169,"276","Juggernaut.","†:凹ーダー凸ード:†",85,90,175,"01:59","-","-","-","-","-",276,119,17],
  ["OUTERHEΛVEN",170388,"V","EXH17",2100,693,549,858,6279,"EXH17",1957,143,"210","Juggernaut.","Amazeki Kagome & Akizuki Nagomu",96,90,186,"02:09","-","-","-","-","-",210,129,17],
  ["Redshift 2nd Ignition",170389,"V","EXH17",2172,613,482,1077,6183,"EXH17",1965,207,"104-230","technoplanet","Akizuki Nagomu",67,68,135,"01:59","-","-","-","-","-",212,119,17],
  ["ЯeviveR",170390,"V","EXH17",2301,848,472,981,7146,"EXH17",2170,131,"238","Diceros Bicornis","Ether99",71,70,141,"02:01","-","-","-","-","-",238,121,17],
  ["TENKAICHI ULTIMATE BOSSRUSH MEDLEY",170391,"V","EXH17",2821,925,735,1161,8417,"EXH17",2591,230,"207-282","TENKAICHI LEGENDS","SOUND VOLTEX Effectors",104,98,202,"02:44","-","-","-","-","-",207,164,17],
  ["THE凸GENERATOR",170392,"V","EXH17",1592,783,176,633,5533,"EXH17",1418,174,"255","cosMo＠暴走P","cosMo＠暴走P",55,54,109,"02:02","-","-","-","-","-",255,122,17],
  ["Trill auf G",170393,"V","EXH17",1998,695,768,535,6081,"EXH17",1902,96,"188","BEMANI Sound Team \"dj TAKA\"","G線上のロブスター",37,35,72,"02:03","-","-","-","-","-",188,123,17],
  ["voltississimo",170394,"V","EXH17",1807,820,458,529,6074,"EXH17",1725,82,"225","BEMANI Sound Team \"PHQUASE\"","～PHPHPH～",55,51,106,"01:56","-","-","-","-","-",225,116,17],
  ["Xroniàl Xéro",170395,"V","EXH17",2009,912,322,775,6754,"EXH17",1929,80,"335","かめりあ as ”menaXe inXonnu”","レッドホットスクリューズ ＸＸ TEK-A-RHYTHM",91,103,194,"02:26","-","-","-","-","-",335,146,17],
  ["θコトノハθカプセルθ",170396,"V","EXH17",1869,961,411,497,6621,"EXH17",1734,135,"228","cosMo＠暴走P","θcosMoθ暴走Pθ",52,33,85,"02:01","-","-","-","-","-",228,121,17],
  ["色を喪った街",170397,"V","EXH17",1649,742,368,539,5524,"EXH17",1542,107,"166","かめりあ feat. かめりあ","零色メソッド",81,72,153,"02:00","-","-","-","-","-",166,120,17],
  ["卑弥呼",170398,"V","EXH17",1949,876,297,776,6526,"EXH17",1872,77,"82-185","朱雀 VS 玄武","浮世魔神",57,64,121,"02:12","-","-","-","-","-",185,132,17],
  ["飄える翼追い掛けて",170399,"V","EXH17",1666,597,132,937,5123,"EXH17",1490,176,"255","かめりあ feat. かめりあ","テカタニ feat. テカタニ",129,126,255,"02:08","-","-","-","-","-",255,128,17],
  ["120秒のエンドロール",170400,"V","MXM17",2315,511,421,1383,6163,"MXM17",2127,188,"219","colorless　(からとP feat.脱線ぐーぅ)","ZANGI Bros.",109,95,204,"01:58","-","-","-","-","-",219,118,17],
  ["ABSOLUTE (EUROBEAT REMIX)",170401,"V","MXM17",1742,896,467,379,6172,"MXM17",1626,116,"90-162","Tracy vs. Yu_Asahina","サイバーガスタンク",26,28,54,"01:58","-","-","-","-","-",162,118,17],
  ["Adrenaline Rush",170402,"V","MXM17",1884,656,252,976,5736,"MXM17",1791,93,"158","siqlo","CRAIG AKAGI",88,89,177,"02:02","-","-","-","-","-",158,122,17],
  ["Afterimage d'automne",170403,"V","MXM17",2557,766,848,943,7412,"MXM17",2379,178,"232","BEMANI Sound Team \"猫叉劇団\"","鋼のビスカッチャ×サイバーガスタンク",47,44,91,"02:02","-","-","-","-","-",232,122,17],
  ["AXION",170404,"V","MXM17",1537,665,465,407,5069,"MXM17",1373,164,"160","削除","フォックスロット",27,28,55,"02:00","-","-","-","-","-",160,120,17],
  ["Believe (y)our Wings {GRA5P WAVES}",170405,"V","MXM17",2513,512,496,1505,6562,"MXM17",2302,211,"188","GRACE COLORS(かめりあ ft. 紫崎 雪、藍月なくる、荒巻、ＯＲＩ姫、かなたん、駄々子、はるの、ななひら)","名誉グレイス王国民",81,97,178,"02:03","-","-","-","-","-",188,123,17],
  ["Believe (y)our Wings {V:IVID RAYS}",170406,"V","MXM17",2258,455,515,1288,5881,"MXM17",2057,201,"188","RASIS COLORS(かめりあ ft. 紫崎 雪、ぁゅ、かぼちゃ、Kuroa*、SOPHY、みかん汁、みゅい)","元祖レイシス親衛隊長",97,89,186,"02:03","-","-","-","-","-",188,123,17],
  ["Bioslaves",170407,"V","MXM17",1824,572,310,942,5364,"MXM17",1720,104,"160","mazuka153","kamuy noko",30,32,62,"02:03","-","-","-","-","-",160,123,17],
  ["bistro twins☆☆☆",170408,"V","MXM17",2286,632,908,746,6468,"MXM17",1949,337,"228","OSTER project feat. かなたん","MAD CHILD",50,50,100,"02:02","-","-","-","-","-",228,122,17],
  ["BLACK JACKAL",170409,"V","MXM17",1786,708,428,650,5696,"MXM17",1658,128,"150","Akira Complex","CRAIG AKAGI",46,43,89,"02:03","-","-","-","-","-",150,123,17],
  ["BLAZE∞BREEZE",170410,"V","MXM17",1991,786,686,519,6340,"MXM17",1764,227,"175","BEMANI Sound Team \"TAG×PON\"","B∞フジョッキー",62,57,119,"02:00","-","-","-","-","-",175,120,17],
  ["BLIZZARD BEAT",170411,"V","MXM17",1905,748,503,654,6054,"MXM17",1749,156,"170","SOUND HOLIC feat. Nana Takahashi","鋼のビスカッチャ",49,44,93,"02:02","-","-","-","-","-",170,122,17],
  ["Blue Forest (Prog Keys Remix)",170412,"V","MXM17",1417,851,228,338,5387,"MXM17",1359,58,"150","とろまる","SALMON GRAPHY",56,47,103,"01:43","-","-","-","-","-",150,103,17],
  ["Bye or not",170413,"V","MXM17",2262,470,650,1142,5934,"MXM17",1921,341,"170","PSYQUI feat. mikanzil","レッドホットスクリューズ",46,42,88,"01:56","-","-","-","-","-",170,116,17],
  ["Chocolate Parade",170414,"V","MXM17",1998,533,583,882,5595,"MXM17",1768,230,"190","Freezer feat.妃苺","七色Chocolatière",113,112,225,"02:02","-","-","-","-","-",190,122,17],
  ["Circulator",170415,"V","MXM17",1522,486,48,988,4502,"MXM17",1370,152,"165","Reaper","おつまみロブスター",79,77,156,"01:44","-","-","-","-","-",165,104,17],
  ["clear:wings",170416,"V","MXM17",2700,529,745,1426,6987,"MXM17",2528,172,"252","かゆき","月刊ミズタニ",93,99,192,"02:02","-","-","-","-","-",252,122,17],
  ["cloche(といぼっくすうぃんぐ　みっくす)",170417,"V","MXM17",2430,680,682,1068,6900,"MXM17",2183,247,"228","coTatsu","はがねのびすかっちゃ",42,49,91,"01:58","-","-","-","-","-",228,118,17],
  ["CLOUDS FLYER -sdvx edit-",170418,"V","MXM17",1706,672,338,696,5428,"MXM17",1440,266,"177","ginkiha","Akizuki Nagomu",39,41,80,"01:54","-","-","-","-","-",177,114,17],
  ["Colorless feat. ももかみ",170419,"V","MXM17",1713,621,605,487,5289,"MXM17",1514,199,"165","Spacelectro","CRAIG AKAGI",45,46,91,"01:57","-","-","-","-","-",165,117,17],
  ["D1g1t1ze b0dy",170420,"V","MXM17",1712,573,466,673,5143,"MXM17",1582,130,"180","シルクパラソル（yoa＆かゆき） feat. まめこ","サイバーガスタンク",60,68,128,"01:57","-","-","-","-","-",180,117,17],
  ["DEEP PSYCHEDELIC STRIKER",170421,"V","MXM17",1865,690,191,984,5800,"MXM17",1767,98,"155","影虎。","凹ーダー凸ード",75,71,146,"02:01","-","-","-","-","-",155,121,17],
  ["DESIRE",170422,"V","MXM17",2082,698,426,958,6258,"MXM17",1940,142,"180","溝口ゆうま feat. 大瀬良あい","Megacycle",64,66,130,"02:00","-","-","-","-","-",180,120,17],
  ["EGOISM -Rebuild-",170423,"V","MXM17",1776,756,242,778,5820,"MXM17",1703,73,"155","HAMA topground","CRAIG AKAGI",38,43,81,"01:58","-","-","-","-","-",155,118,17],
  ["empty",170424,"V","MXM17",2092,669,826,597,6191,"MXM17",1849,243,"184","Λerdammt","サイバーガスタンク",32,25,57,"02:01","-","-","-","-","-",184,121,17],
  ["Enigma II",170425,"V","MXM17",2252,747,419,1086,6745,"MXM17",2178,74,"201","とろまる","kamuy noko",86,88,174,"01:54","-","-","-","-","-",201,114,17],
  ["Enjoy This Time",170426,"V","MXM17",2020,585,654,781,5795,"MXM17",1748,272,"170","DJ Noriken feat. yukacco","MAD CHILD",48,47,95,"02:04","-","-","-","-","-",170,124,17],
  ["Harmonia",170427,"V","MXM17",1708,548,344,816,5060,"MXM17",1577,131,"177","ATUSMI UEDA","鋼のビスカッチャ",55,56,111,"01:32","-","-","-","-","-",177,92,17],
  ["Impress (bansou Remix) ",170428,"V","MXM17",1767,697,349,721,5625,"MXM17",1685,82,"150","bansou","kamuy noko",55,59,114,"01:59","-","-","-","-","-",150,119,17],
  ["Into The Madness",170429,"V","MXM17",1880,257,499,1124,4531,"MXM17",1658,222,"155","Yuta Imai","Akizuki Nagomu",180,175,355,"01:57","-","-","-","-","-",155,117,17],
  ["Jetcoaster Windy",170430,"V","MXM17",1705,725,331,649,5585,"MXM17",1598,107,"268","BEMANI Sound Team \"dj TAKA\" feat.のの","鋼のビスカッチャ",91,85,176,"02:03","-","-","-","-","-",268,123,17],
  ["le coeur patissiere",170431,"V","MXM17",1995,544,582,869,5622,"MXM17",1765,230,"190","U-ske feat.Ri9","からあげフランソワーズ",103,79,182,"01:56","-","-","-","-","-",190,116,17],
  ["MARENOL",170432,"V","MXM17",2392,638,875,879,6698,"MXM17",2160,232,"140","LeaF","おやすみなさい。",31,32,63,"02:29","-","-","-","-","-",140,149,17],
  ["Me:Tear",170433,"V","MXM17",1986,744,315,927,6204,"MXM17",1831,155,"213","タケノコ少年 feat. 荒巻","ZANGI Bros.",42,39,81,"01:56","-","-","-","-","-",213,116,17],
  ["MICHIZURE",170434,"V","MXM17",1439,651,219,569,4831,"MXM17",1397,42,"150","708/残響P","Megacycle",70,66,136,"01:44","-","-","-","-","-",150,104,17],
  ["MilK",170435,"V","MXM17",2256,393,206,1657,5691,"MXM17",2146,110,"150","モリモリあつし","月刊ミズタニ",89,92,181,"01:58","-","-","-","-","-",150,118,17],
  ["Mischievous theater",170436,"V","MXM17",1854,736,564,554,5916,"MXM17",1684,170,"155","黒魔","鋼のビスカッチャ",46,43,89,"02:02","-","-","-","-","-",155,122,17],
  ["Non RolicK!!大冒険",170437,"V","MXM17",2476,563,612,1301,6641,"MXM17",2265,211,"230","Croire","からあげシスターズ!!",85,85,170,"02:00","-","-","-","-","-",230,120,17],
  ["ΩBIRD",170438,"V","MXM17",2216,438,652,1126,5746,"MXM17",2019,197,"178","SOUND HOLIC feat. Nana Takahashi","MaKoTo",88,89,177,"01:55","-","-","-","-","-",178,115,17],
  ["One In A Billion（Hedonist Remix）",170439,"V","MXM17",2126,621,632,873,6115,"MXM17",1971,155,"187","Remixed by Hedonist feat.Kuroa*","サイバーガスタンク",57,54,111,"01:49","-","-","-","-","-",187,109,17],
  ["Paradisus-Paradoxum／アニメ「Re:ゼロから始める異世界生活」より",170440,"V","MXM17",2014,347,736,931,5069,"MXM17",1891,123,"201","MYTH & ROID","Akizuki Nagomu",39,51,90,"01:31","-","-","-","-","-",201,91,17],
  ["Pixelated Platform",170441,"V","MXM17",1613,790,304,519,5596,"MXM17",1491,122,"137","pan","サイバーガスタンク",57,51,108,"02:04","-","-","-","-","-",137,124,17],
  ["PIZZATIME",170442,"V","MXM17",1775,484,697,594,5002,"MXM17",1584,191,"168","Tsubusare BOZZ","Akizuki Nagomu",57,44,101,"01:53","-","-","-","-","-",168,113,17],
  ["POSSESSION(Gowrock Remix)",170443,"V","MXM17",1462,798,332,332,5318,"MXM17",1303,159,"158","Gowrock","dj strachen",39,33,72,"02:00","-","-","-","-","-",158,120,17],
  ["Princess Lily",170444,"V","MXM17",2320,697,525,1098,6731,"MXM17",2210,110,"180","溝口ゆうま feat. 大瀬良あい","kamuy noko",64,59,123,"01:58","-","-","-","-","-",180,118,17],
  ["Quark",170445,"V","MXM17",2021,752,206,1063,6298,"MXM17",1956,65,"180","Hate vs Brilliance","フォックスロット",66,68,134,"02:00","-","-","-","-","-",180,120,17],
  ["Record one's Dream",170446,"V","MXM17",1770,935,289,546,6345,"MXM17",1626,144,"145","uma vs. モリモリあつし","鋼のビスカッチャ",34,34,68,"02:19","-","-","-","-","-",145,139,17],
  ["ЯegreT of MemoRy",170447,"V","MXM17",1818,740,564,514,5856,"MXM17",1571,247,"215","からとP vs タケノコ少年","凹ーダー凸ード",56,58,114,"01:50","-","-","-","-","-",215,110,17],
  ["Revolution",170448,"V","MXM17",1703,735,403,565,5611,"MXM17",1577,126,"165","lapix","MAD CHILD",58,58,116,"02:00","-","-","-","-","-",165,120,17],
  ["Sacrifice Escape: 不条理の模倣による感情と代償",170449,"V","MXM17",1525,630,236,659,4940,"MXM17",1425,100,"100","memex","鋼のビスカッチャ",51,50,101,"01:55","-","-","-","-","-",100,115,17],
  ["scary night",170450,"V","MXM17",2018,577,584,857,5767,"MXM17",1822,196,"200","岸田教団&THE明星ロケッツ","Megacycle",50,60,110,"01:56","-","-","-","-","-",200,116,17],
  ["Sharkbait",170451,"V","MXM17",1662,57,154,1451,3495,"MXM17",1527,135,"155","rhyki","ディープブルーコールドハリケーンズ (respect HM)",187,217,404,"01:57","-","-","-","-","-",155,117,17],
  ["Six String Proof",170452,"V","MXM17",1639,792,391,456,5654,"MXM17",1547,92,"130","BEMANI Sound Team \"Yvya × Mutsuhiko Izumi\"","電撃ロブスター×cosMo@暴走P",26,28,54,"01:47","-","-","-","-","-",130,107,17],
  ["Sparkle Smilin'",170453,"V","MXM17",2051,599,592,860,5899,"MXM17",1999,52,"180","BEMANI Sound Team \"Qrispy Joybox\" feat.いちか","MaKoTo",52,57,109,"01:50","-","-","-","-","-",180,110,17],
  ["Still Lonesome",170454,"V","MXM17",1848,365,749,734,4791,"MXM17",1733,115,"168","PSYQUI","サイバーガスタンク",53,52,105,"01:45","-","-","-","-","-",168,105,17],
  ["STYX HELIX（Digi-Rock Remix）",170455,"V","MXM17",1464,501,687,276,4431,"MXM17",1250,214,"128","Remixed by BEMANI Sound Team \"RealRemixer0123\" feat.かなたん","Akizuki NAgomu",41,33,74,"01:46","-","-","-","-","-",128,106,17],
  ["Sunflower Vibes",170456,"V","MXM17",2624,367,238,2019,6349,"MXM17",2450,174,"190","Dustvoxx","dj strachen",94,111,205,"02:05","-","-","-","-","-",190,125,17],
  ["The First Step",170457,"V","MXM17",1295,565,413,317,4285,"MXM17",1160,135,"132","Yooh","レッドホットスクリューズ",53,36,89,"01:58","-","-","-","-","-",132,118,17],
  ["toy boxer",170458,"V","MXM17",1377,736,202,439,4962,"MXM17",1284,93,"190","BEMANI Sound Team \"S-C-U & SYUNN\"","からあげブラザーズ",38,39,77,"01:47","-","-","-","-","-",190,107,17],
  ["Tribal Trial",170459,"V","MXM17",1546,808,336,402,5516,"MXM17",1497,49,"165","Yooh","MAD CHILD",58,52,110,"01:57","-","-","-","-","-",165,117,17],
  ["ULTRA B+K",170460,"V","MXM17",2130,661,246,1223,6243,"MXM17",1977,153,"175","nora2r","レッドホット+スクリューズ",153,152,305,"02:13","-","-","-","-","-",175,133,17],
  ["ultra turbo",170461,"V","MXM17",1665,649,344,672,5277,"MXM17",1519,146,"138","kamome sano","フォックスロット & kamuy noko",60,55,115,"02:00","-","-","-","-","-",138,120,17],
  ["VIVID DEBUT!",170462,"V","MXM17",1873,679,222,972,5783,"MXM17",1803,70,"182","#EmoCosine","Megacycle",113,113,226,"02:00","-","-","-","-","-",182,120,17],
  ["vivid landscape",170463,"V","MXM17",1667,705,336,626,5449,"MXM17",1569,98,"137","paraoka","電撃ロブスター",65,69,134,"01:59","-","-","-","-","-",137,119,17],
  ["VIVIDWAVERS",170464,"V","MXM17",1695,590,387,718,5160,"MXM17",1555,140,"140","SDVX SOUND UNION","～PH～ ver.V",69,66,135,"02:06","-","-","-","-","-",140,126,17],
  ["who I am",170465,"V","MXM17",1388,656,346,386,4744,"MXM17",1242,146,"110","カエルとネコ","凹ーダー凸ード",31,30,61,"01:59","-","-","-","-","-",110,119,17],
  ["うさぬこぬんぬんファンタジー！",170466,"V","MXM17",1670,649,315,706,5287,"MXM17",1569,101,"160","ARM(IOSYS) feat.普透明度","SHiJiMiSo Soup.☆彡",139,142,281,"01:59","-","-","-","-","-",160,119,17],
  ["エンゲージ〆ント",170467,"V","MXM17",2199,646,296,1257,6336,"MXM17",2040,159,"190-230","Croire","フォックスロット",71,72,143,"02:00","-","-","-","-","-",190,120,17],
  ["おーまい！らぶりー！すうぃーてぃ！だーりん！",170468,"V","MXM17",1900,729,305,866,5987,"MXM17",1731,169,"170","BEMANI Sound Team \"PON\" feat.NU-KO","MAD CHILD",76,79,155,"02:03","-","-","-","-","-",170,123,17],
  ["おどりましょうよ！ドラゴンさん ～転生したらゲーム曲でした～",170469,"V","MXM17",1442,696,312,434,4972,"MXM17",1326,116,"158","諸星なな feat.加藤はるか＆廣瀬祐輝","噂のジャイアントスパーク",47,48,95,"01:50","-","-","-","-","-",158,110,17],
  ["ガブリールドロップキック／アニメ「ガヴリールドロップアウト」より",170470,"V","MXM17",1538,449,174,915,4423,"MXM17",1403,135,"168","ガヴリール（CV：富田美憂）、ヴィーネ（CV：大西沙織）、サターニャ（CV：大空直美）、ラフィエル（CV：花澤香菜）","電撃ロブスター",51,42,93,"01:27","-","-","-","-","-",168,87,17],
  ["クレイジークレイジーダンサーズ",170471,"V","MXM17",2459,840,227,1392,7438,"MXM17",2306,153,"172","ビートまりお+あまね(COOL&CREATE)","電撃ロブスター",76,75,151,"02:17","-","-","-","-","-",172,137,17],
  ["ここからよろしく大作戦143",170472,"V","MXM17",2060,591,581,888,5893,"MXM17",1922,138,"184","BEMANI Sound Team \"あさき隊\"","フルトヴァルMk.2",88,83,171,"02:10","-","-","-","-","-",184,130,17],
  ["シープドリーミン",170473,"V","MXM17",2123,734,399,990,6448,"MXM17",1913,210,"220","テヅカ feat. 大西あみみ","鋼のビスカッチャ",47,48,95,"02:01","-","-","-","-","-",220,121,17],
  ["ストリーミングハート",170474,"V","MXM17",2377,592,526,1259,6530,"MXM17",2161,216,"210","DECO*27","サイバーガスタンク",47,41,88,"02:02","-","-","-","-","-",210,122,17],
  ["ハレ トキドキ メランコリック",170475,"V","MXM17",2108,388,474,1246,5380,"MXM17",2022,86,"150","ここなつ","MAD CHILD & Hirayasu Matsudo",49,50,99,"01:47","-","-","-","-","-",150,107,17],
  ["ハレ晴レユカイ／アニメ「涼宮ハルヒの憂鬱」より",170476,"V","MXM17",1531,477,353,701,4493,"MXM17",1358,173,"172","涼宮ハルヒ(CV.平野綾)、長門有希(CV.茅原実里)、朝比奈みくる(CV.後藤邑子)","cosMo@暴走Pの消失",55,50,105,"01:26","-","-","-","-","-",172,86,17],
  ["ヒトリゴト／アニメ「エロマンガ先生」OP",170477,"V","MXM17",1410,370,450,590,3930,"MXM17",1229,181,"165","ClariS","ヒーフジョッキー",55,51,106,"01:32","-","-","-","-","-",165,92,17],
  ["ふ・れ・ん・ど・し・た・い (WEREHEREMIX)",170478,"V","MXM17",1702,681,449,572,5447,"MXM17",1547,155,"170","Remixed by ボルテ学園生活部","ボルテ学園美術部",43,57,100,"01:51","-","-","-","-","-",170,111,17],
  ["ベビーステップ",170479,"V","MXM17",2450,533,810,1107,6499,"MXM17",2234,216,"200","ここなつ","べビーフジョッキー",48,50,98,"02:05","-","-","-","-","-",200,125,17],
  ["ぼくらの16bit戦争",170480,"V","MXM17",1576,549,365,662,4799,"MXM17",1365,211,"122","sasakure. UK","からあげブラザーズ(レモン派)",78,74,152,"01:53","-","-","-","-","-",122,113,17],
  ["もってけ！セーラーふく／アニメ「らき☆すた」より",170481,"V","MXM17",1377,463,348,566,4143,"MXM17",1286,91,"150","泉こなた（CV.平野 綾）、柊かがみ（CV.加藤 英美里）、柊つかさ（CV.福原 香織）、高良みゆき（CV.遠藤 綾）","cosMo@暴走P",31,26,57,"01:26","-","-","-","-","-",150,86,17],
  ["ゆりゆららららゆるゆり大事件（yuzen remix）",170482,"V","MXM17",2033,681,265,1087,6109,"MXM17",1911,122,"190","Remixed by yuzen feat.ななひら","ボルテ学園☆えふぇくたー部",68,53,121,"01:51","-","-","-","-","-",190,111,17],
  ["ようこそジャパリパークへ／アニメ「けものフレンズ」より",170483,"V","MXM17",1704,401,403,900,4611,"MXM17",1513,191,"170","どうぶつビスケッツ×PPP","ドッタンバッタン～PH～",64,65,129,"01:32","-","-","-","-","-",170,92,17],
  ["ラブキラ☆スプラッシュ",170484,"V","MXM17",1805,464,532,809,5002,"MXM17",1656,149,"152","BEMANI Sound Team \"Sota F.\" feat.いちか","DJ みさこ vs. 楊 麗華",90,89,179,"02:03","-","-","-","-","-",152,123,17],
  ["ロキ",170485,"V","MXM17",1499,434,481,584,4300,"MXM17",1377,122,"150","みきとP","レッドロックスクリューズ",54,54,108,"01:45","-","-","-","-","-",150,105,17],
  ["伊邪那美白山姫大神",170486,"V","MXM17",2783,665,842,1276,7561,"MXM17",2459,324,"190","Morrigan feat. リリィ","フォックスロット",37,48,85,"02:17","-","-","-","-","-",190,137,17],
  ["悪戯センセーション",170487,"V","MXM17",2400,554,479,1367,6462,"MXM17",2151,249,"192","森羅万象","サイバーガスタンク",76,73,149,"01:56","-","-","-","-","-",192,116,17],
  ["雲海",170488,"V","MXM17",1875,427,254,1194,5031,"MXM17",1744,131,"160","椎名　豪","Jin Majima",90,73,163,"01:52","-","-","-","-","-",160,112,17],
  ["御伽噺に幕切れを",170489,"V","MXM17",1998,452,536,1010,5352,"MXM17",1871,127,"131-203","夜叉姫神楽","サイバーガスタンク",64,56,120,"01:52","-","-","-","-","-",203,112,17],
  ["革命パッショネイト",170490,"V","MXM17",2432,764,611,1057,7156,"MXM17",2223,209,"194","日向美ビタースイーツ♪","cosMo@暴走P",68,55,123,"02:02","-","-","-","-","-",194,122,17],
  ["君は Fantasista",170491,"V","MXM17",2399,569,931,899,6505,"MXM17",2112,287,"220","杉下 トキヤ","Megacycle",68,75,143,"01:59","-","-","-","-","-",220,119,17],
  ["鏡面の波（ramble mix）",170492,"V","MXM17",2091,245,889,957,4917,"MXM17",1702,389,"175","YURiKA Remixed by BEMANI Sound Team \"DJ TOTTO\"","フォックスロット",26,22,48,"01:42","-","-","-","-","-",175,102,17],
  ["近未来百鬼夜行譚～死返之巻～",170493,"V","MXM17",1885,675,324,886,5795,"MXM17",1658,227,"165","近未来妖怪活劇をかぼちゃが謡う！　いざ！","MAD CHILD",42,48,90,"02:05","-","-","-","-","-",165,125,17],
  ["逆さま♥シンデレラパレード",170494,"V","MXM17",1442,434,381,627,4186,"MXM17",1246,196,"135","メリー・バッド・メルヘン","秋月なごむ",46,49,95,"02:06","-","-","-","-","-",135,126,17],
  ["全力ハッピーライフ",170495,"V","MXM17",2324,604,490,1230,6460,"MXM17",2147,177,"190","森羅万象","ポテト亀山",66,74,140,"02:00","-","-","-","-","-",190,120,17],
  ["太陽曰く燃えよカオス（Sol oscuro ¡Nya! Mix）",170496,"V","MXM17",1818,225,274,1319,4311,"MXM17",1750,68,"150","Remixed by BEMANI Sound Team \"U1-ASAMi\" feat.ななひら","Hirayasu Matsudo",70,72,142,"01:37","-","-","-","-","-",150,97,17],
  ["濁色踊るオートマタ",170497,"V","MXM17",1911,627,544,740,5703,"MXM17",1716,195,"205","めと（Metomate）","凹ーダー凸ード",81,83,164,"01:54","-","-","-","-","-",205,114,17],
  ["熱情のサパデアード",170498,"V","MXM17",1749,581,454,714,5241,"MXM17",1583,166,"136","日向美ビタースイーツ♪","ひとくちMethod",59,55,114,"02:03","-","-","-","-","-",136,123,17],
  ["星の詩",170499,"V","MXM17",1268,554,232,482,4198,"MXM17",1066,202,"67","しーけー feat.arinco","鋼のビスカッチャ",35,31,66,"02:01","-","-","-","-","-",67,121,17],
  ["祭囃子",170500,"V","MXM17",1600,700,311,589,5300,"MXM17",1478,122,"188","709sec. feat.Yui Chinen","Antonio Guiccini",73,67,140,"02:00","-","-","-","-","-",188,120,17],
  ["真夏の海の修道女",170501,"V","MXM17",1835,606,625,604,5488,"MXM17",1614,221,"145","bermei.inazawa","Akizuki Nagomu",32,33,65,"02:06","-","-","-","-","-",145,126,17],
  ["真夏の蜜と唇 fm. 希望の星は青霄に昇る",170502,"V","MXM17",2128,638,508,982,6170,"MXM17",2020,108,"150","ARM (IOSYS) feat. yukina(TUMENECO)","鋼のビスカッチャ",49,41,90,"02:05","-","-","-","-","-",150,125,17],
  ["零次元エクスプレス",170503,"V","MXM17",2134,888,468,778,6932,"MXM17",1981,153,"160","SOUND HOLIC feat. Nana Takahashi","鋼のビスカッチャ",49,51,100,"02:05","-","-","-","-","-",160,125,17],
  ["50th Memorial Songs -The BEMANI History-",170504,"V","VVD17",1576,683,393,500,5201,"VVD17",1437,139,"136","BEMANI Sound Team","↑↑↓↓←→←→PH",29,29,58,"01:58","-","-","-","-","-",136,118,17],
  ["DO-IT-AMA-SITE!!!",170505,"V","VVD17",1494,438,254,802,4302,"VVD17",1315,179,"135","MYUKKE.","おつまみロブスター",94,107,201,"01:58","-","-","-","-","-",135,118,17],
  ["floorkiller",170506,"V","VVD17",2278,660,615,1003,6536,"VVD17",2088,190,"210","テヅカ","ZANGI Bros.",53,49,102,"01:57","-","-","-","-","-",210,117,17],
  ["Hexennacht",170507,"V","VVD17",1919,251,290,1378,4591,"VVD17",1816,103,"165","rider","Hirayasu Matsudo (MAD CHILD Remix)",164,166,330,"01:58","-","-","-","-","-",165,118,17],
  ["Historia of Velnoti",170508,"V","VVD17",1902,769,481,652,6111,"VVD17",1775,127,"180","KV.S&はらたま","Megacycle",90,86,176,"01:59","-","-","-","-","-",180,119,17],
  ["Holy Legacy",170509,"V","VVD17",1778,716,350,712,5704,"VVD17",1641,137,"190","すのうまん","kamuy noko include",65,72,137,"01:53","-","-","-","-","-",190,113,17],
  ["Sparkling Laser Beam",170510,"V","VVD17",2024,545,376,1103,5683,"VVD17",1884,140,"170","you","フォックスロット",82,90,172,"02:00","-","-","-","-","-",170,120,17],
  ["遷",170511,"V","VVD17",1797,679,331,787,5631,"VVD17",1742,55,"151","隣の庭は青い(庭師+Aoi)","凹ーダー凸ード",72,75,147,"01:58","-","-","-","-","-",151,118,17],
  ["夢見草奇譚",170512,"V","VVD17",1650,933,397,320,6099,"VVD17",1518,132,"165","Paradise Eve feat.しゃみお","サイバーガスタンク",37,30,67,"02:01","-","-","-","-","-",165,121,17],
  ["777",170513,"Ⅵ","EXH17",3289,637,779,1873,8489,"-","-","-","777","RoughSketch(Notebook Records)","RED MAD HOT CHILDREN","-","-",0,"02:04","-","-","-","-",6,777,124,17],
  ["Chronomia",170514,"Ⅵ","EXH17",3087,585,868,1634,7929,"-","-","-","227","Lime","風瑠人","-","-",0,"02:26","-","-","-","-",6,227,146,17],
  ["onslaught -Retaliation of Bahamūt-",170515,"Ⅵ","EXH17",1886,699,445,742,5869,"-","-","-","238","かめりあ","レッドホットスクリューズ (supervised by Bahamūt)","-","-",0,"01:59","-","-","-","-",6,238,119,17],
  ["ディスコルディア",170516,"Ⅵ","EXH17",1671,759,468,444,5619,"-","-","-","180-280","ぺのれり vs. BEMANI Sound Team \"HuΣeR\"","～PH～ the Valhalla","-","-",0,"02:04","-","-","-","-",6,280,124,17],
  ["ドゥサンコオデッセイ!!",170517,"Ⅵ","EXH17",1538,909,313,316,5803,"-","-","-","160","cosMo＠暴走P","cosMo＠暴走P","-","-",0,"","-","-","-","-",6,160,"0",17],
  ["2094",170518,"Ⅵ","MXM17",1719,689,371,659,5505,"-","-","-","162","Yuta Imai vs Blacklolita","MAD CHILD vs Megacycle","-","-",0,"","-","-","-","-",6,162,"0",17],
  ["ABSOLUTE(ismK passionate remix)",170519,"Ⅵ","MXM17",2068,684,479,905,6188,"-","-","-","147-180","ismK","kamuy noko","-","-",0,"01:57","-","-","-","-",6,147,117,17],
  ["ABSOLUTE(saminun mix)",170520,"Ⅵ","MXM17",1561,640,452,469,5042,"-","-","-","61-146","あさり(saminun)","凹ーダー凸ード","-","-",0,"01:57","-","-","-","-",6,146,117,17],
  ["Blue Forest(NightBounce Remix)",170521,"Ⅵ","MXM17",1451,578,214,659,4636,"-","-","-","132","kanone","CRAIG AKAGI","-","-",0,"01:58","-","-","-","-",6,132,118,17],
  ["Chakra",170522,"Ⅵ","MXM17",1644,551,489,604,4941,"-","-","-","165","uma","CRAIG AKAGI","-","-",0,"","-","-","-","-",6,165,"0",17],
  ["Chewingood!!!",170523,"Ⅵ","MXM17",2183,622,325,1236,6232,"-","-","-","190","TORIENA","MAD CHILD","-","-",0,"01:58","-","-","-","-",6,190,118,17],
  ["Continuous Moment",170524,"Ⅵ","MXM17",1686,646,172,868,5310,"-","-","-","154","影虎。","apple kong","-","-",0,"","-","-","-","-",6,154,"0",17],
  ["Enter The Fire",170525,"Ⅵ","MXM17",1666,677,242,747,5363,"-","-","-","140","Yooh","MAD CHILD","-","-",0,"02:00","-","-","-","-",6,140,120,17],
  ["Fun walk!!",170526,"Ⅵ","MXM17",1777,468,239,1070,4958,"-","-","-","170","Enterskip","dj strassen","-","-",0,"01:53","-","-","-","-",6,170,113,17],
  ["Help me, ERINNNNNN!! #幻想郷ホロイズムver.",170527,"Ⅵ","MXM17",2664,776,639,1249,7656,"-","-","-","185","COOL&CREATE × 宝鐘マリンと愉快な仲間たち","レッドホットスクリューズと愉快な仲間たち","-","-",0,"02:15","-","-","-","-",6,185,135,17],
  ["Impress(siqlo's Hi-Tech Veats)",170528,"Ⅵ","MXM17",1741,325,278,1138,4457,"-","-","-","160","siqlo","Amazeki Kagome","-","-",0,"01:56","-","-","-","-",6,160,116,17],
  ["M-O-R-F-I-N-E",170529,"Ⅵ","MXM17",2372,452,347,1573,6100,"-","-","-","220","u-z feat.紫咲ほたる","2conノックオン","-","-",0,"02:00","-","-","-","-",6,220,120,17],
  ["Sakura Fubuki",170530,"Ⅵ","MXM17",2504,442,485,1577,6334,"-","-","-","175","Street","からあげブラザーズ","-","-",0,"01:57","-","-","-","-",6,175,117,17],
  ["SHION -sublimation mix-",170531,"Ⅵ","MXM17",2012,589,557,866,5791,"-","-","-","186","BlackY feat. Risa Yuzuki","フォックスロット","-","-",0,"02:02","-","-","-","-",6,186,122,17],
  ["Verstärkt Killer",170532,"Ⅵ","MXM17",2016,486,574,956,5490,"-","-","-","182","MALVA.","Secret Lv.09","-","-",0,"01:58","-","-","-","-",6,182,118,17],
  ["Whip☆Drip",170533,"Ⅵ","MXM17",2128,603,617,908,6065,"-","-","-","249","pan+テヅカ feat.桃雛なの","CRAIG AKAGI","-","-",0,"01:53","-","-","-","-",6,249,113,17],
  ["WILD FIRE",170534,"Ⅵ","MXM17",1739,479,380,880,4915,"-","-","-","172","がるる","dj strassen","-","-",0,"01:57","-","-","-","-",6,172,117,17],
  ["Xymatic Scope",170535,"Ⅵ","MXM17",1705,563,517,625,5099,"-","-","-","22-170","MasKaleido feat. ぁゅ","CRAIG AKAGI","-","-",0,"01:58","-","-","-","-",6,170,118,17],
  ["オルターエゴ",170536,"Ⅵ","MXM17",2099,696,467,936,6286,"-","-","-","176","Misumi","Megacycle","-","-",0,"02:14","-","-","-","-",6,176,134,17],
  ["キャプテン・マリンのケツアンカー",170537,"Ⅵ","MXM17",2413,643,792,978,6755,"-","-","-","150-190","COOL&CREATE × 宝鐘マリン","MAD CHILD","-","-",0,"02:13","-","-","-","-",6,190,133,17],
  ["キラメキ居残り大戦争",170538,"Ⅵ","MXM17",2529,727,587,1215,7239,"-","-","-","212","森羅万象","能天気 ぐるぐる ～PH～ 頭 ガチガチ","-","-",0,"02:10","-","-","-","-",6,212,130,17],
  ["トランスダンスアナーキー",170539,"Ⅵ","MXM17",2245,797,286,1162,6881,"-","-","-","195","暁Records","サイバーガスタンクEXCEED","-","-",0,"02:20","-","-","-","-",6,195,140,17],
  ["運命超過乃巡合",170540,"Ⅵ","MXM17",1776,601,370,805,5355,"-","-","-","165","Aoi feat. Gra+yanshu","電撃ロブスター","-","-",0,"01:59","-","-","-","-",6,165,119,17],
  ["神にした彼女が示す世界線",170541,"Ⅵ","MXM17",1926,494,491,941,5334,"-","-","-","157-250","上村香月","フォックスロット","-","-",0,"01:54","-","-","-","-",6,250,114,17],
  ["穢れなきユーフォリア",170542,"Ⅵ","MXM17",2047,472,531,1044,5510,"-","-","-","160","幽閉サテライト","からあげユーフォリア","-","-",0,"01:49","-","-","-","-",6,160,109,17],
  ["月下の舞兎祭",170543,"Ⅵ","MXM17",1604,610,466,528,5038,"-","-","-","152","Aoi feat. Kuroa*","レッドホットスクリューズ","-","-",0,"01:47","-","-","-","-",6,152,107,17],
  ["木洩れ日に咲く",170544,"Ⅵ","MXM17",2007,430,431,1146,5304,"-","-","-","171","seatrus feat.杠葉えりか","フォックスとロット","-","-",0,"01:57","-","-","-","-",6,171,117,17],
  ["泥の分際で私だけの大切を奪おうだなんて",170545,"Ⅵ","MXM17",1923,748,575,600,6090,"-","-","-","225","ツユ","Jin Majima","-","-",0,"02:13","-","-","-","-",6,225,133,17],
  ["叛逆のディスパレート",170546,"Ⅵ","MXM17",1854,656,538,660,5676,"-","-","-","194","Vanitas Lacrimosa","MAD CHILD","-","-",0,"01:46","-","-","-","-",6,194,106,17],
  ["響く静寂",170547,"Ⅵ","MXM17",1769,923,268,578,6307,"-","-","-","212","テヅカ","サイバーガスタンク","-","-",0,"01:59","-","-","-","-",6,212,119,17],
  ["門門しましょ",170548,"Ⅵ","MXM17",2065,444,589,1032,5462,"-","-","-","180","ビートまりお（COOL&CREATE）","XOИ","-","-",0,"02:04","-","-","-","-",6,180,124,17],
  ["恋獄対刃",170549,"Ⅵ","MXM17",1951,556,317,1078,5570,"-","-","-","190","あるふぁ＋凜々","Secret Lv.09","-","-",0,"01:54","-","-","-","-",6,190,114,17],
  ["Devastated Territory",170550,"Ⅵ","VVD17",1839,603,533,703,5487,"VVD17",1655,184,"97-195","ryhki","dj strachen","-","-",0,"02:01","-","-","-","-",6,195,121,17],
  ["Gimme dreamin'",170551,"Ⅵ","VVD17",2140,423,461,1256,5549,"VVD17",1947,193,"190","BlackY feat.Risa Yuzuki","フォックスロット feat. Amazeki Kagome","-","-",0,"01:57","-","-","-","-",6,190,117,17],
  ["Screaming!!",170552,"Ⅵ","VVD17",2021,434,511,1076,5344,"VVD17",1903,118,"135-180","CielArc","からあげスクリームズ","-","-",0,"02:01","-","-","-","-",6,180,121,17],
  ["孤月群雲に沈む",170553,"Ⅵ","VVD17",1900,560,581,759,5480,"VVD17",1697,203,"194","めと（Metomate）","MAD CHILD","-","-",0,"01:58","-","-","-","-",6,194,118,17]
]
