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

    $('#twitterDiv').click(function() {
        event.preventDefault(); // Prevents the default link behavior
        window.open('https://twitter.com/lloyd_lymon?t=5ZptFXI3qIrr2nt9xrtjmw&s=09', '_blank');
    });

    $('#facebookDiv').click(function() {
        event.preventDefault(); // Prevents the default link behavior
        window.open('https://www.facebook.com/lloyd.lymon.3?mibextid=ZbWKwL', '_blank');
    });

    $('#youtubeDiv').click(function() {
        event.preventDefault(); // Prevents the default link behavior
        window.open('https://youtube.com/@TechRookies', '_blank');
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