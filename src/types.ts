export interface InvoiceItem {
  sno: number;
  desc: string;
  qty: number;
  rate: number;
}
export interface Invoice {
  id: string;
  invoice_no: string;
  balance: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  trans_date: string;
  due_date: string;
  items: InvoiceItem[];
}
