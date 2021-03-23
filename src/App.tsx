import React, { ReactElement } from 'react';
import './App.css';
import { useForm } from "react-hook-form";

import { categories } from './constants'
import { ContextTrivial } from './context'

interface IFormTrivial {
  questions: number;
  category: string;
  difficulty: string;
}

const categoryKeys: string[] = Object.keys(categories)

const difficulties = [
  'easy',
  'medium',
  'hard'
]

const getQuiz = (questionsNumber, category, difficulty) => {
  const url = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium'
  
}


//
const getPokemon = (pokemonItem) => {

  console.log("get pokemon =>", pokemonItem)

  const pokemonFormatted = pokemonItem.toLowerCase()

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonFormatted}`

  console.log(pokemonFormatted)


  return fetch(url, { method: 'GET' })
    .then((res) => res.json())
    .then((result) => {

      //Aquí debemos poner un control de pokemon existente o error de la api?
      return result
    })

    .catch((error) => {
      alert('Pokemon no existe')
      console.log("catch error del fetch")
      return null

    })
}
//
const App: React.FC = (): ReactElement => {

  const { register, handleSubmit } = useForm<IFormTrivial>();
  const onSubmit = (data: IFormTrivial) => console.log(data);

  return (
    <div>

      <ContextTrivial.Provider value={}>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='questions'>Number of questions</label>
            <input name="questions" id='questions' ref={register} />
            <select name="category" ref={register}>
              {categoryKeys.map((category: any) => <option value={categoryKeys[category]}>{category}</option>)}
            </select>
            <select name='difficulty' ref={register}>
              {difficulties.map((difficulty: string) => <option value={difficulty}>{difficulty}</option>)}
            </select>
            <input type="submit" />
          </form>
        </div>


      </ContextTrivial.Provider>

    </div>
  );
}

export default App;
