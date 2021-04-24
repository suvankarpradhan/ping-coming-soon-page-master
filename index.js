$('.noti-btn').click(()=>{
    let email = $('.search input').val();
    let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailFormat.test(email)){
        $('.error').text('');
        $('.search input').css('border-color','hsl(223, 100%, 88%)');
    }
    else{
        $('.error').text('Please provide a valid email address');
        $('.search input').css('border-color','hsl(354, 100%, 66%)');
    }
})
$('.link1').mouseenter(()=>{
    $('.link1').css('background-color','hsl(223, 87%, 63%)');
    $('.link1').html('<img src="images/facebook_f2.ico">');
})
$('.link1').mouseleave(()=>{
    $('.link1').css('background-color','#fff');
    $('.link1').html('<img src="images/facebook_f1.ico">');
})
$('.link2').mouseenter(()=>{
    $('.link2').css('background-color','hsl(223, 87%, 63%)');
    $('.link2').html('<img src="images/twitter2.ico">');
})
$('.link2').mouseleave(()=>{
    $('.link2').css('background-color','#fff');
    $('.link2').html('<img src="images/twitter1.ico">');
})
$('.link3').mouseenter(()=>{
    $('.link3').css('background-color','hsl(223, 87%, 63%)');
    $('.link3').html('<img src="images/instagram2.ico">');
})
$('.link3').mouseleave(()=>{
    $('.link3').css('background-color','#fff');
    $('.link3').html('<img src="images/instagram1.ico">');
})