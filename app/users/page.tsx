export default function UsersPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>User Management</h1>

      <table border={1} cellPadding={10}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>Sarah Smith</td>
            <td>Billing Manager</td>
          </tr>
          <tr>
            <td>Mike Lee</td>
            <td>Member</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}