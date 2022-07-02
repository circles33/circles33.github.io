function myFunction(){
	var day;
        var d = new Date().getDay();
        switch(d){
        case 0:
        day="周一";
        break;
        case 5:
        day ="周六";
        break;
        case 6:
        day ="周天";
        }
	document.getElementById("demo").innerHTML="明天是"+day;
}
