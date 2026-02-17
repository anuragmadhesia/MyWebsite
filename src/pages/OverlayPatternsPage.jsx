import { useState } from 'https://esm.sh/react@18.3.1';

export default function OverlayPatternsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <section>
      <h2>Modal / Drawer / Popover</h2>
      <div className="row wrap">
        <button className="primary" onClick={() => setModalOpen(true)}>Open Modal</button>
        <button className="primary" onClick={() => setDrawerOpen(true)}>Open Drawer</button>
        <div className="popover-wrap">
          <button className="primary" onClick={() => setPopoverOpen((value) => !value)}>
            Toggle Popover
          </button>
          {popoverOpen && (
            <div className="popover">
              <p>Popover for lightweight actions.</p>
              <button className="ghost" onClick={() => setPopoverOpen(false)}>Close</button>
            </div>
          )}
        </div>
      </div>

      {modalOpen && (
        <div className="overlay" onClick={() => setModalOpen(false)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <h3>Confirm Action</h3>
            <p>Use modals for high-priority interruptions.</p>
            <button className="primary" onClick={() => setModalOpen(false)}>Dismiss</button>
          </div>
        </div>
      )}

      {drawerOpen && (
        <div className="overlay" onClick={() => setDrawerOpen(false)}>
          <aside className="drawer" onClick={(event) => event.stopPropagation()}>
            <h3>Navigation Drawer</h3>
            <p className="muted">Use drawers for secondary navigation or carts.</p>
            <button className="primary" onClick={() => setDrawerOpen(false)}>Close Drawer</button>
          </aside>
        </div>
      )}
    </section>
  );
}
