import React from 'react';

const loadingPhrases = [
    'Warming up the grill',
    'Washing the dishes',
    'Filling pepper shakers',
    'Bussing tables',
];

function pickPhrase(phrases) {
    return phrases[Math.floor(Math.random() * phrases.length)] + '...';
}

const Loader = () => (
    <div className="randomizer__loader">
        <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
        </div>
        <p className="randomizer__loader__text">{pickPhrase(loadingPhrases)}</p>
    </div>
)

export default Loader;
