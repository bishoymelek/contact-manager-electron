import React from 'react';
import { Button } from './Button';
import { CloseIcon } from './Icons';

export enum AlertType {
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

interface AlertProps {
  children: any;
  className?: string;
  type: AlertType;
  onClose?: any;
}

function alertTypeStyling(type: AlertType) {
  switch (type) {
    case AlertType.Success:
      return 'text-green';
    case AlertType.Warning:
      return 'text-yellow';
    case AlertType.Error:
      return 'text-red';
    default:
      return '';
  }
}

export function Alert(props: AlertProps) {
  const { children, className, type, onClose } = props;

  return (
    <>
      <div
        className={`alert flex justify-between align-center ${className} ${alertTypeStyling(
          type
        )}`}
      >
        {children}
        {onClose && (
          <div role="presentation" onClick={onClose}>
            <CloseIcon />
          </div>
        )}
      </div>
    </>
  );
}

Alert.defaultProps = {
  className: '',
};

export default Alert;
