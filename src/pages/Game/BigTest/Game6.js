import React, { useState, useEffect } from 'react';

const Game6 = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);

  useEffect(() => {
    // Thay thế dòng này bằng logic để lấy danh sách từ vựng và hình ảnh từ nguồn dữ liệu của bạn
    const fetchedData = [
      { id: 1, word: 'Apple', image: 'https://via.placeholder.com/200x200.png' },
      { id: 2, word: 'Car', image: 'https://via.placeholder.com/400x400.png' },
      { id: 3, word: 'Dog', image: 'https://via.placeholder.com/400x200.png' },
      // Thêm các từ vựng và hình ảnh khác vào đây
    ];

    // Nhân đôi các thẻ để tạo cặp từ khớp
    const doubledCards = [...fetchedData, ...fetchedData];
    // Xáo trộn thứ tự các thẻ
    const shuffledCards = doubledCards.sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
  }, []);

  const handleCardClick = (card) => {
    if (selectedCard === null) {
      // Nếu chưa có thẻ nào được chọn, lưu thẻ hiện tại và chờ lựa chọn thẻ khác
      setSelectedCard(card);
    } else {
      // Đã có thẻ được chọn trước đó, so sánh với thẻ hiện tại
      if (selectedCard.word === card.word && selectedCard.id !== card.id) {
        // Nếu cặp thẻ khớp nhau, thêm vào danh sách các cặp thẻ khớp
        setMatchedPairs((prevPairs) => [...prevPairs, [selectedCard, card]]);
      }

      // Đặt lại trạng thái của thẻ được chọn
      setSelectedCard(null);
    }
  };

  return (
    <div>
      <h1>Matching Game</h1>
      <div className="card-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${matchedPairs.flat().includes(card) ? 'matched' : ''}`}
            onClick={() => handleCardClick(card)}
          >
            {matchedPairs.flat().includes(card) ? (
              <img src={card.image} alt={card.word} />
            ) : (
              <img src="back.jpg" alt="Card Back" />
            )}
          </div>
        ))}
      </div>
      <div>
        {matchedPairs.map((pair, index) => (
          <div key={index}>
            <strong>{pair[0].word}</strong> - <strong>{pair[1].word}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game6;
