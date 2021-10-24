import React from 'react';

interface RadioBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelKey: string | React.ReactElement;
}
export const RadioBox = React.forwardRef<HTMLInputElement, RadioBoxProps>(
  ({ labelKey, ...rest }, ref) => {
    return (
      <label className="group flex items-center text-heading text-sm cursor-pointer">
        <input
          type="radio"
          className="form-radio w-5 h-5 border border-gray-300 text-heading rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
          ref={ref}
          {...rest}
        />
        <span className="ms-2 text-sm text-heading relative">{labelKey}</span>
      </label>
    );
  }
);

RadioBox.displayName = 'RadioBox';
