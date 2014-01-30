var a=$("body").height(),b=$("#footer").height()+$("#footer").css("margin-top").replace(/\px/g,"");+$("#footer").css("margin-bottom").replace(/\px/g,"");;
alert(a);
alert(b);

/*
if ( $("body").height() > $("#footer").height() ){
  $("#footer").css("z-index",1);
  $("#footer").css("position","fixed");
  $("#footer").css("bottom","0px");
  $("#footer").css("width","100%");
  $("#footer").css("height",b);
  $("#footer").css("overflow","hidden");
  $("#container").css("position","relative");
  $("#container").css("z-index",5);
  $("#container").css("margin-bottom",b);
  $("#container").css("box-shadow","0px 1px 7px rgba(0, 0, 0, 0.8)");
} else {
  $("#footer").css("z-index",1);
  $("#footer").css("position","relative");
  $("#footer").css("width","100%");
  $("#footer").css("height",$("#footer").height());
}
*/
