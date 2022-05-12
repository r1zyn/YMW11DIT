document.querySelectorAll(".nav-link").forEach(
    /**
     * The navigation link element
     * @param {HTMLAnchorElement} link
     * @returns {void}
     */
    (link) => {
        if (window.location.href === link.href) {
            link.style.borderBottom = "0.1rem solid var(--primary-colour)";
        }
    }
);