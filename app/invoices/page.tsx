export default function InvoicesPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Invoices</h1>

      <table border={1} cellPadding={10}>
        <tbody>
          <tr>
            <th>Invoice ID</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>INV-001</td>
            <td>₹999</td>
            <td>Paid</td>
          </tr>
          <tr>
            <td>INV-002</td>
            <td>₹999</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}