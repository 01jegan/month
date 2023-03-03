
let month=prompt("enter your month");

	if(month>=0 && month<=3){
		document.write("spring");}
	else if(month>=4 && month<=8){
		document.write("summer");}
	else if(month>=9 && month<=11){
		document.write(`${month} winter`);}
	else{
		document.write("novalid");}
		
	// let month=new Date();
	// let a=month.getMonth();
	// if(a>=0 && a<=3){
		// document.write("spring");}
	// else if(a>=4 && a<=8){
		// document.write("summer");}
	// else if(a>=9 && a<=11){
		// document.write("winter");}
		
// let time=new Date();
	// let b=time.getHours();
	// if(b>=0 && b<12){
		// document.write("morning");}
	// else if(b>=12 && b<=15){
		// document.write("afternoon");}
	// else if(b>=16 && b<=18){
		// document.write("evening");}
	// else if(b>=19 && b<=24){
		// document.write("night");}
		
		
	// let b=prompt("enter your time");	
	// if(b>=4 && b<=11){
		// document.write("morning");}
	// else if(b>=12 && b<=15){
		// document.write("afternoon");}
	// else if(b>=16 && b<=18){
		// document.write("evening");}
	// else if(b>=19 && b<=24){
		// document.write("night");}
	// else if(b>=1 && b<=3){
		// document.write("mintnight");}
		
	// let time=new Date();
	// let b=time.toLocaleTimeString();
	// document.write(b);