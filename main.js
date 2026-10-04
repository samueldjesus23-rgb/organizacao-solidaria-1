import { initNavigation, initTheme } from "./navegacao.js";
import { initFormulario } from "./formulario.js";
import { initProjetos } from "./projetos.js";

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initTheme();
    initFormulario();
    initProjetos();
});
