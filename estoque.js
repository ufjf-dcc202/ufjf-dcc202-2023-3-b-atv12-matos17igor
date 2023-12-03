let estoque = {
    'joao': [{
        tipo: 'maca',
        quantidade: 1
    }],
    'maria': [{
        tipo: 'maca',
        quantidade: 2
    }]
};

limpaEstoque();

function getEstoque() {
    return estoque;
}

function limpaEstoque() {
    estoque = {};
}

function transacaoNoEstoque() {

}

export {getEstoque, limpaEstoque, transacaoNoEstoque};