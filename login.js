function carregar(){
	  var cont =  localStorage.getItem("cont");
	  var acclog = "";
	  localStorage.setItem("acclog", acclog);
	if(cont === null){
	 localStorage.setItem("cont",0);
	} 
	//resetar o carrinho
	//tambem usado qnd a compra eh finalizada
	resetcart();
}
function resetcart(){
	localStorage.setItem("carrinho" , 0);
	var lengh = localStorage.getItem("itens");
	localStorage.setItem("itens", 0);
	for (var x = 0;x<lengh;x++){
		localStorage.removeItem("itensid" +x);
	}
}
function registra(){

var cont = localStorage.getItem("cont");


   var x = (username.value);
var x0 = (password.value);

localStorage.setItem("username" + cont,x);
localStorage.setItem("password" + cont,x0);

cont++;
localStorage.setItem("cont",cont);

}

function loga(){
	var cont = localStorage.getItem("cont");
	cont++;
var x0 = (login1.value);
var x1 = (login2.value);

for (var x = 0;x<cont;x++){
  var z0 =  localStorage.getItem("username" +x);
  var z1 =  localStorage.getItem("password" +x);
  if(x0 == z0 && x1 == z1){
alert("Login Efetuado com sucesso!");
localStorage.setItem("acclog", x0);
localStorage.setItem("carrinho", 0);
localStorage.setItem("itens", 0);
x = cont;
troca2();
} else {
console.log("try Again");
}

}


}


function troca(){
document.getElementById('dois').style.display = 'inherit';
    	document.getElementById('um').style.display = 'none';}
function troca2(){
	//para qnd logado
    	document.getElementById('treis').style.display = 'inherit';
    	document.getElementById('dois').style.display = 'none';
    }


function troca3(){
document.getElementById('dois').style.display = 'none';
    	document.getElementById('um').style.display = 'inherit';}