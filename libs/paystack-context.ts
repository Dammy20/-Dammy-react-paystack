import {createContext} from 'react';
import {InitializePayment, PaystackProps} from './interfaces';

interface IPaystackContext = {
  config: PaystackProps;
  initializePayment: InitializePayment;
  onSuccess: () => void;
  onClose: () => void;
};

const PaystackContext = createContext<IPaystackContext>({
  config: {} as PaystackProps,
  initializePayment: () => null,
  onSuccess: () => null,
  onClose: () => null,
});

export default PaystackContext;
