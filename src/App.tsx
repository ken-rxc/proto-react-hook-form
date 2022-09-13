import React from 'react';
import { useForm, useWatch, Control } from "react-hook-form";
import './App.css';

type FormValues = {
  firstName: string;
  lastName: string;
};

function IsolateReRender({ control }: { control: Control<FormValues> }) {
  const firstName = useWatch({
    control,
    name: "firstName",
    defaultValue: "default"
  });

  return <div>{firstName}</div>;
}

function App() {
  const { register, control, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => console.log(JSON.stringify(data)));

  return (
    <div className="App">
      <h1>React Hook Form - Control</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>First Name</label>
          <input {...register("firstName")} />
        </div>
        <div>
          <label>Last Name</label>
          <input {...register("lastName")} />
        </div>
        <IsolateReRender control={control} />

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
