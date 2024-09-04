import React from 'react';
import { conventions } from '../data/';

const Hero: React.FC<{ language: 'en' | 'es' }> = ({ language }) => {
    const selectedConventions = conventions[language];

    return (
        <div className="bg-gray-900 h-screen flex items-center justify-center text-white p-4">
            <div className="w-full max-w-4xl transform -translate-y-20">
                {selectedConventions.map((item) => (
                    <div key={item.type} className="mb-4">
                        <p className="border-b-2 border-white/50 pb-2 text-left">
                            <strong>{item.type}:</strong> {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
