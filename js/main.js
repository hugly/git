/**
 * Created by shirley on 15/1/15.
 */
//      rem响应式宽度
$(document).ready(function(){

    var scrennWidth =  window.screen.width*window.devicePixelRatio;
    var basic = scrennWidth/25.6;
    $('html').css({
        'font-size':basic+'px',
        'width':scrennWidth
    });


//      查看更多
    $('.more').click(function(){
        var li = $('.list ul li').first().clone();
        li.appendTo($('.list ul'));
    });


//      日历
    $('td').on('touchstart', function(){
        $('td').removeClass('focus');
        $(this).addClass('focus');
    });

    if($('.characteristic').length>0){
        touch.on('.title','tap',function(){
            if($(this).next().attr('isDis')=="true"){
                $(this).next().css({
                    "display":"none"
                });
                $(this).next().attr({
                    'isDis':false
                });
                $(this).find("img").css({
                    'transform':'rotate(90deg)'
                });
            }else{
                $(this).next().css({
                    "display":"block"
                });
                $(this).next().attr({
                    'isDis':true
                });
                $(this).find("img").css({
                    'transform':'rotate(270deg)'
                });
            }
        });
    }

    var value;
    $('input').on('focus',function(){
        value=$(this).attr("data");
        if($(this).val()==value){
            $(this).val("");
        }
    });

    $('input').on('blur',function(){
        if($(this).val()==""){
            $(this).val(value);
        }
    });

});





