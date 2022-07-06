function myFunction(){
	function Fun(name,age) {
this.name=name;
this.age=age;
}
var person = new Fun('华为',20);
	document.getElementById("demo").innerHTML=person.name+"年龄是"+person.age;
}
