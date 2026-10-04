const STORAGE_KEY = "organizacaoSolidariaCadastro";

export function salvarCadastro(dados) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

export function carregarCadastro() {
    const dados = localStorage.getItem(STORAGE_KEY);
    return dados ? JSON.parse(dados) : null;
}

export function limparCadastro() {
    localStorage.removeItem(STORAGE_KEY);
}
