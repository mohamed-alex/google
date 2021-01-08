var others = document.querySelector(".others");
var apps = document.querySelector(".app-container");


document.addEventListener("click", function(ev){
	
	console.log(ev.target.className);
	if (ev.target.classList.contains("others")){
		
		apps.classList.toggle("disappear");
		
		}else if (!ev.target.classList.contains("others")){
			
			apps.classList.add("disappear")
		}
	
})