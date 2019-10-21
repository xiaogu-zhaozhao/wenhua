$('#xw li').hover(function () {
    var p=$(this).index();
    $('#xw>li').eq(p).children('i').addClass('x').show();
},function () {
    $(this).children('i').removeClass('x');
});
var i=0;
$('#cent ol').eq(0).show().siblings().hide();
$('#fo').click(function () {
    i++;
    if(i>3){i=0}
    $('#cent ol').eq(i).show().siblings().hide();
});
$('#p span').click(function () {
    var g=$(this).index();
    $('#cent ol').eq(g).show().siblings().hide();
})