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
}

function transacaoNoEstoque() {

}

export {getEstoque, limpaEstoque, transacaoNoEstoque};