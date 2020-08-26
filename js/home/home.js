

// 选中底部按钮
// let bottomChange = document.querySelector('#changeBottom')
// let bottomChange = document.getElementById('changeBottom');
// bottomChange.onclick = function (e) {
//     let bottomReset = [];
//     console.log(e)
//     for (let i = 1; i < 5; i++) {
//         bottomReset[i] = `<span >
//         <img src="./shouye/cut/bottom/${i}.png" alt="" id="${i}">
//     </span>`
//     }
//     let BottomStr = bottomReset.join("");
//     bottomChange.innerHTML = BottomStr;

//     let imgsId = e.target.id;
//     let image = document.getElementById(imgsId);
//     console.log(image)
//     image.setAttribute('src',`./shouye/cut/bottom/${imgsId+1}.png`)

// }

// 自动滚动拼团推荐
let ScrollBox = document.getElementById('hiddenBox');
if (ScrollBox) {
  function ScrollAuto(){
      // ScrollBox.scrollLeft +=ScrollBox.clientWidth;
      ScrollBox.scrollLeft +=1
      if(ScrollBox.scrollLeft+ScrollBox.clientWidth  == ScrollBox.scrollWidth){
          backScroll()
      }
      
  }
  // let rightScroll = setInterval(ScrollAuto,3000)
  let rightScroll = setInterval(ScrollAuto,80)
  // 回滚拼团
  function backScroll(){
    ScrollBox.scrollLeft=0
  }
}

//地址转化
function change_link(str){
  var sid = getQueryVariable('sid');
  if (sid) {
   str += '&sid='+sid;
  }
  return str;
}
  //获取url参数
function getQueryVariable(variable){

     var query = window.location.search.substring(1);
     var vars = query.split("&");
     for (var i=0;i<vars.length;i++) {
         var pair = vars[i].split("=");
         if(pair[0] == variable){return pair[1];}
     }
     return(false);
}