import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { FC } from 'react';
import { Invoice } from '../types';

const borderColor = '#90e5fc';
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
  },
  description: {
    width: '60%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  qty: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8,
  },
  rate: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8,
  },
  amount: {
    width: '15%',
    textAlign: 'right',
    paddingRight: 8,
  },
});

export const InvoiceTableRow: FC<{ invoice: Invoice }> = ({ invoice }) => {
  return (
    <>
      {invoice.items.map((item) => (
        <View style={styles.row} key={item.sno.toString()}>
          <Text style={styles.description}>{item.desc}</Text>
          <Text style={styles.qty}>{item.qty}</Text>
          <Text style={styles.rate}>{item.rate}</Text>
          <Text style={styles.amount}>{(item.qty * item.rate).toFixed(2)}</Text>
        </View>
      ))}
    </>
  );
};
