var a=$("body").height(),b=$("#woot").height()+$("#woot").css("margin-top")+$("#woot").css("margin-bottom");
alert(a);
alert(b);


if ( $("body").height() > $("#woot").height() ){
  $("#woot").css("z-index",1);
  $("#woot").css("position","fixed");
  $("#woot").css("bottom","0px");
  $("#woot").css("width","100%");
  $("#woot").css("height",b);
  $("#woot").css("overflow","hidden");
  $("#container").css("position","relative");
  $("#container").css("z-index",5);
  $("#container").css("margin-bottom",b);
  $("#container").css("box-shadow","0px 1px 7px rgba(0, 0, 0, 0.8)");
} else {
  $("#woot").css("z-index",1);
  $("#woot").css("position","relative");
  $("#woot").css("width","100%");
  $("#woot").css("height",$("#woot").height());
}
