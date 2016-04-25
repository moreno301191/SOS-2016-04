$(document).ready(() => {

	$("#button").click(function () {

		var var_url = $("#url").val();
		var var_datos_entrada = $("#payload").val();
		var var_metodo = $('input:radio[name=method]:checked').attr("id");
		var parsedData;
		var statusCode;
		var mensajeLog;
		var cadenaLista = "";

		var objeto_javascript = JSON.stringify(var_datos_entrada);

		var request = $.ajax({
            url: var_url,
            type: var_metodo,
            data: var_datos_entrada,
            dataType: "JSON",
            contentType: "application/json"
            });


		    $("#data").text(" ");

			$("#List").text(" ");



			request.always(function(jqXHR, status) {

			statusCode = jqXHR.status;

			$("#status").text(statusCode);

			mensajeLog = "Done";

			$("#Log").text(mensajeLog);

		});




		request.done(function(data,status,jqXHR){

			statusCode = jqXHR.status;

			$("#status").text(statusCode);

			dataJS = JSON.stringify(data);

			$("#data").text(dataJS);



			for (var i=0 ; i<data.length ; i++)
			{
				elementoLista = "<li>"+"(country="+data[i].country+")(year="+data[i].year+")(primaryEducation="+data[i].primaryEducation+")(secondaryEducation="+data[i].secondaryEducation+")(tertiaryEducation="+data[i].tertiaryEducation+")"+"</li>";
				cadenaLista = cadenaLista + elementoLista;
				console.log(data[i]);

			}



			$("#List").html(cadenaLista);





			mensajeLog = "Done";

			$("#Log").text(mensajeLog);

		});




	});

	});
