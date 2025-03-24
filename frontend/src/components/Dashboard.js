import { useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 30px; background-color:rgb(239, 191, 199); min-height: 100vh;
`;

const CardsGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px;
`;

const Card = styled.div`
  background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  cursor: pointer; transition: 0.3s;
  &:hover { transform: translateY(-5px); }
  display: flex; justify-content: center; align-items: center; flex-direction: column;
`;
const Title = styled.h2`
  color: info; display: flex; justify-content: center;
`

function Dashboard() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/dashboard')
      .then(res => setCards(res.data))
      .catch(() => navigate('/'));
  }, [navigate]);

  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      <CardsGrid>
        {cards.map(card => (
          <Card key={card.id} onClick={() => navigate('/map')}>
            
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            
          </Card>
        ))}
      </CardsGrid>
    </DashboardContainer>
  );
}

export default Dashboard;
