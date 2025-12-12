function shout(msg){
    return msg.toUpperCase();
}
function processMessage(fn){
    console.log(fn("i love u"))
}
processMessage(shout)