// This is a JavaScript file

$(document).on("click","#listarV",function(){
 
  $(location).attr('href', 'listar.html');
})

$(document).on("click", "#cadastrarV", function(){
  var parametros  = {
    "nomeProprietario":$("#nomeProprietario").val(),
    "placaVeiculo":$("#placaVeiculo").val(),
    "marcaVeiculo":$("#marcaVeiculo").val(),
    "modeloVeiculo":$("#modeloVeiculo").val(),
    "tipoV":$("#tipoV").val(),
    };

      $.ajax({
      type:"post", //Forma de envio
      url: "https://gerenciarestacionamento2.000webhostapp.com/cadastro.php",  //Local de envio
      data: parametros, // Os dados enviados
      success: function(data){ //Função de Sucesso de Cadastro
        
          navigator.notification.alert(data);
          $("#nomeProprietario").val("");
          $("#placaVeiculo").val("");
          $("#marcaVeiculo").val("");
          $("#modeloVeiculo").val("");
          $("#tipoV").val("");
      },
      error: function(data){
          navigator.notification.alert("Erro ao cadastrar");
      }
  });
});

function carregaLista(){
    $.ajax({
    type:"post", // Como vai enviar os dados
    url:"https://gerenciarestacionamento2.000webhostapp.com/listar.php", // pra onde vai enviar
    dataType:"json", // o que eu vou enviar
    // caso sucesso
    success: function(data){ 
      var itemlista = "";
      $.each(data.pizzas, function(i,dados){
        itemlista += "<option value="+dados.codigo+" title"+dados.nome+" alt"+dados.placa+">"+dados.marca+ dados.modelo + dados.tipo + "</option>"
      });
      $("#lista").html(itemlista);
    },
    // caso erro
    error: function(data){
      navigator.notification.alert("Erro ao buscar registros!");
    }
  });
}