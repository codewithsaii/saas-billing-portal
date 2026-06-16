export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>SaaS Billing Portal</h1>

      <div>
        <h2>Current Plan</h2>
        <p>Pro Plan - ₹999/month</p>
      </div>

      <div>
        <h2>Next Invoice</h2>
        <p>₹999 due on July 1</p>
      </div>

      <div>
        <h2>Usage</h2>
        <p>150 / 500 API Requests</p>
      </div>
    </main>
  );
}
