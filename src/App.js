import './assets/style.css'
import Card from './components/Card';
import { card } from './assets/ObjectList';
import Header from './components/Header';
import { useState } from 'react';
import Modal from './components/Modal';
import Filter from './components/Filter';

function App() {

  const [modal, setModal] = useState(false)
  const [getId, setGetId] = useState()
  const [getTitle, setGetTitle] = useState()
  const [price, setPrice] = useState(false)
  const [all, setAll] = useState(true)
  const [title, setTitle] = useState(false)

  if (price) {
    card.sort(function (a, b) {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0
    })
  }
  if (title) {
    card.sort(function (a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0
    })
  }
  if (all) {
    card.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0
    })
  }

  return (
    <div className="App">
      <Modal
        visible={modal}
        setVisible={setModal}
        getId={getId}
        getTitle={getTitle}
      />

      <Header />
      <Filter
        sortedPrice={price}
        setSortedPrice={setPrice}
        sortedAll={all}
        setSortedAll={setAll}
        sortedTitle={title}
        setSortedTitle={setTitle}
      />

      <div className='cardList'>
        {card.map((card) =>
          <Card post={card} key={card.id} onClick={() => {
            setModal(true)
            setGetId(card.id)
            setGetTitle(card.title)
          }} />
        )}
      </div>
    </div>
  );
}

export default App;
