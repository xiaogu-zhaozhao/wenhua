$('#ce li').eq(2).show().siblings().hide();
$('#oyd li').eq(2).show().siblings().hide();
var i=0;
$('#cej li').click(function () {
    i=$(this).index();
    $('#ce li').eq(i).show().siblings().hide();
    $('#oyd li').eq(i).show().siblings().hide();
});
$('#cej li').mouseover(function () {
    i=$(this).index();
    $('#cej li').eq(i).addClass('cur').show().siblings().removeClass('cur');
})