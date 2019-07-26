$(function(){
	$("button").click(function(){
    	var temp1=Math.floor(Math.random()*6)+1;
    	var temp2=Math.floor(Math.random()*6)+1;
    	var image1="images/dice"+temp1+".png";
    	var image2="images/dice"+temp2+".png";

    	var t1=$(".dice").find(".img1");
    	t1.attr("src",image1);

    	var t1=$(".dice").find(".img2");
    	t1.attr("src",image2);

    	var t3=$(".dice").find(".abcd1");
    	

    	var t4=$(".dice").find(".abcd2");
    	

    	$(".abc1").css("visibility","hidden");
    	$(".abc2").css("visibility","visible");
    	if(temp1>temp2)
    	{
    		$("h1").html("Player 1 Wins");
    		t3.html("🤣");
    		t4.html("😭");
    	}
    	else if(temp1<temp2)
    	{
    		$("h1").html("Player 2 Wins");
    		t4.html("🤣");
    		t3.html("😭");
    	}
    	else
    	{
    		$("h1").html("Draw!");
    		t4.html("🤧");
    		t3.html("🤧");
    		
    	}
  });
});