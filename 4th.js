
var emp=[{name:'pankaj',roll:12},{branch:'cse'}]

console.log('elements are:---------')
for(var z in emp)
{
   for(var t in emp[z])
   {
    //console.log(emp[z][t])                  print only values
    console.log(t+"-"+emp[z][t])             //print with keys
   }
}

