import { salvarCadastro, carregarCadastro, limparCadastro } from "./storage.js";

const regras = {
    nome: {
        validar: valor => valor.trim().length >= 3,
        mensagem: "Informe seu nome completo."
    },
    cpf: {
        validar: valor => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(valor),
        mensagem: "Use o formato 000.000.000-00."
    },
    email: {
        validar: valor => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),
        mensagem: "Informe um e-mail válido."
    },
    telefone: {
        validar: valor => /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(valor),
        mensagem: "Use o formato (00) 00000-0000."
    },
    cep: {
        validar: valor => /^\d{5}-\d{3}$/.test(valor),
        mensagem: "Use o formato 00000-000."
    }
};

export function initFormulario() {
    const form = document.querySelector("#cadastro-form");
    if (!form) return;

    const status = document.querySelector("#form-status");
    restaurar(form);

    form.querySelectorAll("input, select").forEach(campo => {
        campo.addEventListener("input", () => validarCampo(campo));
        campo.addEventListener("change", () => validarCampo(campo));
    });

    aplicarMascara("#cpf", valor => valor.replace(/\D/g, "").slice(0, 11)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2"));

    aplicarMascara("#telefone", valor => valor.replace(/\D/g, "").slice(0, 11)
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d{1,4})$/, "$1-$2"));

    aplicarMascara("#cep", valor => valor.replace(/\D/g, "").slice(0, 8)
        .replace(/(\d{5})(\d{1,3})$/, "$1-$2"));

    const params = new URLSearchParams(location.search);
    const interesse = params.get("interesse");
    const opcoes = form.elements.interesse;
    if (interesse && opcoes) opcoes.selectedIndex = Number(interesse) + 1;

    form.addEventListener("submit", event => {
        event.preventDefault();

        let valido = true;
        form.querySelectorAll("input[required], select[required]").forEach(campo => {
            if (!validarCampo(campo)) valido = false;
        });

        if (!valido) {
            status.hidden = false;
            status.className = "form-status";
            status.textContent = "Revise os campos destacados antes de continuar.";
            form.querySelector(".input-erro")?.focus();
            return;
        }

        const dados = Object.fromEntries(new FormData(form).entries());
        salvarCadastro(dados);

        status.hidden = false;
        status.className = "form-status success";
        status.setAttribute("role", "status");
        status.textContent = "Cadastro validado e salvo neste navegador.";
    });

    const limpar = document.querySelector("#limpar-dados");
    limpar?.addEventListener("click", () => {
        form.reset();
        form.querySelectorAll("input, select").forEach(campo => {
            campo.classList.remove("input-erro", "input-sucesso");
        });
        limparCadastro();
        status.hidden = false;
        status.className = "form-status";
        status.textContent = "Dados locais removidos.";
    });
}

function validarCampo(campo) {
    const valor = campo.value.trim();
    const regra = regras[campo.id];
    const mensagem = document.querySelector(`#${campo.id}-mensagem`);

    let valido = valor !== "";
    if (valido && regra) valido = regra.validar(valor);

    campo.classList.toggle("input-erro", !valido);
    campo.classList.toggle("input-sucesso", valido);

    if (mensagem) {
        mensagem.textContent = valido ? "Preenchimento válido." : (regra?.mensagem || "Este campo é obrigatório.");
        mensagem.className = `field-message ${valido ? "success" : "error"}`;
    }

    campo.setAttribute("aria-invalid", String(!valido));
    return valido;
}

function restaurar(form) {
    const dados = carregarCadastro();
    if (!dados) return;

    Object.entries(dados).forEach(([chave, valor]) => {
        const campo = form.elements.namedItem(chave);
        if (campo) campo.value = valor;
    });
}


function aplicarMascara(seletor, formatar) {
    const campo = document.querySelector(seletor);
    if (!campo) return;
    campo.addEventListener("input", () => {
        campo.value = formatar(campo.value);
    });
}
