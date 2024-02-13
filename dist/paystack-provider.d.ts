/// <reference types="react" />
import { callback, PaystackProps } from './types';
type PaystackProviderProps = PaystackProps & {
    children: JSX.Element;
    onSuccess: callback;
    onClose: callback;
}
declare const PaystackProvider: ({ children, onSuccess, onClose, ...config }: PaystackProviderProps) => JSX.Element;
export default PaystackProvider;
