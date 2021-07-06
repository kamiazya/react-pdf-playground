import { View, StyleSheet } from '@react-pdf/renderer';
import { InvoiceTableHeader } from './InvoiceTableHeader';
import { InvoiceTableRow } from './InvoiceTableRow';
import { InvoiceTableBlankSpace } from './InvoiceTableBlankSpace';
import { InvoiceTableFooter } from './InvoiceTableFooter';
import { FC } from 'react';
import { Invoice } from '../types';

const tableRowsCount = 11;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#bff0fd',
  },
});

export const InvoiceItemsTable: FC<{ invoice: Invoice }> = ({ invoice }) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader />
    <InvoiceTableRow invoice={invoice} />
    <InvoiceTableBlankSpace rowsCount={tableRowsCount - invoice.items.length} />
    <InvoiceTableFooter invoice={invoice} />
  </View>
);
