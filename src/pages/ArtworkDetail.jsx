// src/pages/ArtworkDetail.jsx
import { useParams } from 'react-router-dom';

const ArtworkDetail = () => {
  const { id } = useParams(); // URL의 :id 값 가져오기

  return (
    <div style={{ padding: '40px' }}>
      <h2>Artwork Detail Page</h2>
      <p>선택한 작품 ID: {id}</p>
      {/* 👉 여기서 artworks 배열에서 id 매칭해서 상세 정보 출력 가능 */}
    </div>
  );
};

export default ArtworkDetail;
