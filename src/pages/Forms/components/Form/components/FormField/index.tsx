import { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
  isError: boolean;
  errorMessage: string;
};

const FormField = ({ children, title, isError, errorMessage }: Props) => {
  return (
    <fieldset>
      <legend>{title}</legend>
      {children}
      {isError && <p>{errorMessage}</p>}
    </fieldset>
  );
};

export default FormField;
