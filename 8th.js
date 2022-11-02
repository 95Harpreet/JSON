var emp={name:'pankaj',roll:23,info:function har()                //JSON cannot use arrow function
{
   return 'name is '+this.name+ 'roll is '+this.roll
}}
console.log(emp.info())