// parent div
parent = document.querySelector(".parent");
//first child div
var div = document.createElement("div");
div.setAttribute("id", "newtask")
parent.appendChild(div);

//input text child of first div
var text;
text = document.createElement("input");
text.setAttribute("type", "text");
text.setAttribute("id", "text-id");
var value = text.setAttribute("placeholder", " task to be done.");
div.appendChild(text);
//add button child of first div
var add_btn = document.createElement("input");
add_btn.setAttribute("type", "button");
add_btn.setAttribute("value", "Add");
add_btn.setAttribute("id", "add");
add_btn.setAttribute("click", "");
div.appendChild(add_btn);
//secod div child of parent div
var div2 = document.createElement("div");
div2.setAttribute("id", "tasks")
parent.appendChild(div2);
console.log(document)

///////////////////////////////////


document.querySelector('#add').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("please enter a task");
    } else {
 document.querySelector('#tasks').innerHTML += `
          
        <div class="task" style="width: 100%;height: 100%;display:inline-flex;" >
                <div id="taskname" style="padding:5px;margin: 5px;width: 70%;height: 30px;background-color: white;border-radius: 500px;border-style:solid;font-size: .5cm;">
                    ${document.querySelector('#newtask input').value}
                </div>
                <button class="delete" style="margin: 5px;height:50px;width:10%;background-color:#bec2c9;border-radius: 500px;float:right;"> Delete </button>
                <button class="done" style="margin: 5px;height:50px;width:10%;background-color:#bec2c9;border-radius: 500px;float:right;"> Done </button>
        </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var done = document.querySelectorAll(".done");
        for(var i=0; i<done.length; i++){
            done[i].onclick = function toggle(){
                   if(this.classList.toggle("true")){
                    this.parentNode.childNodes[1].style.backgroundColor="lightgreen";
                   }else{
                    var y = this.parentNode.childNodes[1].style.backgroundColor="white";
                   }
            }
        }

        document.querySelector("#newtask input").value = "";
    }
    
}

////////////////////////////////
//style of body 
document.body.style.height = "100%";
document.body.style.background = "lightgray";
//style of parent div parent
document.getElementsByClassName("parent")[0].style.width = "50%";
document.getElementsByClassName("parent")[0].style.margin = "auto";
document.getElementsByClassName("parent")[0].style.marginTop = "-7%";
document.getElementsByClassName("parent")[0].style.padding = "30px 40px";
//style of first child div
document.getElementById("newtask").style.position = "relative";
document.getElementById("newtask").style.background = "";
document.getElementById("newtask").style.margin = "auto";
document.getElementById("newtask").style.padding = "20px 10px";
document.getElementById("newtask").style.borderRadius = "5px";
// style of input 
document.getElementById("text-id").style.width = "60%";
document.getElementById("text-id").style.height = "30px";
document.getElementById("text-id").style.marginLeft = "70px";
document.getElementById("text-id").style.borderRadius = "500px";
document.getElementById("text-id").style.paddingLeft = "9px";
document.getElementById("text-id").style.padding = "8px";
document.getElementById("text-id").style.css ;


//style of button
document.getElementById("add").style.width = "12%";
document.getElementById("add").style.height = "50px";
document.getElementById("add").style.borderRadius = "500px";
document.getElementById("add").style.marginLeft = "20px";
document.getElementById("add").style.backgroundColor = "#bec2c9";










