import React, { useState, useEffect } from 'react';
import MetArt from './MetArt';

const MetGallery = () => {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1')
      .then(res => res.json())
      .then(data => {
        if (data.objectIDs) {
          setIds(data.objectIDs.slice(0, 10));
        }
      })
      .catch(err => console.error('API 에러:', err));
  }, []);

  return (
    <div className="gallery">
      {ids.map(id => (
        <MetArt key={id} objectID={id} />
      ))}
    </div>
  );
};

export default MetGallery;
