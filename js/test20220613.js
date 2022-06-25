function myFunction(){
	var x="",i=1;
	while (i<10){
        var m=1;
        while(m<10){
		x=x + i + "乘以" + m + "等于" + i*m+ "<br>";
	        m++;
	}
        i++;
        }
	document.getElementById("demo").innerHTML=x;
}
