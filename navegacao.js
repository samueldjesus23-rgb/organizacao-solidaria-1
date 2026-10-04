export function initNavigation() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const menu = document.querySelector("#main-menu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
        const opened = menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(opened));
    });

    menu.addEventListener("click", (event) => {
        if (event.target.matches("a")) {
            menu.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        }
    });
}

export function initTheme() {
    const themeButton = document.querySelector("[data-theme-toggle]");
    const contrastButton = document.querySelector("[data-contrast-toggle]");
    const root = document.documentElement;

    const theme = localStorage.getItem("tema") || "light";
    root.dataset.theme = theme;

    if (themeButton) {
        updateButton(themeButton, theme === "dark");
        themeButton.addEventListener("click", () => {
            const dark = root.dataset.theme !== "dark";
            root.dataset.theme = dark ? "dark" : "light";
            localStorage.setItem("tema", dark ? "dark" : "light");
            updateButton(themeButton, dark);
        });
    }

    const highContrast = localStorage.getItem("altoContraste") === "true";
    if (highContrast) root.dataset.contrast = "high";

    if (contrastButton) {
        updateButton(contrastButton, highContrast);
        contrastButton.addEventListener("click", () => {
            const enabled = root.dataset.contrast !== "high";
            if (enabled) root.dataset.contrast = "high";
            else delete root.dataset.contrast;
            localStorage.setItem("altoContraste", String(enabled));
            updateButton(contrastButton, enabled);
        });
    }
}

function updateButton(button, active) {
    button.setAttribute("aria-pressed", String(active));
}
