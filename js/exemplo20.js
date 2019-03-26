let funionarios = document.getElementById("tabela-funcionarios");
let qt_linhas = funcionarios.getElementByTagName("tr").length;

alert(qtd_linhas);


function qtd_linhas() {
  let funcionarios = document.getElementById("tabela-funcionarios");
  let qtd_linhas = document.getElementByTagName("tr").length;
  return qtd;
}

function limpar_formulario() {
    //to do 
}

function inserir_funcionario(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let sexo = "a definir";
    if (document.getElementById("masculino").checked) {
        sexo = "Masculino";
       }  else{
           sexo = "Feminino";
       }
       adicionar_tabela(nome, sexo, idade);
       limpar_formulario();
}

function adicionar_tabela(nome, sexo, idade) {
    let tabela = document.getElementById("tabela-funcionarios");
    let linha = tabela.insertRow(qtd_linhas());

    let td_nome = linha.insertCell(0);
    let td_sexo = linha.insertCell(1);
    let td_idade = linha.insertCell(2);

    td_nome.innerHTML = nome;
    td_nome.innerHTML = sexo;
    td_nome.innerHTML = idade;

}