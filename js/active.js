$(document).ready(function(){
    $('.from-main .downarrow, .form-search .downarrow, .form-responsive .downarrow').click(function(e){
        e.preventDefault();
        $(this).parent('.input-group').siblings('.placeholder-search-item').toggleClass('show');
    })
    $('.from-main .freelancers, .form-search .freelancers, .form-responsive .freelancers').click(function(e){
        e.preventDefault();
        $(this).parent('.placeholder-search-item').siblings('.input-group').children('.active-input').attr('placeholder','Find Freelancers & Agencies').focus();
        $(this).addClass('active').siblings().removeClass('active').parent().removeClass('active').toggleClass('show');
    })
    $('.from-main .jobs, .form-search .jobs, .form-responsive .jobs').click(function(e){
        e.preventDefault();
        $(this).parent('.placeholder-search-item').siblings('.input-group').children('.active-input').attr('placeholder','Find Jobs').focus();
        $(this).addClass('active').siblings().removeClass('active').parent().addClass('active').toggleClass('show');
    })
    $('.search-icon').click(function(e){
        e.preventDefault();
        $('.search-form').addClass('active');
        $(this).addClass('active');
    })
    $('.search-close').click(function(e){
        e.preventDefault();
        $('.search-form').removeClass('active');
        $('.search-icon').removeClass('active');
        $('.placeholder-search-item').removeClass('show');
    })
    $(window).resize(function(){
        if($(window).width()>991){
            $('.search-form').removeClass('active');
            $('.search-icon').removeClass('active');
            $('.placeholder-search-item').removeClass('show');
            
        }
    })
    $('.solution-toggle a').click(function(e){
        e.preventDefault();
        $(this).siblings().slideToggle();
        $(this).toggleClass("active");
        
    })
    $('.responsive-bar').click(function(e){
        e.preventDefault();
        $('.responsive-menu').toggleClass("active");
        
    })
    $('.responsive-menu-header a').click(function(e){
        e.preventDefault();
        $('.responsive-menu').toggleClass("active");
        $('.placeholder-search-item').removeClass('show');
    })
})