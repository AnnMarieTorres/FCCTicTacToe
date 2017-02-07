

var player;
var turn = 1;
var clickValue;
var spot=[];
var compMove=-1;

$(document).ready(function(){

	 $('.boardButtons').prop("disabled",true);
	 $('.xo').prop('disabled',true);
	 $('#p1').css('font-weight','Bold');
	 $('#p1').css('background-color','white');


	 $('button').click(function(){
	 	clickValue=$(this).attr('value');
	 	console.log(clickValue);
	 	if(clickValue==='play'){
		 		$('.xo').prop('disabled',false);
		 		$('.play').prop('disabled',true);
		 		$('#p1').css('font-weight','normal');
		 		$('#p1').css('background-color','pink');
		 		$('#p2').css('font-weight','Bold');
		 		$('#p2').css('background-color','white');	
	 		}
	 	if(clickValue==='x'||clickValue==='o'){
	 			$('.boardButtons').prop("disabled",false);	
	 			$('#p2').css('font-weight','normal');
	 			$('#p2').css('background-color','pink');
	 			$('.xo').prop('disabled',true);
		 	if(clickValue==='x'){
		 		player=true;
		 		//game with x first
		 		console.log('player===true '+clickValue)


		 	}else if(clickValue==='o'){
		 		player=false;
		 		console.log('player===false '+clickValue)
		 		//game with o first
		 	}
	 	}
	 	if(clickValue==='reset'){
	 		reset();
	 	}
	 
	 	if(clickValue==='1'||clickValue==='2'||clickValue==='3'||clickValue==='4'||clickValue==='5'||clickValue==='6'||clickValue==='7'||clickValue==='8'||clickValue==='9'){
	 		console.log('gamePlay '+turn);

	 		gamePlay(clickValue);
	 		

	 	}

	 });

	 function gamePlay(value){
	 	if (player===true){
	 		if (turn%2===1){
	 			//put a X in the #clickValue
	 			$('#'+value).html('X');
	 			$('#'+value).prop('disabled',true);
	 			console.log('this is player true %2 true '+turn%2+' turn: '+turn);
	 			spot[value-1]='X';
	 			turn++;
	 			computerMove();
	 			checkWin();
	 			
	 			
	 		}else{
	 			//put a O in the #clickValue
	 			$('#'+value).html('O');
	 			$('#'+value).prop('disabled',true);
	 			console.log('this is player true %2 false '+turn%2+' turn: '+turn);
	 			spot[value-1]='O';
	 			turn++;
	 			checkWin();
	 			
	 		}
	 	}else if(player===false){
	 		if(turn%2===1){
	 			$('#'+value).html('O');
	 			$('#'+value).prop('disabled',true);
	 			console.log('this is player false %2 true'+player+' turn: '+turn);
	 			spot[value-1]='O';
	 			turn++;
	 			computerMove();
	 			checkWin();
	 			
	 			
	 		}
	 		else{
	 			$('#'+value).html('X');
	 			$('#'+value).prop('disabled',true);
	 			console.log('this is player false %2 false'+player+' turn: '+turn);
	 			spot[value-1]='X';
	 			turn++;
	 			checkWin();
	 			
	 		}
	 	}
	 	console.log(spot);

	 }
	 function checkWin(){
	 	if((spot[0]==='X'&&spot[1]==='X'&&spot[2]==='X')||
	 		(spot[3]==='X'&&spot[4]==='X'&&spot[5]==='X')||
	 		(spot[6]==='X'&&spot[7]==='X'&&spot[8]==='X')||
	 		(spot[0]==='X'&&spot[3]==='X'&&spot[6]==='X')||
	 		(spot[1]==='X'&&spot[4]==='X'&&spot[7]==='X')||
	 		(spot[2]==='X'&&spot[5]==='X'&&spot[8]==='X')||
	 		(spot[0]==='X'&&spot[4]==='X'&&spot[8]==='X')||
	 		(spot[2]==='X'&&spot[4]==='X'&&spot[6]==='X')){
	 		window.alert("X Wins");
	 		reset();
	 	}else if((spot[0]==='X'&&spot[1]==='X'&&spot[2]==='X')||
	 		(spot[3]==='O'&&spot[4]==='O'&&spot[5]==='O')||
	 		(spot[6]==='O'&&spot[7]==='O'&&spot[8]==='O')||
	 		(spot[0]==='O'&&spot[3]==='O'&&spot[6]==='O')||
	 		(spot[1]==='O'&&spot[4]==='O'&&spot[7]==='O')||
	 		(spot[2]==='O'&&spot[5]==='O'&&spot[8]==='O')||
	 		(spot[0]==='O'&&spot[4]==='O'&&spot[8]==='O')||
	 		(spot[2]==='O'&&spot[4]==='O'&&spot[6]==='O')){
			window.alert("O Wins");
	 		reset();
	 	}else if(turn===10){
	 			window.alert("draw no winner");
	 			reset();
	 		}
	 }
	 function reset(){
	 	spot=[];
	 	turn = 1;
	 	for(x=1;x<10;x++){
	 		$('#'+x).html('');

	 	}
	 	compMove=-1;
	 	
		$('.play').prop('disabled',false);
		$('.boardButtons').prop("disabled",true);
		$('.xo').prop('disabled',true);
		$('#p1').css('font-weight','Bold');
		$('#p1').css('background-color','white');

	 }
	 function computerMove(){
	 	
	 	while(compMove===-1|| spot[compMove-1]==='X'||spot[compMove-1]==='O'&&turn<9){
	 		compMove=((Math.random()*8)+1).toFixed();
	 		console.log('this is the compMove: '+compMove);
	 	}
	 	
	 	gamePlay(compMove);
	 	checkWin();
	 }
});