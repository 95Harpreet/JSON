var emp={name:'pankaj',roll:23,info:function har(a,b)                //JSON cannot use arrow function
{
    var c=a+b
   return 'name is '+this.name+ ' roll is '+this.roll+' sum is '+c
}}
console.log(emp.info(12,3))