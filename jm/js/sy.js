var i=0;
var li=$('#lb li').length;
var t=0;
var z=0;
var cl=0;
$('#lb li').eq(0).show().siblings().hide();
function ap() {
    t=setInterval(function () {
        i++;
        if(i>li-1){i=0}
        $('#lb li').eq(i).show().siblings().hide();
        $('#lb span').eq(i).addClass('cu').show().siblings('span').removeClass('cu');
    },2000)
}
ap();
$('#lb').mouseover(function () {
    clearInterval(t);
    $('#lb strong').show();
}).mouseout(function () {
    ap();
    $('#lb strong').hide()
});
$('#lb span').mouseover(function () {
    $(this).addClass('cu').show().siblings('span').removeClass('cu');
     i=$(this).index();
    $('#lb li').eq(i).show().siblings().hide();
});
$('#pre').click(function () {
    i--;
    if(i<0){i=li-1}
    $('#lb li').eq(i).show().siblings().hide();
    $('#lb span').eq(i).addClass('cu').show().siblings('span').removeClass('cu');
});
$('#ne').click(function () {
    i++;
    if(i>li-1){i=0}
    $('#lb li').eq(i).show().siblings().hide();
    $('#lb span').eq(i).addClass('cu').show().siblings('span').removeClass('cu');
})
// ======================c部分
$('#clb li').eq(0).show().siblings().hide();
function c() {
    cl=setInterval(function () {
        z++;
        if(z>4){z=0}
        $('#clb li').eq(z).show().siblings().hide();
    },1000)
}
c();
$('#c').mouseover(function () {
    clearInterval(cl);
    $('#c strong').show();
}).mouseout(function () {
    c();
    $('#c strong').hide()
});
$('#c1').click(function () {
    z--;
    if(z<0){z=4}
    $('#clb li').eq(z).show().siblings().hide();
});
$('#c2').click(function () {
    z++;
    if(z>4){z=0}
    $('#clb li').eq(z).show().siblings().hide();
})
// ======================x部分
var xl=0;
var x=0;
$('#xlb li').eq(0).show().siblings().hide();
function xb() {
    xl=setInterval(function () {
        x++;
        if(x>4){x=0}
        $('#xlb li').eq(x).show().siblings().hide();
        $('#x span').eq(x).addClass('ys').show().siblings('span').removeClass('ys');
    },1000)
}
xb();
$('#x').mouseover(function () {
    clearInterval(xl);
}).mouseout(function () {
    xb();
});
$('#x span').mouseover(function () {
    $(this).addClass('ys').show().siblings('span').removeClass('ys');
    z=$(this).index();
    $('#xlb li').eq(z).show().siblings().hide();
});
// ======================x1部分
var jl=0;
var j=0;
$('#lb_x li').eq(0).show().siblings().hide();
function jb() {
    jl=setInterval(function () {
        j++;
        if(j>4){j=0}
        $('#lb_x li').eq(j).show().siblings().hide();
    },1000)
}
jb();
$('#x1').mouseover(function () {
    clearInterval(jl);
    $('#x1 strong').show();
}).mouseout(function () {
    jb();
    $('#x1 strong').hide()
});
$('#zs_l').click(function () {
    j--;
    if(j<0){j=4}
    $('#lb_x li').eq(j).show().siblings().hide();
});
$('#zs_r').click(function () {
    j++;
    if(j>4){j=0}
    $('#lb_x li').eq(j).show().siblings().hide();
});
// ======================qy部分
$('#q1').mouseover(function () {
$('#q1 i').hide();
    $('#q1 b').show()
}).mouseout(function () {
    $('#q1 i').show();
    $('#q1 b').hide()
});
$('#q2').mouseover(function () {
    $('#q2 i').hide();
    $('#q2 b').show()
}).mouseout(function () {
    $('#q2 i').show();
    $('#q2 b').hide()
});