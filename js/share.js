// 自动滚动拼团推荐
let ScrollBox = document.getElementById('hiddenBox');


function ScrollAuto() {
    if (ScrollBox === null) {
        clearInterval(rightScroll)
        return false
    }
    ScrollBox.scrollLeft += 1

    if (ScrollBox.scrollLeft + ScrollBox.clientWidth == ScrollBox.scrollWidth) {
        setTimeout(function() {

            ScrollBox.scrollLeft = 0;



        }, 500)
    }

}


// 再次开始滚动

let rightScroll = setInterval(ScrollAuto, 20)



// 防抖
// function debounce(fn,delay){
//     var timer = null;
//     return function(){
//         clearTimeout(timer);
//         var that = this, args  =arguments;
//         setTimeout(function(){
//             fn.apply(that,args);
//         },delay);
//     }
// }

// ScrollBox.scrollLeft = debounce(function(){
//     ScrollBox.scrollLeft += 1
// },200)



//获取页面高度
function pageHeight() {
    return document.body.scrollHeight;
}
//获取页面宽度
function pageWidth() {
    return document.body.scrollWidth;
}

/*
         倒计时
        */
let countDownArray = [{
        time: '2020/08/08 12:00:00',
        id: 1
    },
    {
        time: '2020/08/08 11:00:21',
        id: 2
    },
    {
        time: '2020/08/04 12:10:00',
        id: 3
    },
    {
        time: '2020/08/05 12:05:40',
        id: 4
    },
    {
        time: '2020/08/05 11:05:30',
        id: 5
    },
    {
        time: '2020/08/03 08:05:20',
        id: 6
    },

]

// 构造函数
function Everycountdown(time, id) {
    this.time = time;
    this.id = id;
    let shopTime = setInterval(countDown, 1000, time, id);



}
// Everycountdown('2020/08/02 12:00:00', 1)
// 根据有多少个人来new Everycountdown()
countDownArray.forEach((ele, index) => {
    new Everycountdown(ele.time, ele.id)
})


function countDown(time, id) {
    //获取当前时间
    let data = new Date();
    let now = data.getTime();
    // console.log(now)
    //设置截止时间
    let str = time;
    let endDate = new Date(str);
    let end = endDate.getTime();
    // console.log(end)
    //时间差
    let leftTime = end - now;
    var d, h, m, s;
    if (leftTime >= 0) {
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60)
            //插入到html

    } else if (leftTime < 0) {
        //插入到html
        d = h = m = s = 0;
        $('.joining').html('已结束');
        $('.bottomJoinFri').css('display', 'none');
        // clearInterval(shopTime)
    }
    //插入到html
    // 补0
    d < 10 ? d = "0" + d : d;
    h < 10 ? h = "0" + h : h;
    m < 10 ? m = "0" + m : m;
    s < 10 ? s = "0" + s : s;
    try {
        let day = document.getElementById('_d' + id);
        day.innerHTML = d;
        let hour = document.getElementById('_h' + id);
        hour.innerHTML = h
        let minue = document.getElementById('_m' + id);
        minue.innerHTML = m
        let second = document.getElementById('_s' + id);
        second.innerHTML = s
    } catch (err) {

    }

    // $("#_d").text(d );
    // $('#_h').text(h );
    // $('#_m').text(m );
    // $('#_s').text(s )
}







/*
    wx链接
*/

$('#shareWX').click(function() {
        // 回到最上方
        $('html,body').animate({ scrollTop: 0 }, 30);
        $('.shareWithOther').slideUp();
        //添加默认事件
        $('.overlay2').bind("touchstart", function(e) {
            e.preventDefault()
        })
        $('#showWx').fadeIn(1100);
        $('#showWx').fadeOut(2000);
        $('#showWx').fadeIn(1100);
        $('#showWx').fadeOut(2000);
        //解除默认事件
        function claerlink() {
            $(".overlay2").unbind("touchstart")
        }
        setTimeout(claerlink, 6000)




    })
    /*
         复制链接
     */
    // 接受后台链接


$('#copyLink').click(function() {
        $('.shareWithOther').slideUp();
        $('.overlay2').hide()
        $('.copySuccess').fadeIn(800);
        $('.copySuccess').fadeOut(1000);
        var clipboard = new ClipboardJS('#copyLink', {
            text: function() {
                return returnLink
            }
        });
        clipboard.on('success', function(e) {
            console.log(e)
        })
        clipboard.on('error', function(e) {
            console.log(e);
        });

    })
    //点击分享遮盖层消失
$('.overlay2').click(function() {
    $('.overlay2').hide();
    $('.shareWithOther').slideUp();
})

//取消分享
$('.shareWithOtherCancel').click(function() {
        $('.overlay2').hide();
        $('.shareWithOther').slideUp();
    })
    // 补充前面数字
function formatZero(num, len) {
    if (String(num).length > len) return num;
    return (Array(len).join(0) + num).slice(-len);
}
/*
           数量添加减少组件
       */
//初始化数量
let Num = 1;

//设置限制数量
const limitNum = document.getElementById('limitNum');
// let maxNum = limitNum.innerHTML;
let maxNum = limitNum ? limitNum.innerHTML : false;





// 显示数量
const innerNum = document.getElementById('showNum');
innerNum ? innerNum.innerHTML = Num : false

//减少
$('#reduceNum').click(function() {
        if (Num <= 1) {
            return false
        }
        Num--;
        innerNum.innerHTML = Num
    })
    // 添加
$('#addNum').click(function() {
    if (Num == maxNum) {
        return false;
    }
    Num++;
    innerNum.innerHTML = Num
})