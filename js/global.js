//rem
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 750) {
        docEl.style.fontSize = '100px';
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
      }
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

//tab
$(".toggleNav a").click(function () {
  $(this).addClass("active").siblings().removeClass("active")
  $(".toggleList").eq($(this).attr("data-id")).addClass("current").siblings().removeClass("current")
})

//判断订单列表是否为空
for (let index = 0; index < $(".orderList").length; index++) {
  if ($(".orderList").eq(index).children(".item").length <= 0) {
    $(".orderList").eq(index).children(".orderNullCenter").css("display", "block")
    $(".orderList").eq(index).children(".end").css("display", "none")
  }
}

$(".buyTag span").click(function () {
  $(this).toggleClass("current")
  $(this).siblings().removeClass("current")
  $(this).parents(".buyItem").siblings(".buyItem").find(".buyTag span").removeClass("current")
})

$(".buyBox").click(function () {
  $(this).siblings(".buyTagList").stop().slideToggle()
  // $(this).find(".BuyToggleBtn").css("transform","rotateZ(0)")
    $(this).find(".BuyToggleBtn").toggleClass("open")
})


//订单详情头部渐变
$(".proCatsRight").scroll(function () {
  if ($(".proCatsRight").scrollTop() >= $(".proListSelect").offset().top) {
    $(".proListSelect").addClass("fixed")
  } else {
    $(".proListSelect").removeClass("fixed")
  }
});


//订单弹出
$(".smhx").click(function () {
  $(".mark").fadeIn(200)
  $(".openBox").fadeIn(400)
})
$(".mpClose").click(function () {
  $(".mark").fadeOut()
  $(".openBox").fadeOut()
})

$(".couponOpen").click(function () {
  $(".mark").fadeIn(200)
  $(".upBox").css("bottom", "0")
})
$(".upBoxTop").click(function () {
  $(".mark").fadeOut()
  $(".upBox").css("bottom", "-60%")
})


//购物车数量
$(".numberBox #numAdd").click(function(){
  var n=$(this).prev().val();
  var num=parseInt(n)+1;
  if(num==0){ return;}
     $(this).prev().val(num);
     acount()
});
$(".numberBox #numRdu").click(function(){
  var n=$(this).next().val();
  var num=parseInt(n)-1;
  if(num==0){ return}
  $(this).next().val(num);

  acount()
 });
 $("#ctrl").click(function () {
  $(this).css("color", "#E5433F")
  $(".goBtn").toggleClass("none")
})
//全选
$("#allCheckbox").click(function () {
  if ($("#allCheckbox").prop('checked')) {
      $(".item").find(".itemCheckbox").prop('checked', 'true')
  } else {
      $(".item").find(".itemCheckbox").prop('checked', false)
  }
  acount()
})
$(".item .itemCheckbox").change(function () {
  var checkedCount = $(".item .itemCheckbox:checked").length;
  var itemCount = $(".item .itemCheckbox").length
  if (checkedCount == itemCount) {
      $("#allCheckbox").prop('checked', 'true')
  } else {
      $("#allCheckbox").prop('checked', false)
  }
  acount()
})
//购物车计算
 function acount() {
  var count = 0;
  for (var i = 0; i < $(".item").find(".itemCheckbox:checked").length; i++) {
      count = count + parseInt($(".itemCheckbox:checked").parents(".item").find("#itemPrice").eq(i).text())*$(".itemCheckbox:checked").parents(".item").find(".itemNum").eq(i).val()
  }
  $("#TotalPrice").text('￥' + count)
}