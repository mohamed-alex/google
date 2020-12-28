var others = document.querySelector(".others");
var apps = document.querySelector(".app-container");
var i;
/*others.onclick = function(){
apps.classList.toggle("disappear")
	
}
window.onclick = function(){
	
	apps.classList.toggle("disappear")

}*/


document.addEventListener("click", function(ev){
	
	console.log(ev.target.className);
	if (ev.target.tagName == "I"){
		
		apps.classList.toggle("disappear");
		
		}else if (ev.target.tagName !== "I"){
			
			apps.classList.add("disappear")
		}
	
})