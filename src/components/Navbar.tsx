import React from 'react';
import Language from './Language';


const Navbar: React.FC<{ language: 'en' | 'es'; toggleLanguage: () => void }> = ({ language, toggleLanguage }) => {
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center">
                    <div className="flex items-center justify-center">
                        <a href="#" className="text-white text-lg font-medium">
                            {language === 'en' ? 'Conventional Commits' : 'Comentarios Convencionales'}
                        </a>
                    </div>
                </div>
            </div>

            <Language language={language} toggleLanguage={toggleLanguage} />
        </nav>
    );
};

export default Navbar;
