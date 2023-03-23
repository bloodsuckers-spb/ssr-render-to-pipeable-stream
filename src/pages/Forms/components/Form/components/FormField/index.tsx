import { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const FormField = ({ children, title }: Props) => {
  return (
    <fieldset>
      <legend>{title}</legend>
      {children}
      <p>Error Message</p>
    </fieldset>
  );
};

export default FormField;
