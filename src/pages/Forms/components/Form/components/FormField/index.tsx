import { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
  isError: boolean;
};

const FormField = ({ children, title, isError }: Props) => {
  return (
    <fieldset>
      <legend>{title}</legend>
      {children}
      {isError && <p>Error Message</p>}
    </fieldset>
  );
};

export default FormField;
