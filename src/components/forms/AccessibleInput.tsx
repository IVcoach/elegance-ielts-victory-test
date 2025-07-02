
import React, { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { sanitizeInput } from '@/utils/security';
import { AlertCircle, Check } from 'lucide-react';

interface AccessibleInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  success?: boolean;
  sanitize?: boolean;
}

export const AccessibleInput = forwardRef<HTMLInputElement, AccessibleInputProps>(
  ({ 
    label, 
    error, 
    helperText, 
    success, 
    sanitize = true, 
    className, 
    onChange,
    ...props 
  }, ref) => {
    const [value, setValue] = useState(props.value || '');
    const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;
    const hasError = Boolean(error);
    const hasHelper = Boolean(helperText);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = event.target.value;
      
      if (sanitize) {
        newValue = sanitizeInput(newValue);
      }
      
      setValue(newValue);
      
      if (onChange) {
        const syntheticEvent = {
          ...event,
          target: { ...event.target, value: newValue }
        };
        onChange(syntheticEvent);
      }
    };

    return (
      <div className="space-y-2">
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {props.required && (
            <span className="text-red-500 ml-1" aria-label="required">
              *
            </span>
          )}
        </label>
        
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            value={value}
            onChange={handleChange}
            className={cn(
              "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm",
              "focus:outline-none focus:ring-2 focus:ring-[#0A3D62] focus:border-transparent",
              "transition-colors duration-200",
              "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed",
              hasError && "border-red-500 focus:ring-red-500",
              success && "border-green-500 focus:ring-green-500",
              "high-contrast:border-2 high-contrast:border-black",
              className
            )}
            aria-invalid={hasError}
            aria-describedby={cn(
              hasError && errorId,
              hasHelper && helperId
            )}
            {...props}
          />
          
          {/* Success/Error Icons */}
          {(hasError || success) && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {hasError ? (
                <AlertCircle 
                  className="h-5 w-5 text-red-500" 
                  aria-hidden="true"
                />
              ) : success ? (
                <Check 
                  className="h-5 w-5 text-green-500" 
                  aria-hidden="true"
                />
              ) : null}
            </div>
          )}
        </div>

        {/* Error Message */}
        {hasError && (
          <p 
            id={errorId}
            className="text-sm text-red-600 dark:text-red-400"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}

        {/* Helper Text */}
        {hasHelper && !hasError && (
          <p 
            id={helperId}
            className="text-sm text-gray-600 dark:text-gray-400"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

AccessibleInput.displayName = 'AccessibleInput';
