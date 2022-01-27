var task="0";
var taskCount=0;
// $("input").on("keydown",function(event){
//     if(event.which>=65 && event.which<=90){
//     task=task+event.key;
//     }
//     else if(event.which==8){
//         var backSpace=task.length-1;
//         task=task.slice(0,backSpace);
//     }
    
// })
// task=task.slice(1,task.length);


// input Capture 

document.getElementById("task-form").addEventListener("submit",function(event){
    taskCount=taskCount+1;
    event.preventDefault();
    task=document.getElementById("task-input").value;
    console.log(task);
    // Adding Element
    $(".task-hr-top").after("<div class='task"+taskCount+"'><span  id='checkbox' class=task"+taskCount+">Done</span> <li class='plain-list inline'>"+task+"</li><hr class='task-hr'></div>");
    checkbox();
});

function checkbox(){
document.getElementById("checkbox").addEventListener("click",function(event){
  var className=event.path[0].className;
   
  // Deleting task

  $("."+className).remove();
  
});

}
// if(task!=="0"){
// $("button").click(function(){
//     taskCount=taskCount+1;
//     $(".task-hr"+taskCount).after("<input type='checkbox' class=task"+taskCount+"> <li>"+task+"</li><hr class='task-hr1"+taskCount+"'>");
//     $("li").addClass("plain-list inline");
// });
    

// }