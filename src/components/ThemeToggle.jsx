import { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem('darkTheme');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    // Función para aplicar el tema
    const applyTheme = (darkTheme) => {
        document.body.classList.toggle("dark-body", darkTheme);
        document.body.classList.toggle("light-body", !darkTheme);

        const aboutMeElement = document.querySelector("#aboutMe");
        aboutMeElement.classList.toggle('animation-dark-theme-gradient', darkTheme);
        aboutMeElement.classList.toggle('animation-light-theme-gradient', !darkTheme);

        const linesAndDots = document.querySelectorAll('.line, .dot');
        linesAndDots.forEach(element => {
            element.classList.toggle('dark-theme-gradient', darkTheme);
            element.classList.toggle('light-theme-gradient', !darkTheme);
        });

        // const lines = document.querySelector(".lines-thing");
        // lines.classList.toggle('bg-white', darkTheme);
        // lines.classList.toggle('bg-dark-mate', !darkTheme);

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const firstDiv = card.querySelector('div');
            if (firstDiv) {
                firstDiv.classList.toggle('front-dark', darkTheme);
            }
        });
    };

    useEffect(() => {
        applyTheme(isDarkTheme);
    }, [isDarkTheme]);

    // Función para cambiar el tema y guardar en el localStorage
    const changeTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        localStorage.setItem('darkTheme', JSON.stringify(newTheme));
    };

    return (
        <div className="theme-toggle" onClick={changeTheme} style={{ cursor: 'pointer' }}>
            {isDarkTheme ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="white" viewBox="0 0 16 16">
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9.707a.5.5 0 1 1-.708-.707L3.465 1.938a.5.5 0 1 1 .708.707L3.464 3.465zM8 12.5a.5.5 0 0 1 .5-.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="white" viewBox="0 0 16 16">
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                </svg>
            )}
        </div>
    );
};

export default ThemeToggle;
