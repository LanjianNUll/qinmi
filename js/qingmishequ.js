// JavaScript Document
var word=new Array("有些梦想虽然遥不可及，但不并是不可能实现，只要我足够的强。",
"奇怪的人往往做一些奇怪的事，这一点也不奇怪。",
"如果提出的问题本身就有问题，那么答案又有什么用呢？",
"杀戮永远不是变强的理由,一个人,若以打败别人而证明自己,那他就已经输了. ",
"手中的剑为什么而挥动，只有靠你自己去寻找答案  ",
"这个世上，胜者生，而败者亡，在世事的胜负面前，生与死不过是必然的因果。",
"这个由剑开始的故事，必将用剑来终结。"
);
function oload(){
	for(var i=0;i<word.length;i++)
	document.getElementById('mainbody').getElementsByTagName('li')[i].innerHTML="大家说：	"+word[i];
	}
function talk(){
	//var ob = document.getElementById('mainbody').getElementsByTagName('li')[word.length-1];
	var ss = document.getElementById('in').value;
	document.getElementById('in').value="";
	var oj=document.getElementById('mainbody').getElementsByTagName('li');
	for( i=0;i<word.length-1;i++){
	         oj[i].innerHTML=oj[i+1].innerHTML;
			oj[i+1].innerHTML="我说：	"+ss;
			if(i==word.length-2)
			oj[i+1].style.marginLeft=50+"%";
	}
	//alert(oj[i+1].innerHTML);
	
	//ob.innerHTML="我说：	"+ss;
	
	//ob.style.textAlign="right";
	
	}
	
	
	
	