$(function () {
    $('#st b').hide();
    $('#st li').mouseover(function () {
        var p = $(this).index();
        $('#st b').eq(p).stop().show();
    }).mouseout(function () {
        var p = $(this).index();
        $('#st b').eq(p).stop().hide();
    })
});


    var i=0;
    var x=0;
function right() {
    x++;
    if(i>5){i=0;
        $('#xbi ul').css({'marginLeft':0})
    }

    $('#xbi ul').animate({marginLeft:i*'-240'+'px'},1440,function () {
        $(this).css({marginLeft:i*'-240'+'px'}).children('li:first').appendTo(this)
    })
}
function left() {
    x--;
    if(i<0){i=5;
    $('#xbi ul').css({'marginLeft':1200})}
    $('#xbi ul').animate({marginLeft:i*'240'+'px'},1440,function () {
        $(this).css({marginLeft:i*'240'+'px'}).children('li:last').prependTo(this)
    })
}
var b=0;
function c(){
    b=setInterval(function () {
        right();
    },3000)
}
c();

$('#xbig').hover(function () {
    clearInterval(b);
},function () {
    c();
})


$('#ne').click(function () {
    left()
})
$('#pre').click(function () {
    right()
})






