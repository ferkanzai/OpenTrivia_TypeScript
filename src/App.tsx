import React, { ReactElement } from 'react';
import './App.css';
import { useForm } from "react-hook-form";

import { categories } from './constants'

const categoryKeys: string[] = Object.keys(categories)

const App:React.FC = ():ReactElement =>{

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="category" ref={register} />
      <select name="category" ref={register}>
        {categoryKeys.map((category: any) => <option value={categoryKeys[category]}>{category}</option>)}
      </select>
      <input type="submit" />
    </form>
  );
}

export default App;
