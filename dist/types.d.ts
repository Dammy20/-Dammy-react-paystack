export type Currency = 'NGN' | 'GHS' | 'USD' | 'ZAR' | 'KES' | 'XOF';
export type PaymentChannels = 'bank' | 'card' | 'qr' | 'ussd' | 'mobile_money' | 'eft' | 'bank_transfer' | 'payattitude';
type Bearer = 'account' | 'subaccount';
type phone = number | string;
type PaystackCustomFields<T> = {
    display_name: string;
    variable_name: string;
    value: T;
}
type PaystackMetadata<T> ={
    custom_fields: PaystackCustomFields<T>[];
}
type PaystackMetadata<P> = {
    [key: string]: P;
}
export type callback<T> = (response?: T) => void;
export type PaystackProps = {
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
export type InitializePayment = (options: {
    onSuccess?: callback<string>;
    onClose?: callback<string>;
    config?: Omit<PaystackProps, 'publicKey'>;
}) => void;
export type HookConfig = Omit<Partial<PaystackProps>, 'publicKey'> & Pick<PaystackProps, 'publicKey'>;
export {};
