import React from 'react';
import './Recommendation.css';

const Recommendation = () => {
  const fishingTools = [
    {
      id: 1,
      name: 'Fishing Rod',
      image: 'link-to-fishing-rod-image.jpg',
      storeLink: 'https://examplestore.com/fishing-rod',
    },
    {
      id: 2,
      name: 'Fishing Reel',
      image: 'link-to-fishing-reel-image.jpg',
      storeLink: 'https://examplestore.com/fishing-reel',
    },
    {
      id: 3,
      name: 'Fishing Lures',
      image: 'link-to-fishing-lures-image.jpg',
      storeLink: 'https://examplestore.com/fishing-lures',
    },
    // Add more fishing tools as needed
  ];

  return (
    <div className="recommendation-container">
      <ul className="recommendation-list">
        {fishingTools.map((tool) => (
          <li key={tool.id} className="recommendation-item">
            <h3>{tool.name}</h3>
            <a href={tool.storeLink} target="_blank" rel="noopener noreferrer">
              <img src={tool.image} alt={tool.name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
