  function setAlt(type){
    $("#altcoin-label").text(type);
    var price=currency_convert($("#fiat").val(),$("#fiat-label").text(),$("#altcoin-label").text());
    $("#altcoin").val(price);
  }

  function setFiat(type){
    $("#fiat-label").text(type);
    var price=currency_convert($("#altcoin").val(),$("#altcoin-label").text(),$("#fiat-label").text());
    $("#fiat").val(price);
  }
  
  $("#fiat").on("input", function(){
    var price=currency_convert($("#fiat").val(),$("#fiat-label").text(),$("#altcoin-label").text());
    $("#altcoin").val(price);
  });
  $("#altcoin").on("input", function(){
    var price=currency_convert($("#altcoin").val(),$("#altcoin-label").text(),$("#fiat-label").text());
    $("#fiat").val(price);
  });
  
  $('#fiat').on('keypress', function (event) {
      if(event.which == '13'){
        var price=currency_convert($("#fiat").val(),$("#fiat-label").text(),$("#altcoin-label").text());
        $("#altcoin").val(price);
      }
  });
  $('#altcoin').on('keypress', function (event) {
      if(event.which == '13'){
        var price=currency_convert($("#altcoin").val(),$("#altcoin-label").text(),$("#fiat-label").text());
        $("#fiat").val(price);
      }
  });
  