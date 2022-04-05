import { useState, useEffect } from "react";

import { EMAIL_REGEXP } from "../../utils/reg-exp";

interface ValidationsInterface {
  isEmpty?: boolean;
  minLength: number;
  isNotEmail?: boolean;
}

export const useValidatedInput = (
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

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

export const useValidation = (
  value: string,
  validations: ValidationsInterface
) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [isNotEmail, setNotEmail] = useState(false);
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
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError || isNotEmail) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, isNotEmail]);

  return { isEmpty, minLengthError, isNotEmail, inputValid };
};
