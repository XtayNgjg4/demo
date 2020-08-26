//初始化菜单
let detailType = 0;
//切换菜单
$(".selectMenu span").click(function() {
        let i = $(this).attr("i");
        if (detailType != i) {
            detailType = i;
            $(".active").removeClass("active");
            $(this).addClass("active");
        }
        detailType == 0 ? $(".MenuOne").show() : $(".MenuOne").hide();
        detailType == 1 ? $(".MenuTwo").show() : $(".MenuTwo").hide();
    })
    //显示全部拼团
$(".checkAll").click(function() {
    //回到最上方
    $('html,body').animate({ scrollTop: 0 }, 30);
    //添加默认事件
    $('#overlay').bind("touchstart", function(e) {
        e.preventDefault()
    })
    $('#overlay').height(pageHeight());
    $('#overlay').width(pageWidth());
    $('#overlay').show();
    $('.showDetailJoing').show();
})

/*深入查看拼单*/
$('.toJoin').click(function() {
    // 回到最上方
    $('html,body').animate({ scrollTop: 0 }, 30);
    //添加默认事件
    $('#overlay').bind("touchstart", function(e) {
        e.preventDefault()
    })
    $('#overlay').height(pageHeight());
    $('#overlay').width(pageWidth());
    $('#overlay').show();
    $('.showDetailJoing').hide();
    $('.detailDeepJoing').show();
})

/*
    参与拼团
*/
$('.joinWithOther').click(function() {
    $('.showDetailSize').slideDown();
    $('.showDetailDeep').hide()
})

/*
    关闭遮盖层和取消拼团
*/
$('.detailCancelWidth').click(function() {
    $('#overlay').hide();
    $('.showDetailJoing').hide()
    $('.detailDeepJoing').hide()
})

/*
 分享弹框
*/
$('.share').click(function() {
    $('.overlay2').height(pageHeight());
    $('.overlay2').width(pageWidth());
    $('.overlay2').show();
    $('.shareWithOther').slideDown()
})



//切换型号
let chooseSize = 0;
$('.detailChooseAllSize button').click(function() {
    let i = $(this).attr("i");
    let changePick = $(this).text();
    let picking = document.getElementById('picking');
    picking.innerHTML = changePick;
    console.log(changePick)
    if (chooseSize != i) {
        chooseSize = i;
        $('.picked').removeClass('picked');
        $(this).addClass('picked')
    }
})


// 冒泡提示
function showBubble() {
    $('.detailBubble').fadeIn(1000);
    $('.detailBubble').fadeOut(6000);
}
setInterval(showBubble, 2000)