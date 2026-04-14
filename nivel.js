function subirDeNivel(nivelAtual){
    return nivelAtual + 1;
};

let meuNivel = 10;
let nivelAtualizado = subirDeNivel(meuNivel);

console.log("seu nivel atual é: " + nivelAtualizado);