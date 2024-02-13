/// <reference interfaces="react" />
import { InitializePayment, PaystackProps } from './interfaces';
interface IPaystackContext = {
    config: PaystackProps;
    initializePayment: InitializePayment;
    onSuccess: () => void;
    onClose: () => void;
};
declare const PaystackContext: import("react").Context<IPaystackContext>;
export default PaystackContext;
