import { useState, useEffect, FormEvent, useRef } from 'react';

import axios from 'axios';
import { PropagateLoader as Spinner } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';

import { SearchBar, Card } from './modules';

import styles from './index.module.scss';
import 'react-toastify/dist/ReactToastify.css';

import { charactersLink } from './constants';

import { Character } from './models';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('searchValue') ?? ''
  );
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getCharacters(searchInputRef.current?.value);
  }, [searchValue]);

  const getCharacters = (params?: string) => {
    const url = params ? `${charactersLink}?name=${params}` : charactersLink;
    axios
      .get(url)
      .then(({ data: { results } }) => {
        setCharacters(results);
      })
      .catch(() => {
        setCharacters([]);
        toast('Sorry, There is nothing found', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const searchValue = searchInputRef.current?.value ?? '';
    localStorage.setItem('searchValue', searchValue);
    setSearchValue(searchValue);
  };

  return (
    <div className={styles.content}>
      <SearchBar
        handleSubmit={handleSubmit}
        ref={searchInputRef}
      />
      {isLoading ? (
        <Spinner />
      ) : characters.length ? (
        <ul>
          {characters.map((character) => (
            <Card
              key={character.id}
              character={character}
            />
          ))}
        </ul>
      ) : null}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
