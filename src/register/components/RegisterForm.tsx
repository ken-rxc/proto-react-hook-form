import React from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { Grid, TextField, Button } from '@material-ui/core';
import { RegisterFormFields } from '../types/register';
import { defaultFieldRegisterValues } from '../constants/register';
import { FormControlTextField } from './FormControlTextField';

export const RegisterForm = () => {
  const { handleSubmit } = useForm<RegisterFormFields>();
  const formMethods = useForm<RegisterFormFields>({
    defaultValues: defaultFieldRegisterValues,
  });

  const onSubmit = handleSubmit((data) => console.log(data));
  const handleReset = () => {
    console.log('Reset!');
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControlTextField name="First Name" placeholder="이름을 입력하세요." />
          </Grid>
          <Grid item xs={12}>
            <FormControlTextField name="Last Name" placeholder="성을 입력하세요." />
          </Grid>
          <Grid item xs={12}>
            <FormControlTextField name="E-mail" placeholder="이메일 주소를 입력하세요." />
          </Grid>

          {/* cta */}
          <Grid item xs={6}>
            <Button type="reset" variant="outlined" color="primary" size="large" fullWidth onClick={handleReset}>
              초기화
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
              완료
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};
