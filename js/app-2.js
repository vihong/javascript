(function(){
    
    var i = 0;
    var timer = window.setInterval(function(){
        i++;
        console.log(i);
        if (i === 10)
            window.clearInterval(3);
    }, 1000);
    console.log(timer);
})();