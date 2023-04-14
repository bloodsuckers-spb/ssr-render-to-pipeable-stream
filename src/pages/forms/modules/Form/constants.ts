export const radioOptions = ['Male', 'Female'] as const;
export const extensions = ['.jpg', '.jpeg', '.png', '.bmp'] as const;
export const selectOptions = ['USA', 'Italy', 'Germany'] as const;
export const defaultSelected = 'Choose here' as const;

export const validateTextInput = (value: string) =>
  /^[A-Z][a-z]+|[А-Я][а-я]{2,10}$/.test(value);

export const validateDateInput = (value: string) =>
  /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(value) && Date.now() > Date.parse(value);

export const validateFileInput = (filelist: FileList) => {
  if (!filelist.length) return false;
  const { name: value } = filelist[0];
  return extensions.some((extension) => value.includes(extension));
};

export const validateRadioInput = (value: string) => !!value;

export const validateSelect = (value: string) => value !== defaultSelected;

export const isChecked = (checked: boolean) => checked;
