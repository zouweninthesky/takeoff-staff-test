import { useState, useEffect } from "react";

import { EMAIL_REGEXP, PHONE_REGEXP } from "../../utils/reg-exp";

interface ValidationsInterface {
  isEmpty?: boolean;
  minLength: number;
  isNotEmail?: boolean;
  isNotPhone?: boolean;
}

const useValidatedInput = (
  initialValue: string,
  validations: ValidationsInterface
) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const onBlur = () => {
    setDirty(true);
  };

  const resetInput = () => {
    setValue("");
    setDirty(false);
  };

  return {
    value,
    isDirty,
    ...valid,
    onChange,
    onBlur,
    resetInput,
  };
};

const useValidation = (value: string, validations: ValidationsInterface) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [isNotEmail, setNotEmail] = useState(false);
  const [isNotPhone, setNotPhone] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;

        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;

        case "isNotEmail":
          EMAIL_REGEXP.test(String(value).toLowerCase())
            ? setNotEmail(false)
            : setNotEmail(true);
          break;
        case "isNotPhone":
          PHONE_REGEXP.test(String(value).toLowerCase())
            ? setNotPhone(false)
            : setNotPhone(true);
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError || isNotEmail || isNotPhone) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, isNotEmail]);

  return { isEmpty, minLengthError, isNotEmail, isNotPhone, inputValid };
};

export default useValidatedInput;
