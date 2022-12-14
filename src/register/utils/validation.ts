import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormFields } from '../types/register';

export const registerValidation = () =>
  yupResolver(
    yup.object().shape<Partial<Record<keyof RegisterFormFields, any>>>({
      firstName: yup.string().required('이름을 입력하세요.'),
      lastName: yup.string().required('성을 입력하세요.'),
      email: yup.string().email().required('이메일 주소를 입력하세요.'),
    }),
  );
