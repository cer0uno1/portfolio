async function loadTranslations(lang) {
        try {
            // Cargar el archivo de traducciones
            const response = await fetch('texto.json');
            const translations = await response.json();

            // Obtener las traducciones para el idioma seleccionado
            const texts = translations[lang];

            // Actualizar los elementos con los textos traducidos
            for (const id in texts) {
                const element = document.getElementById(id);
                if (element) {
                    // Si el texto contiene HTML (como <br>), usa innerHTML
                    if (texts[id].includes('<br>')) {
                        element.innerHTML = texts[id];
                    } else {
                        element.textContent = texts[id];
                    }
                }
            }
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    // Cambiar idioma al cargar la página (por defecto 'es')
    document.addEventListener('DOMContentLoaded', () => {
        const defaultLang = 'es';
        loadTranslations(defaultLang);

        // Selector de idioma
        const languageSelector = document.querySelector('select');
        languageSelector.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            loadTranslations(selectedLang);
        });
    });
