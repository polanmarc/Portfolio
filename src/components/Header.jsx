import '../styles/Header.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Importa tu configuración de i18n

function Header() {
    const { t, i18n } = useTranslation(); // Usa useTranslation para obtener i18n

    function changeLanguage(lang) {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
    }

    // Estado para el tema oscuro, cargando su valor desde el localStorage
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem('darkTheme');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    // Efecto para aplicar el tema al cargar el componente
    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [isDarkTheme]);

    // Función para cambiar el tema y guardar en el localStorage
    function changeTheme() {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        localStorage.setItem('darkTheme', JSON.stringify(newTheme));
    }

    return (
        <header className="header">
            <nav className="d-flex justify-content-around py-2">
                <div className="">
                    <svg version="1.0" viewBox="0 0 300 161" width="225" className="logo"><g fill="#fff"><path d="M122.6 22.1c-1.5 2.2-1.8 2.3-2.7.6-.5-.9-1.5-1.7-2-1.7-.6 0-.3 1 .5 2.2.9 1.2 1.6 3.3 1.6 4.5 0 1.3.5 2.3 1 2.3.6 0 1-.8 1-1.8s.7-2.8 1.6-4c.8-1.2 1.4-2.8 1.2-3.4-.3-.7-1.2-.1-2.2 1.3zM105.4 25.5c-.2 5.2 1.3 6.1 1.8 1.2l.4-3.2 1.2 2.7c.6 1.6 1.6 2.8 2.1 2.8s1.4-1.2 1.9-2.8l1-2.7.1 3.2c.1 5.1 2.1 3.9 2.1-1.2 0-5.2-1.9-6.1-4-1.8l-1.3 2.8-1.1-2.8c-1.6-4.5-4.1-3.5-4.2 1.8zM63.5 26.5c-13.4 3.6-23.5 9.4-31 17.7-5.2 5.8-6.6 10.7-4.2 14.7 2.3 3.8 4.3 3.4 3.9-.9-.6-7.2 12.5-19.6 27.3-25.9 8.4-3.5 22.9-3.7 29.1-.4 4.5 2.4 5.4 3.8 5.4 8.6-.1 8.8-10.3 19.6-22.9 24.2-2.4.9-2.9 1.4-1.6 1.4 1.2.1 3.8-.8 5.8-1.8 2.4-1.2 3.4-1.4 2.7-.6-1.2 1.5-5.4 3-11 3.9-2.2.4-3 .3-2.1-.3.8-.5.9-1 .3-1.2-.6-.2 1.4-4.8 4.5-10.2 5.4-9.8 11.6-17.2 13.3-16.2 1.4.9 2.3-1.5 1-2.9-2.3-2.9-6.1-2.9-9.1 0-1.6 1.5-2.9 3.2-2.9 3.7 0 .4-1.1 2.3-2.4 4-1.4 1.8-4.7 7.2-7.4 12l-4.9 8.9-2.2-2.8c-1.6-2.1-2-3.5-1.5-5.7.4-2 .3-2.7-.5-2.3-2 1.3-1.2 6.9 1.4 9.6l2.5 2.6-3 7.4c-5 12.1-5 18 0 18 1.3 0 1.8-1.1 2.3-5.3.3-2.8 1.8-8 3.3-11.5l2.7-6.3 4 .6c3 .6 3.8.4 3.2-.5-.5-.9-.2-1 1.3-.6 3 1 12.1-3.6 17.2-8.5 8.1-7.9 11.3-19.7 7.1-26.5-3.1-5-11-8.4-19.5-8.3-3.9 0-9.3.6-12.1 1.4zm-15.9 8.6c-2.6 1.7-5 2.8-5.3 2.6-.5-.6 7.8-5.7 9.2-5.7.6 0-1.2 1.4-3.9 3.1zM218.4 32.7c-.3 1-1.9 4.5-3.4 7.8-9.6 20.3-15.1 35.4-19.1 52.1-2.1 8.7-1.6 12.5 1.7 13.8 1.7.7 4.4-.9 4.4-2.6 0-.6-.7-.5-1.5.2-6.7 5.6 10.1-42.8 21.6-62.3 4.6-7.8 4.6-10.7-.2-10.7-1.9 0-3.2.6-3.5 1.7zM155.2 37.9c-1.1 3.1-1.9 3.3-22.2 6.1-4.7.6-9.8 1.6-11.5 2.2-1.6.6-4.7 1.3-6.7 1.5-3 .4-3.8.2-3.8-1.1 0-.9-.4-1.6-1-1.6-1.3 0-1.3 2.6 0 5.1.7 1.2 2.1 1.9 4 1.9 2.7 0 3 .3 3 3 0 2.1.9 3.9 2.7 5.6 1.4 1.3 2.4 2.6 2.2 2.8-1.3 1.1-5.1 2.6-6.7 2.6-1.5 0-2.1.9-2.5 4-.7 5.4-3.8 11.4-6.1 11.9-1.7.3-1.9-.2-1.3-5.2.7-6.6 3-10.5 7.4-12.3 3.9-1.7 4.1-2.7 1.1-4.8-3.1-2.2-5.1-2-7.6.7-2.4 2.5-7.2 14.6-7.2 18 0 2.8 3.9 6.7 6.6 6.7 3.8 0 9.3-8.4 9.4-14.2.1-1.7 1.2-2.8 4.5-4.4 4.4-2 4.5-2.1 7.5-.3 1.6 1 3 2.2 3 2.6 0 .5-1.2 2.6-2.5 4.8-3.1 5-3.2 9-.4 10.6 2.9 1.5 5.3.1 10.9-6.7 6.5-7.9 6.2-8.8-.8-2.2-6.1 5.8-10.9 8.2-5.9 3 4.6-4.8 3.1-11.1-3.6-14.8-1.7-1-1.6-1.3.7-5.5 1.4-2.4 2.6-5.6 2.6-7.1 0-2 .6-2.9 2.3-3.3 14.5-3.3 19.2-4.3 19.5-4 .2.2-.3 1.6-1.1 3.2-3.4 6.6-7.9 21.3-8.3 27.3-.5 7 1.3 12.3 4.9 14.4 1.4.9 2.2.6 3.7-1.4 1.1-1.4 2-3.2 2-4.1 0-1.6 2.8-3.4 3.7-2.5.3.3-1.3 5.4-3.6 11.3-4.6 12.3-5 14.8-2.1 16.3 2.8 1.5 3.6.7 4.4-3.7.3-2.1 2.1-8.5 3.9-14.3 3.2-10.2 3.4-10.4 6.8-11.1 8.1-1.6 11.9-1.7 11.9-.4 0 2.3 4.1 6.5 6.4 6.5 5.5 0 12-13.2 9.6-19.5-.8-2.1-.6-2.5.8-2.5 2.4-.1-3.3-5-5.8-5-1 0-2.7-.3-3.7-.6-1.4-.5-1.5-.4-.7.5.9 1 .5 2.5-1.5 6.4-1.5 2.9-3.2 6.7-3.9 8.4-1 2.9-1.5 3.3-4.6 3.3-2.9 0-3.6-.4-3.6-2 0-5.1 10.1-20 13.6-20 2.1 0 1.7-2.7-.6-3.3-1.4-.3-2.7.4-4.4 2.3-1.7 2.1-3 2.7-4.5 2.3-3.8-1-11.3 7.9-14.9 17.3-1.4 4-2.3 5-4.7 5.4-2.2.4-3.1 1.2-3.7 3.8-1 3.7-3.5 5.2-5 3.1-2.3-3.4 2.9-24.5 9-36.8l2.7-5.4 12.5.6c14.3.7 19.8 1.9 22.2 5 1.5 1.8 1.8 1.9 1.8.5 0-2.2-4.5-5.3-9.9-6.8-2.4-.6-9.3-1.2-15.2-1.3-9.7-.2-10.8-.4-10.3-1.9.3-1-.3-2.1-1.5-2.7-2.7-1.5-2.8-1.5-3.9 1.8zM129 50.7c0 2.3-3.7 10.3-4.6 10.3-1.4 0-4.4-3.3-4.4-5 0-.9.5-2.1 1.2-2.8.7-.7.8-1.2.3-1.3-1-.1 5.3-2.7 6.8-2.8.4-.1.7.7.7 1.6zm44.5 13.2c-1.3 2.7-2.7 6.8-3.1 9-.6 3.5-1 4.1-3 4.1-1.3 0-2.4-.2-2.4-.5 0-2.1 9.1-17.5 10.3-17.5.4 0-.4 2.2-1.8 4.9zm19.1 9.7c-1.2 6-7.6 11.5-7.6 6.4 0-1.1.6-2 1.3-2 .9 0 .9-.2-.1-.8-2-1.3-.4-6.6 3.2-10.3l3.1-3.4.3 3.4c.2 1.9.1 4.9-.2 6.7zM224.4 55c.1 4.4 1.6 8.7 1.6 4.6 0-.9 1.2-2.8 2.7-4.2 2.9-2.7 3-2.7-1.3-4.1l-3.1-1.1.1 4.8zM242 56.7c0 .7.5 1.5 1 1.8.7.4.3 1.7-.9 3.3-1 1.5-2.1 3.7-2.5 4.9-.6 1.8-5.3 6.3-15.9 15.1-2.9 2.5-2.9.8-.2-7.3 2.9-8.3 2.7-10.8-.7-10.3-1.5.2-2.2 1.1-2.3 2.8-.1 1.4-1 5.5-2 9.1-3.4 11.9 0 13 10.9 3.4l7.5-6.5-.6 3.6c-.5 2.8-.1 4 1.7 5.9 1.3 1.4 3.3 2.5 4.5 2.5 5.2 0 11.6-12.9 9.3-19-.6-1.6-.5-2.6.4-3.2 1.7-1.1-2.6-4.8-5.6-4.8-1.2 0-2.7-.5-3.4-1.2-.9-.9-1.2-.9-1.2-.1zm8 12.1c0 4.7-3.9 12.6-6.4 13.1-1.7.3-1.9-.2-1.3-5.3.9-9.4 7.7-16.2 7.7-7.8zM263 119.1c-4.7.5-18.2 1-30 1.1-11.8.1-20.1.5-18.5.9 3.2.7-24 1.4-34 .8-3.3-.2-9.7-.3-14.2-.3-7.6 0-10.8-.9-6.5-1.9 2.4-.5-69.1 0-81.3.6-45 2.4-65.3 3.9-74.9 5.6-2.3.4 6.8.6 20.2.4 13.3-.1 24.8-.6 25.5-1 .7-.4 37.4-.8 81.7-.9 77.3 0 99.2-.6 130-3.5 6.3-.6 11.9-1.5 12.5-2 .5-.6.4-.8-.5-.8-.8.1-5.3.6-10 1z"></path></g></svg>
                </div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link nav-text" aria-current="page" href="https://github.com/polanmarc">{t('github')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-text" aria-current="page" href="https://linkedin.com/in/marcpolan">{t('linkedin')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-text" href="#">{t('curriculum')}</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle nav-text" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {t('idioma')}
                                    </a>
                                    <ul className="dropdown-menu">
                                        <button onClick={() => changeLanguage('en')} className="btn btn-link">{t('english')}</button>
                                        <button onClick={() => changeLanguage('es')} className="btn btn-link">{t('spanish')}</button>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item" onClick={changeTheme}>
                                    {isDarkTheme ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                                            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9.707a.5.5 0 1 1-.708-.707L3.465 1.938a.5.5 0 1 1 .708.707L3.464 3.465zM12.5 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-9.9 5.657a.5.5 0 0 1 0-.707L3.465 11.94a.5.5 0 1 1 .708.707l-1.414 1.414a.5.5 0 0 1-.707 0zM8 12.5a.5.5 0 0 1 .5-.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
                                            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                                        </svg>
                                    )
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <button onClick={() => changeLanguage('en')} className="btn btn-link">{t('english')}</button>
                                    <button onClick={() => changeLanguage('es')} className="btn btn-link">{t('spanish')}</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
            </nav>
        </header>
    );
}

export default Header;
