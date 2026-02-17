const metrics = [
  { label: 'Revenue', value: '$84,210', delta: '+11.2%' },
  { label: 'Active Users', value: '12,330', delta: '+4.8%' },
  { label: 'Conversion', value: '5.24%', delta: '+1.1%' },
];

const bars = [48, 72, 55, 80, 64, 92, 71];

const tickets = [
  { id: 'SUP-1002', owner: 'Mia', status: 'Open' },
  { id: 'SUP-1008', owner: 'Jon', status: 'In Progress' },
  { id: 'SUP-1010', owner: 'Nora', status: 'Resolved' },
];

export default function AdminDashboardPage() {
  return (
    <section>
      <h2>Admin Dashboard</h2>
      <div className="grid three">
        {metrics.map((metric) => (
          <article key={metric.label} className="card">
            <p className="muted">{metric.label}</p>
            <h3>{metric.value}</h3>
            <p className="success">{metric.delta}</p>
          </article>
        ))}
      </div>

      <div className="grid two">
        <article className="card">
          <h3>Weekly Traffic (Chart Mock)</h3>
          <div className="bars">
            {bars.map((height, index) => (
              <div key={index} className="bar" style={{ height: `${height}%` }} />
            ))}
          </div>
        </article>

        <article className="card">
          <h3>Recent Tickets</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Owner</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.owner}</td>
                  <td>{ticket.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </div>
    </section>
  );
}
