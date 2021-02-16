/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Controller } from 'react-hook-form';
import { Input, TextError } from './styles';

const InputCustom = ({ control, errors, name, defaultValue, ...props }) => {
  return (
    <Controller
      control={control}
      render={({ onChange, onBlur, value }) => (
        <>
          <Input
            error={errors[name]}
            onBlur={onBlur}
            onChangeText={(txt) => onChange(txt)}
            value={value}
            {...props}
          />
          {errors[name] && <TextError>{errors[name]?.message}</TextError>}
        </>
      )}
      name={name}
      defaultValue={defaultValue}
    />
  );
};

export default InputCustom;
