import React, { ReactElement } from 'react';
import './App.css';
import { useForm } from "react-hook-form";



const App:React.FC = ():ReactElement =>{



  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="category" ref={register} />
      <select name="category" ref={register}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}

export default App;
