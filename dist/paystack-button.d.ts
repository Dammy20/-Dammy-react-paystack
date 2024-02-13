import { ReactNode } from 'react';
import { callback, PaystackProps } from './interfaces';
type PaystackButtonProps = PaystackProps & {
    text?: string;
    className?: string;
    children?: ReactNode;
    onSuccess?: callback;
    onClose?: callback;
};
declare const PaystackButton: ({ text, className, children, onSuccess, onClose, ...config }: PaystackButtonProps) => JSX.Element;
export default PaystackButton;
