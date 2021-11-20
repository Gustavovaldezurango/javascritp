
var createUser = $("#create");

createUser.click(function(){
      nombr = $("#nom").val();
      trabaj = $("#trab").val(); 
    
    $.ajax({
        url: "https://reqres.in/api/users",
        type: "post", 
        data: { nombre: nombr, trabajo: trabaj },
        
        success : function(json) {
          $(' #resnombre ').text(json.nombre).appendTo($("#resnombre"));
          $(' #restrabajo').html(json.trabajo).appendTo($("#restrabajo"));
          $('  #resid').text(json.id).appendTo($("#resid"));
          $('  #rescreatedat').html(json.createdAt).appendTo($("rescreatedat"));
      },
      }).done(function() {  
      $("#estado").html("exitoso");  
      }).fail(function(){ 
      $("#estado").html("fallo"); 
      });
})


