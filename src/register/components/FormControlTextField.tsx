import { TextField } from '@material-ui/core';
import React from 'react';
import { Controller, FieldError, useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  label: string;
  placeholder: string;
}

export const FormControlTextField = ({ name, label, placeholder }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors[name] as FieldError;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          placeholder={placeholder}
          helperText={error?.message}
          fullWidth
        />
      )}
    />
  );
};
