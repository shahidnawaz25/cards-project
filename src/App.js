import './App.css';
import Card from './components/Card';

function App() {
  const cardArr = [
    {
      id: '1',
      title: 'first card',
      description: 'description',
    },
    {
      id: '2',
      title: 'second card',
      description: 'description',
    },
    {
      id: '3',
      title: 'third card',
      description: 'description',
    },
    {
      id: '4',
      title: 'fourth card',
      description: 'description',
    },
  ];
  return (
    <>
      <h1 className="heading"> Cards Portfolio</h1>
      <p>These cards are of react js</p>
      <button
        style={{ backgroundColor: 'indigo', color: 'white', padding: '10px' }}
      >
        Click me
      </button>
      <br />
      {cardArr.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </>
  );
}

export default App;
