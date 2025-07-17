import React, { useEffect, useState } from 'react';

const MetArt = ({ objectID }) => {
  const [art, setArt] = useState(null);

  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
      .then(res => res.json())
      .then(data => setArt(data))
      .catch(err => console.error("작품 가져오기 실패:", err));
  }, [objectID]);

  if (!art) return <p>Loading...</p>;

  return (
    <div className="art-card">
      {art.primaryImage && (
        <img src={art.primaryImage} alt={art.title} style={{ width: '300px' }} />
      )}
      <h3>{art.title}</h3>
      <p>{art.artistDisplayName}</p>
    </div>
  );
};

export default MetArt;
