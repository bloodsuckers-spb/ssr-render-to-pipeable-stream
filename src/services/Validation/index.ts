const Validation = () => {
  const isTextInputValid = (value: string) =>
    /^[A-Z][a-z]+|[А-Я][а-я]{2,10}$/.test(value);

  const isSelectValid = (value: string) => {
    return !!value;
  };

  const isDateValid = (value: string) => {
    return (
      /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(value) &&
      Date.now() - Date.parse(value) > 0
    );
  };

  const isFileValid = (value: string) => {
    return !!value;
  };

  const isChecked = (value: string) => {
    return !!value;
  };
};

export default Validation;
