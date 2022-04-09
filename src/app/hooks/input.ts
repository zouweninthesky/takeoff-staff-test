import { useState, useEffect } from "react";

import { EMAIL_REGEXP, PHONE_REGEXP } from "../../utils/reg-exp";

interface ValidationsInterface {
  isEmpty?: boolean;
  mayBeEmpty?: boolean;
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
  const [isEmpty, setEmpty] = useState(validations.mayBeEmpty ? false : true);
  const [isNotEmail, setNotEmail] = useState(false);
  const [isNotPhone, setNotPhone] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
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
          break;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || isNotEmail || isNotPhone) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, isNotEmail, isNotPhone]);

  return { isEmpty, isNotEmail, isNotPhone, inputValid };
};

export default useValidatedInput;
