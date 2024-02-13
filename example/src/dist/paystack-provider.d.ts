/// <reference interfaces="react" />
import { callback, PaystackProps } from './interfaces';
interface PaystackProviderProps extends PaystackProps {
    children: JSX.Element;
    onSuccess: callback;
    onClose: callback;
}
declare const PaystackProvider: ({ children, onSuccess, onClose, ...config }: PaystackProviderProps) => JSX.Element;
export default PaystackProvider;
