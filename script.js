//your JS code here. If required.
let para=document.getElementById("status");
let bttn= document.getElementById("enterBtn");
bttn.addEventListener("click",function(){
	para.innerText="Entered Metaverse";
	let head=document.createElement('h1');
	head.innerText=para.innerText;
	para.replaceWith(head);
});
