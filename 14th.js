var logic={a:12,b:21,calulate:function()                               //bind
{
    var c=this.a+this.b 
    console.log('Sum is '+c)
}}
var z={a:logic.a,b:logic.b}
var chd=logic.calulate.bind(z)
setTimeout(chd,4000);