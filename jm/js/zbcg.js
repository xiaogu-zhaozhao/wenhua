
$('#zbc ol').eq(0).show().siblings().hide();
var i=0;
$('#f').click(function () {
    i++;
    if(i>3){i=0}
    $('#zbc ol').eq(i).show().siblings().hide();

    $('#p span').eq(i).addClass('sp').show().siblings().removeClass('sp');
});
$('#p span').click(function () {
    var g=$(this).index();
    $('#zbc ol').eq(g).show().siblings().hide();
});

$('#l1 li').mouseover(function () {
    var i1=$(this).index()/2;
    $('#zbc  p').eq(i1).show();
    $('#zbc  i').eq(i1).hide();
    $('#zbc  b').eq(i1).show();
}).mouseout(function () {
    $('#zbc p').hide();
    $('#zbc b').hide();
    $('#zbc i').show();
})
$('#l2 li').mouseover(function () {
    var i2=$(this).index()/2;
    $('#l2  p').eq(i2).show();
    $('#l2  i').eq(i2).hide();
    $('#l2  b').eq(i2).show();
}).mouseout(function () {
    $('#l2 p').hide();
    $('#l2 b').hide();
    $('#l2 i').show();
})
$('#l3 li').mouseover(function () {
    var i3=$(this).index()/2;
    $('#l3  p').eq(i3).show();
    $('#l3 i').eq(i3).hide();
    $('#l3  b').eq(i3).show();
}).mouseout(function () {
    $('#l3 p').hide();
    $('#l3 b').hide();
    $('#l3 i').show();
})
