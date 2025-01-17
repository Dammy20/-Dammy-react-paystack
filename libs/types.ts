export interface Currency = 'NGN' | 'GHS' | 'USD' | 'ZAR' | 'KES' | 'XOF';

export interface PaymentChannels =
  | 'bank'
  | 'card'
  | 'qr'
  | 'ussd'
  | 'mobile_money'
  | 'eft'
  | 'bank_transfer'
  | 'payattitude';

interface Bearer = 'account' | 'subaccount';

interface phone = number | string;

interface PaystackCustomFields {
  display_name: string;
  variable_name: string;
  value: any;
}

interface PaystackMetadata {
  custom_fields: PaystackCustomFields[];
}

interface PaystackMetadata {
  [key: string]: any;
}

export interface callback = (response?: any) => void;

export interface PaystackProps {
  publicKey: string;
  email: string;
  amount: number;
  firstname?: string;
  lastname?: string;
  phone?: phone;
  reference?: string;
  metadata?: PaystackMetadata;
  currency?: Currency | string;
  channels?: PaymentChannels[] | string[];
  label?: string;
  plan?: string;
  quantity?: number;
  subaccount?: string;
  transaction_charge?: number;
  bearer?: Bearer;
  'data-custom-button'?: string;
  split_code?: string;
  split?: Record<string, any>;
}

export interface InitializePayment = (options: {
  onSuccess?: callback;
  onClose?: callback;
  config?: Omit<PaystackProps, 'publicKey'>;
}) => void;

export interface HookConfig = Omit<Partial<PaystackProps>, 'publicKey'> &
  Pick<PaystackProps, 'publicKey'>;
