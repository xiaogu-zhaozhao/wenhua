$('#y1').mouseover(function () {
    $('#y1 img').show()
}).mouseout(function () {
    $('#y1 img').hide()
})
$('#y2').mouseover(function () {
    $('#gj').show()
}).mouseout(function () {
    $(' #gj').hide()
})
// ===========二级
$('#ej ol').eq(0).show().siblings('ol').hide();
$('#yj>li').mouseover(function () {
    $('#ej').stop().fadeIn(300)
    $(this).addClass('cur ').siblings().removeClass('cur');
    var i=$(this).index();
    $('#ej ol').eq(i).show().siblings('ol').hide();
}).mouseout(function () {
    $(' #ej').stop().fadeOut(300)
});