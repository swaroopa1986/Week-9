function count(){
	var i;
	for(i=99;i>0;i--)
	{
		document.getElementById("main").innerHTML+= "<br /> " +i+ "bottles of beer on the wall," +i+ "bottles of beer <br/> Take one down and pass it around," + (i-1) + "bottles of beer on the wall <br/>";
	}
    if(i>=1){
	    document.getElementById("main").innerHTML+= "<br /> " +i+ "bottles of beer on the wall," +i+ "bottles of beer <br/> Take one down and pass it around," + (i-1) + "bottle of beer on the wall <br/>";
	}
      		
	document.getElementById("main").innerHTML+= "<br /> No more bottles of beer on the wall,no more bottles of beer <br/> Go to store and buy some more,99 bottles of beer on the wall";
    	
}