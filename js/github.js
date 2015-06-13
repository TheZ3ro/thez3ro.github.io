var page=1;

function github(a,t){
  if(t!=null && t!=undefined){
    if($(t).hasClass("disabled")){
      return;
    }
  }

  if(!(a>1 && a<100)){
    a=1;
  }

  if(a==1){
    $("#new").addClass("disabled");
  }else{
    $("#new").removeClass("disabled");
  }

  page=a;

  $("#repo").hide( "slow" );

  var me = new Gh3.User("thez3ro")
  ,	repositories = $("#repo");

  //get some repositories of k33g
  var myRepo = new Gh3.Repositories(me);

  myRepo.fetch({page:a,per_page:6,sort:"created"},"next", function (err, res) {
    $("#repo").html('');
    $("#repo").show();
    if(err) {
      throw "outch ..."
    }
    console.log(myRepo.repositories.length);
    if(myRepo.repositories.length<6){
      $("#old").addClass("disabled");
    }else{
      $("#old").removeClass("disabled");
    }
    myRepo.eachRepository(function (repository) {
      repository.fetch(function (err, resRepo) {
      	if(err) {
      	    throw "outch ..."
      	}
      	repositories.append(
      		$('<div class="col-lg-12 r">').append(
      			$('<h2>').append((resRepo.fork ? '<span class="mega-octicon octicon-repo-forked"></span>':'') + resRepo.name),
      			$('<p>').append(resRepo.description+" <span class=\"label label-success\">"+resRepo.language+"</span>"),
      			$('<p>').append('<a class="btn btn-primary" href="'+resRepo.html_url+'">View on GitHub &raquo;</a>'+
            ((resRepo.homepage!=null && resRepo.homepage!="") ? '<a class="btn btn-primary homepage" href="'+resRepo.homepage+'">View Homepage &raquo;</a>' : ''))
      		)
      	).hide().delay(500).fadeIn('slow');
      });
    });
  });
}
