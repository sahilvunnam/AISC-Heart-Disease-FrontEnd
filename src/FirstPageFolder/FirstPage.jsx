import React, { useState } from 'react';
import './FirstPage.css';
import lukeHeadshot from '../assets/IMG_1399.jpeg';
import checkImage from '../assets/heartimage.webp';
import jamieHeadshot from '../assets/IMG_1142.png';
import sahilHeadShot from '../assets/aischeadshot.jpg';
import yashHeadshot from '../assets/YashHeadshot.jpeg';
import rachieHeadshot from '../assets/rachieHeadshot.jpg';
import brianHeadshot from '../assets/brianHeadshot.jpeg'

import ageImage from '../assets/AISCAge.png';
import chestPainImage from '../assets/AISCChestPain.png';
import fsbImage from '../assets/AISCFSB.png';
import fsbHDImage from '../assets/AISCFSBHD.png';
import thalImage from '../assets/AISCThal.png';

function Card({ headshot, name, role }) {
    return (
        <div className="Card">
            <img className="headshot" src={headshot} alt={`${name} headshot`} />
            <h3 className="name">{name}</h3>
            <p className="role">{role}</p>
        </div>
    );
}

const FirstPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAccuracy, setSelectedAccuracy] = useState(null);

    // Map of labels to images
    const images = {
        Age: ageImage,
        'Chest Pain': chestPainImage,
        FSB: fsbImage,
        FSBHD: fsbHDImage,
        Thal: thalImage
    };

    // Map of ML Models to accuracies
    const accuracies = {
        DecisionTree: 99.03,
        RandomForest: 100.00,
        KNNModel: 93.18,
        SupportVector: 75.00,
        NaiveBayes: 88.31,
    };

    return (
        <>
            <div className="FirstPage">
                <div className="title-div">
                    <h1 className="title">Heart Disease Predictor</h1>
                    <h3 className="subtitle">Team Heart Attack</h3>
                </div>

                <div>
                    <div className="FirstRow">
                        <Card name="Sahil" role="Project Manager" headshot={sahilHeadShot} />
                        <Card name="Jamie" role="Technical Associate" headshot={jamieHeadshot} />
                        <Card name="Luke" role="Technical Associate" headshot={lukeHeadshot} />
                    </div>

                    <div className="SecondRow">
                        <Card name="Brian" role="Technical Associate" headshot={brianHeadshot} />
                        <Card name="Yash" role="Technical Associate" headshot={yashHeadshot} />
                        <Card name="Rachie" role="Technical Associate" headshot={rachieHeadshot} />
                    </div>
                </div>
            </div>

            <div className="SecondPage">
                <div className="label-container">
                    {Object.keys(images).map((label) => (
                        <button 
                            key={label} 
                            onClick={() => setSelectedImage(images[label])}
                            className={`label-button ${selectedImage === images[label] ? 'active' : ''}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {selectedImage && (
                    <div className="image-display">
                        <img src={selectedImage} alt="Selected" className="display-image" />
                    </div>
                )}
            </div>

            <div className="ThirdPage">
                <div className="third-page-container">
                    {Object.keys(accuracies).map((label) => (
                        <button
                            key={label}
                            onClick={() => setSelectedAccuracy(accuracies[label])}
                            className={`accuracy-button ${selectedAccuracy == accuracies[label] ? 'active' : ''}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {selectedAccuracy != null && (
                    <div className="accuracy-display">
                        <p>Model Accuracy: {selectedAccuracy}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default FirstPage;
