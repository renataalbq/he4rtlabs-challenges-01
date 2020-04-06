let button = document.querySelector('button');
let resultado = document.querySelector('div#resultado p');

let tempoInput = document.querySelector('input[name=tempo]');
let diasInput = document.querySelector('input[name=dias]');
let feriasInput = document.querySelector('input[name=ferias]');
let totalInput = document.querySelector('input[name=total]');


button.onclick = function() {
	let horasDiarias = parseInt(tempoInput.value);
	let diasEfetivos = parseInt(diasInput.value);
	let diasFerias = parseInt(feriasInput.value);
	let valorProjeto = parseInt(totalInput.value);

	let verify = isNaN(horasDiarias+diasEfetivos+diasFerias+valorProjeto);
	

	if(verify !== true){
		let valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )
		resultado.innerHTML = "R$: "+valorHora.toFixed(2);
	
	}else{
		alert("INSERIR NÚMEROS!");
		window.location.reload()
	}
  
}
