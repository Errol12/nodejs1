function TimeDelay(ptime,callback)
{
    setTimeout(function(){
        callback(" pausing for "+ptime);
        console.log(" pausing for "+ptime);
    },200);
}


function* Message(){
    console.log(yield(TimeDelay(1000,function(){})));
}