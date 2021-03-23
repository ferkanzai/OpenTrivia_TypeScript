import React, { ReactElement } from 'react';
import './App.css';
import { useForm } from "react-hook-form";

import { categories } from './constants'

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

const App:React.FC = ():ReactElement =>{

  const { register, handleSubmit } = useForm<IFormTrivial>();
  const onSubmit = (data: IFormTrivial) => console.log(data);

  return (
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
  );
}

export default App;
