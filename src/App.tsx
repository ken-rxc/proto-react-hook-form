import React from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { Grid, TextField, Button } from '@material-ui/core';
import './App.css';

/**
 * 회원가입 데이터 타입
 */
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

/**
 * 회원가입 기본 데이터
 */
const defaultFormValues = {
  firstName: '',
  lastName: '',
  email: '',
};

function App() {
  const { register, control, handleSubmit } = useForm<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: defaultFormValues,
  });

  const onSubmit = handleSubmit((data) => console.log(data));
  const handleReset = () => {
    console.log('Reset!');
  };

  return (
    <div className="App">
      {/* header */}
      <h1>회원가입</h1>

      {/* form */}
      <FormProvider {...formMethods}>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="firstName"
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="First Name"
                    variant="outlined"
                    placeholder="이름을 입력하세요."
                    fullWidth
                    required
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="lastName"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Last Name"
                    variant="outlined"
                    placeholder="성을 입력하세요."
                    fullWidth
                    required
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="E-mail"
                    variant="outlined"
                    placeholder="이메일 주소를 입력하세요."
                    fullWidth
                    required
                  />
                )}
              />
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
    </div>
  );
}

export default App;
