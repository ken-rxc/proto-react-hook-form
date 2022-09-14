import { TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  placeholder: string;
}

export const FormControlTextField = ({ name, placeholder }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField {...field} label={name} variant="outlined" placeholder={placeholder} fullWidth required />
      )}
    />
  );
};
