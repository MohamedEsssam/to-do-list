  var num=0;
  var pos=0;
  var x = false;
  var btn=document.getElementById("add");
  /*document.getElementById("add").addEventListener("click",function(){
    var value=document.getElementById("value").value;
    if(value) addItem(value);
    $(document).ready(function(){
        $("#add").click(function(){
            $("#add").animate({left: "-=3070px"},2000);
        });
        $("#add").click(function(){
            $("#add").animate({left: "0"});
        });
    });
    
 });
 */
//document.getElementById().style.a
/*
function completeItem(){

var val=this.parentNode
console.log(val);
val.style.transition="all 2s";
val.style.background="black";
nums++;
console.log(nums);
}
*/
$(document).ready(function(){
    $("#add").click(function(){
        var value=document.getElementById("value").value;
        if(value) addItem(value);
        $("#add").animate({right: "+=2000"},2000);
    });
    $("#add").click(function(){
        $("#add").animate({right: "12"});
    });
});
document.getElementById().style.animation="";
function removeItem() {
    var result = confirm("want to delele ?")
    if(result){
    var parent=this.parentNode;  
    parent.parentNode.removeChild(parent);
    
    }
}

function addItem(value) {
 var nums=0;
  var list=document.getElementById("todo");

  var item=document.createElement("li");
  item.classList.add("item");
  item.id=value;
  
  var remove=document.createElement("button");
  remove.classList.add("remove");
  remove.addEventListener("click",removeItem);

  var complete=document.createElement("button");
  complete.classList.add("complete");
  complete.id="complete";
  complete.addEventListener("click",function(){
    nums++;
    console.log(nums);
    var val=this.parentNode;
    console.log(val);
    if(nums%2==0){
    document.getElementById("complete").style.background="";
    val.style.transition="all 2s";
    val.style.background="rgba(255, 255, 255, 0.815)";
    }
    else{
    document.getElementById("complete").style.background="rgba(6, 6, 250, 0.61)";
    val.style.transition="all 2s";
    val.style.background="rgb(89, 129, 240)";
    }  
});

  var line=document.createElement("div");
  line.classList.add("line");
  

  var text=document.createElement("textarea");
  text.classList.add("text");
  text.innerHTML=value; 
  
  item.appendChild(text);
  item.appendChild(remove);
  item.appendChild(complete);
  item.appendChild(line);
  list.insertBefore(item,list.childNodes[0]);
}