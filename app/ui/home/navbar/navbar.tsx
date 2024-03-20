"use client";
import React, { useEffect, useState } from 'react';

export const sections = [
    { id: 'about-us', title: 'За нас' },
    { id: 'plans', title: 'Планове' },
    { id: 'new', title: 'За връзване' },
    { id: 'incidents', title: 'Аварии' },
    { id: 'contacts', title: 'Контакти' },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        let currentSection = '';
        sections.forEach((section) => {
            const sectionEl = document.getElementById(section.id); // Use section.id
            if (sectionEl) {
                const scrollPosition = window.scrollY + window.innerHeight / 2;
                if (sectionEl.offsetTop <= scrollPosition && sectionEl.offsetTop + sectionEl.offsetHeight > scrollPosition) {
                    currentSection = section.id; // Use section.id
                }
            }
        });
        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="fixed top-0 z-10 h-20 w-full bg-blue-200 shadow-md">

            <ul className="flex justify-center space-x-4 align-center m-4">
                {sections.map((section) => (
                    <li key={section.id} className={activeSection === section.id ? 'text-black-500 underline' : 'text-gray-500 no-underline'}>
                        <a href={`#${section.id}`} className="p-4">
                            {section.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}