import { FC } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { Invoice } from '../types';

const styles = StyleSheet.create({
  invoiceNoContainer: {
    flexDirection: 'row',
    marginTop: 36,
    justifyContent: 'flex-end',
  },
  invoiceDateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  invoiceDate: {
    fontSize: 12,
    fontStyle: 'bold',
  },
  label: {
    width: 60,
  },
});

export const InvoiceNo: FC<{ invoice: Invoice }> = ({ invoice }) => (
  <>
    <View style={styles.invoiceNoContainer}>
      <Text style={styles.label}>Invoice No:</Text>
      <Text style={styles.invoiceDate}>{invoice.invoice_no}</Text>
    </View>
    <View style={styles.invoiceDateContainer}>
      <Text style={styles.label}>Date: </Text>
      <Text>{invoice.trans_date}</Text>
    </View>
  </>
);
