import "../styles/AboutMe.css";
import { useTranslation } from 'react-i18next';
import '../hooks/useTranslations';

function AboutMe() {
    const { t } = useTranslation();

    return (
        <div className="d-flex justify-content-center">
            <div id="aboutMe" className="d-flex flex-column pt-5 justify-content-center text-center align-self-center w-100 p-3 align-items-center">
                <div className="container-opacity">
                    <h1>Marc Polán Escrich</h1>
                    <span className="orbitron">\\\///</span>
                    <div className="d-flex justify-content-center">
                        <div className="d-flex flex-column text-center w-50">
                            <p>{t('aboutMe-content')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
