import React from 'react';
import FlagIcon from 'react-flagkit';

interface LanguageProps {
    language: 'en' | 'es';
    toggleLanguage: () => void;
}

const Language: React.FC<LanguageProps> = ({ language, toggleLanguage }) => {
    return (
        <div className="absolute top-0 right-0 m-4">
            <button
                className="flex items-center justify-center bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={toggleLanguage}
            >
                <span className="sr-only">Change language</span>
                {language === 'en' ? (
                    <FlagIcon country="US" size={24} />
                ) : (
                    <FlagIcon country="ES" size={24} />
                )}
            </button>
        </div>
    );
};

export default Language;
