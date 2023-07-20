
var a=[20,20,40,25,25,4,23,81,81];
document.write("a=[20,20,40,25,25,4,23,81,81]"+"<br>"+"<br>");
var b=[];
a.sort();
let temporary;
for(let i=0;i<a.length;i++){
	if(a[i]!==temporary){
		b.push(a[i]);
		temporary=a[i];
	}
}
document.write(b);