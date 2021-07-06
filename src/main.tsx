// import fs from 'fs';
// import path from 'path';
import ReactPDF, {
  Page,
  Document,
  // Image,
  StyleSheet,
} from '@react-pdf/renderer';
import { InvoiceTitle } from './components/InvoiceTitle';
import { BillTo } from './components/BillTo';
import { InvoiceNo } from './components/InvoiceNo';
import { InvoiceItemsTable } from './components/InvoiceItemsTable';
import { InvoiceThankYouMsg } from './components/InvoiceThankYouMsg';
import { FC } from 'react';
import { Invoice } from './types';
import { invoiceData } from './data';

// const logo = fs.readFileSync(path.resolve(process.cwd(), './asset/logo.png'));

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const Doc: FC<{ invoice: Invoice }> = ({ invoice }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* <Image style={styles.logo} src={logo} /> */}
      <InvoiceTitle title="Invoice" />
      <InvoiceNo invoice={invoice} />
      <BillTo invoice={invoice} />
      <InvoiceItemsTable invoice={invoice} />
      <InvoiceThankYouMsg />
    </Page>
  </Document>
);

ReactPDF.renderToFile(<Doc invoice={invoiceData} />, process.argv[2]);
