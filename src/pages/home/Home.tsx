import { SearchBar, CardList } from './modules';

import styles from './Home.module.scss';
import 'react-toastify/dist/ReactToastify.css';

// import { Modal } from '../../shared/ui/modal';

// import { CardWithInfo } from './modules/CardWithInfo';

// import { Character } from './models';

// import { useAppDispatch, useAppSelector } from '../../shared/hooks';
// import { searchSlice } from '../../store/reducers/searchSlice/searchSlice';
// const [isModalOpen, setIsModalOpen] = useState(false);
// const [currentCard, setCurrentCard] = useState<number | null>(null);

export const Home = () => {
  return (
    <div className={styles.content}>
      <SearchBar />
      <CardList />
    </div>
  );
};

// const onCardClick = () => {
//   // id: number
//   // setCurrentCard(id);
//   // setIsModalOpen(true);
// };

// {
//   /* {currentCard ? (
//         <Modal
//           isOpen={isModalOpen}
//           onClose={onModalClose}
//         >
//           <CardWithInfo
//             cardId={currentCard}
//             onClose={onModalClose}
//             resetCurrentCard={resetCurrentCard}
//           />
//         </Modal>
//       ) : null} */
// }


// const resetCurrentCard = () => console.log('');

// // const onModalClose = () => setIsModalOpen(false);
