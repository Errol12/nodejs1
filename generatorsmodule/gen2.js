function TimeDelay(ptime,callback)
{
    setTimeout(function(){
        callback(" pausing for "+ptime);
    },200);
}

TimeDelay(100,function(){
    console.log("hello world");
})