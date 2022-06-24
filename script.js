let outScreen = document.querySelector('.Resultado input');
mode = 'calc';
//Insere caracteres
function insert(numero) {
  outScreen.value += numero;
  if (mode == 'igual') {
    outScreen.value = '';
    outScreen.value += numero;
    mode = 'calc';
  };
};
//Função de deletar valores
function clean() {
  outScreen.value = '';
};
//Apagar um por um
function del() {
  outScreen.value = outScreen.value.slice(0, -1);
  if (mode == 'igual') {
    outScreen.value = ' ';
  };
};
//Calcula e mostra o resultado final
function calc() {
  try {
    outScreen.value = eval(outScreen.value);
    mode = 'igual';
  } catch (err) {
    outScreen.value = 'INVALIDO';
    mode = 'igual';
  };
};
//menu temas
let menuIcone = document.querySelector('.icone'),
  menu = document.querySelector('.menu');

menuIcone.onclick = function() {
  menu.classList.toggle('abrir');
};

 //Esc tema
let cyanTheme = document.querySelector('.cyan'),
  orangeTheme = document.querySelector('.orange'),
  pinkTheme = document.querySelector('.pink');
//Escolher tema Ciano
cyanTheme.onclick = function() {
  document.body.classList.remove('orange');
  document.body.classList.remove('pink');
  document.body.classList.add('cyan');
  menu.classList.remove('abrir');
};
//Escolher tema Laranja
orangeTheme.onclick = function() {
  document.body.classList.remove('cyan');
  document.body.classList.remove('pink');
  document.body.classList.add('orange');
  menu.classList.remove('abrir');
};
//Escolher tema Rosa
pinkTheme.onclick = function() {
  document.body.classList.remove('orange');
  document.body.classList.remove('cyan');
  document.body.classList.add('pink');
  menu.classList.remove('abrir');
};
