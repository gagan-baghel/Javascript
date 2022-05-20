function getAndUpdate(){
	let tit = document.getElementById("title").value;
    let desc = document.getElementById("description").value;
    if(localStorage.getItem('itemsJson')==null){
	    itemJsonArray = [];
	    itemJsonArray.push([tit,desc]);
	    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray)); 
    }
    else{
	itemJsonArraystr = localStorage.getItem('itemsJson'); 
	itemJsonArray = JSON.parse(itemJsonArraystr); 
	itemJsonArray.push([tit,desc]);
	localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray)); 
    } 
    update()

}
function update(){
	if(localStorage.getItem('itemsJson')==null){
		itemJsonArray = [];
		localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray)); 
	}
	else{
		itemJsonArraystr = localStorage.getItem('itemsJson'); 
		itemJsonArray = JSON.parse(itemJsonArraystr); 
	    } 
    //populate the tableLayout:
    tbody=document.getElementById("tbody"); 
    let str = "";
    itemJsonArray.forEach((element,index=1) => {
	    str+=`
	<tr>
			    <th scope="row">${index +1}</th>
			    <td>${element[0]}</td>
			    <td>${element[1]}</td>
			    <td><button class="btn btn-sm btn-primary" onclick=deleted(${index})>Delete</button></td>
	</tr>`
	    
    });
     tbody.innerHTML=str;
}
add = document.getElementById("add")
add.addEventListener("click", getAndUpdate);
update();

function deleted(index){
    console.log("delete button clicked");
    itemJsonArraystr = localStorage.getItem('itemsJson'); 
    itemJsonArray = JSON.parse(itemJsonArraystr); 
    itemJsonArray.splice(index,1);
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray)); 
    update();
}

function cleared(){
	alert("you are clearing your todo list ");
	if(confirm("do you really want to clear	all the data?")){
    localStorage.clear();
    update();
}


}