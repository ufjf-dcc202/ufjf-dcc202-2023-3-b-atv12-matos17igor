let estoque = {
    'joao': [
        {'tipo': 'maca', 'qtd': 1}
    ],
    'maria': [
        {'tipo': 'maca', 'qtd': 2}
    ]
};

limpaEstoque();

function getEstoque() {
    return structuredClone(estoque);
}

function limpaEstoque() {
    estoque = {};
    return limpaEstoque;
}

function transacaoNoEstoque() {

}

export {getEstoque, limpaEstoque, transacaoNoEstoque};