import { useMemo, useState } from 'https://esm.sh/react@18.3.1';

const allRows = Array.from({ length: 24 }, (_, index) => ({
  id: index + 1,
  name: `Customer ${index + 1}`,
  orders: Math.floor(Math.random() * 20) + 1,
  spend: Math.floor(Math.random() * 1200) + 80,
}));

export default function DataTablePage() {
  const [sortBy, setSortBy] = useState('id');
  const [page, setPage] = useState(1);
  const perPage = 6;

  const sorted = useMemo(() => {
    return [...allRows].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return b[sortBy] - a[sortBy];
    });
  }, [sortBy]);

  const pageCount = Math.ceil(sorted.length / perPage);
  const start = (page - 1) * perPage;
  const visible = sorted.slice(start, start + perPage);

  return (
    <section>
      <h2>Data Table UI</h2>
      <div className="row wrap">
        <button className={sortBy === 'id' ? 'primary' : 'ghost'} onClick={() => setSortBy('id')}>
          Sort by ID
        </button>
        <button className={sortBy === 'orders' ? 'primary' : 'ghost'} onClick={() => setSortBy('orders')}>
          Sort by Orders
        </button>
        <button className={sortBy === 'spend' ? 'primary' : 'ghost'} onClick={() => setSortBy('spend')}>
          Sort by Spend
        </button>
        <button className={sortBy === 'name' ? 'primary' : 'ghost'} onClick={() => setSortBy('name')}>
          Sort by Name
        </button>
      </div>

      <article className="card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Orders</th>
              <th>Total Spend</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.orders}</td>
                <td>${row.spend}</td>
                <td>
                  <button className="tiny">View</button>
                  <button className="tiny">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="row">
          <button className="ghost" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
            Previous
          </button>
          <span className="muted">Page {page} of {pageCount}</span>
          <button className="ghost" disabled={page === pageCount} onClick={() => setPage((p) => p + 1)}>
            Next
          </button>
        </div>
      </article>
    </section>
  );
}
