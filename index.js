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