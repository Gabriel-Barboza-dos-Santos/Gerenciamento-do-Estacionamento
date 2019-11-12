// This is a JavaScript file

$(document).ready(function() {
    M.updateTextFields();
});

$(document).on("click","#listarV",function(){
 
  $(location).attr('href', 'listar.html');
})

$(document).on("click","#pagamentoV",function(){
 
  $(location).attr('href', 'pagamento.html');
})


$(document).on("click", "#cadastrarV", function(){
  var parametros  = {
    "nomeProprietario":$("#nomeProprietario").val(),
    "placaVeiculo":$("#placaVeiculo").val(),
    "marcaVeiculo":$("#marcaVeiculo").val(),
    "modeloVeiculo":$("#modeloVeiculo").val(),
    "dataEntrada":$("#dataEntrada").val(),
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
          $("#dataEntrada").val("");
          $("#tipoV").val("");
      },
      error: function(data){
          navigator.notification.alert("Erro ao cadastrar");
      }
  });
});

$(document).on("click", "#pesquisaV",function(){
      var parametro ={
      "placa":$("#placaVeiculo").val()
    };
    
    $.ajax({
    type:"post", // Como vai enviar os dados
    url:"https://gerenciarestacionamento2.000webhostapp.com/listar.php",
    data: parametro, // pra onde vai enviar
    dataType:"json", // o que eu vou enviar
    // caso sucesso
    success: function(data){
        $("#codigoVeiculo").val(data.veiculos.codigo);
        $("#nomeProprietario").val(data.veiculos.nome);
        $("#marcaVeiculo").val(data.veiculos.marca);
        $("#modeloVeiculo").val(data.veiculos.modelo);
        $("#dataEntrada").val(data.veiculos.entrada);   
        $("#tipoV").val(data.veiculos.tipo);                
  },
    // caso erro
    error: function(data){
      navigator.notification.alert("Erro ao buscar registros!");
    }
  });
});

$document.on("change", "#dataSaida", function(){
function preencheHora(){
    var hora = "";
    for(var x = 0; x <= 23; x++){
      if(x <= 9){
        hora+="<option value="+x+">0"+x+"</option>";
      }else{
        hora+="<option value="+x+">"+x+"</option>";
      }
    }
    $("#dataEntrada").html(hora);
    $("#dataSaida").html(hora);
}

function preencheMinuto(){
  var minuto = "";
    for(var x = 0; x <= 59; x++){
      if(x <= 9){
        minuto+="<option value="+x+">0"+x+"</option>";
      }else{
        minuto+="<option value="+x+">"+x+"</option>";
      }
    }
    $("#minutoEntrada").html(minuto);
    $("#minutoSaida").html(minuto);
}
var total = ((horaSaida + (minutoSaida/60)) - (horaEntrada + (minutoEntrada/60))) * valorHora;

})

$(document).on("click", "#pagamentoV", function(){
  var parametros  = {
    "dataSaida":$("#dataSaida").val(),
    };

      $.ajax({
      type:"post", //Forma de envio
      url: "https://gerenciarestacionamento2.000webhostapp.com/cadastro.php",  //Local de envio
      data: parametros, // Os dados enviados
      success: function(data){ //Função de Sucesso de Cadastro
        
          navigator.notification.alert(data);
          $("#dataSaida").val("");

      },
      error: function(data){
          navigator.notification.alert("Erro no pagamento");
      }
  });
});