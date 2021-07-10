$("ul").on("click","li",function(){                            // when an li is clicked inside a ul
$(this).toggleClass("completed"); 
//if li is gray
//if($(this).css("color") === "rgb(128,128,128)")
//{
  //  $(this).css({
   //     color :"black",
      //  textDecoration :"none"
//    });
//}
//else{
 //   $(this).css({
   //     color: "gray",
    //    textDecoration: "line-through"
   // });
//}
});
//click on span to delete todo
$("ul").on("click","span",function(){  
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation(); //for not to bubble with other elements
});

$("input[type='text']").keypress(function(event){   //to enter the details in the input type
    if(event.which === 13){
    //grabbing new todo text from input
    var todotext= $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " +todotext + "</li>")
}
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});