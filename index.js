/**
 * Created by Administrator on 2016/9/21.
 */
$(function(){
    /***************header**************/
    $('.nav-list .search').on('click',function () {
        //alert(1)
        $('.header').addClass('searching');
        $('.header .bag')/*.removeClass('bag')*/.addClass('close');
        $('.header .close').addClass('cha');
        $('body').addClass('body')
    })
    $('.nav-list .bag').on('click',function () {
        $('.header .close').removeClass('cha');
        $('.header .bag').removeClass('close');
        $('.header').removeClass('searching');
        $('body').removeClass('body')
    })

    /*****************slist*****************/
    $('.snav-list .menu').on('click', function () {
        //alert(1)
        $('body').toggleClass('screen');
        $('.bg').toggleClass('slisting');
        $('.header').toggleClass('slisting');
        $('.header .snav-list .bag').toggleClass('bags')
    })


    /******************banner*****************/

    var slides=$('.carousel .gallery-slide a');
    var dots=$('.tab-list .dot-nav .dot');
    var moving=false

    /////////////////////////////////////////
    var moveTo=function(el,dir){
        moving=true;
        if(dir==='right'){
            slides.filter('.active')
                  .removeClass('active')
                  .addClass('leave')
                  .delay(1000)
                  .queue(function(){
                      $(this).removeClass('leave').dequeue();
                      moving=false;
                  });
            $(el).addClass('right');
            $(el).get(0).offsetWidth;
            $(el).removeClass('right').addClass('active');
        }else if(dir==='left'){
            slides.filter('.active')
                .removeClass('active')
                .addClass('right')
                .delay(1000)
                .queue(function(){
                    $(this).removeClass('right').dequeue();
                    moving=false;
                });
            $(el).addClass('active')
                 .addClass('enter')
                 .delay(1000)
                 .queue(function(){
                    $(this).removeClass('enter').dequeue();
                     //moving=false;
                 });
        }

        dots.removeClass('active').eq(slides.index(el)).addClass('active')
    }
    //////////////////////////////////////////////
    var moveRight = function(){
        if(moving){
            return;
        }
        var now=slides.filter('.active');
        var el=now.next().length ? now.next() : slides.eq(0);
        moveTo(el,'right');
    }
    /////////////////////////////////////////////
    var moveLeft = function(){
        if(moving){
            return;
        }
        var now=slides.filter('.active');
        var el=now.prev().length ? now.prev() : slides.eq(-1);
        moveTo(el,'left');
    }
    var t = setInterval(moveRight,2500);

    /////////////////////////////////////////
    dots.on('click',function(){
        //alert(1)
        //moveTo(slides.eq($(this).index()))
        var m=slides.index(slides.filter('.active'));
        var n=$(this).index();
        if(m==n){
            return;
        }
        if(m<n){
            moveTo(slides.eq(n),'right')
        }else if(m>n){
            moveTo(slides.eq(n),'left')
        }
        clearInterval(t);
    })

    /////////////////////////////////////////
    var btnLeft=$('.carousel .btn-left');
    var btnRight=$('.carousel .btn-right');
    btnRight.on('click',function(){
        moveRight();
        clearInterval(t);
    })
    btnLeft.on('click',function(){
        moveLeft();
        clearInterval(t);
    })











    /*******************footer******************/
    $('.footer .dl-box .cha').on('click',function(){
        //alert(1);
        $(this).parents().toggleClass('xiala');
    })






})