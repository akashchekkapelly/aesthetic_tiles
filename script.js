$(document).ready(function(){
    $('.gallery-list-item').click(function(){
        let value=$(this).attr('data-bs-filter');
        if(value==='all')
        {
            $('.filter').show(300);
        }
        else
        {
            $('.filter').not('.'+value).hide(300);
            $('.filter').filter('.'+value).show(300);
        }
    });

    $('.gallery-list-item').click(function(){
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });

    $('#homeBtn').click(function() {
        window.location.href = 'index.html';
    });

    $('#aboutUsBtn').click(function() {
        window.location.href = 'aboutus.html';
    });

    $('#contactUsBtn').click(function() {
        window.location.href = 'contactus.html';
    });

    window.onscroll = function () {
        var scrollposition = parseInt(document.documentElement.scrollTop);
        //console.log(scrollposition);

        if (scrollposition > 180) {
            $('.navbar').addClass('fixed-top');
        }
        else
        {
            $('.navbar').removeClass('fixed-top');
        }
    }
});
