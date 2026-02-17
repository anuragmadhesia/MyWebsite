import { NavLink, Route, Routes } from 'https://esm.sh/react-router-dom@6.30.1';
import { useMemo, useState } from 'https://esm.sh/react@18.3.1';
import AdminDashboardPage from './pages/AdminDashboardPage.jsx';
import EcommercePage from './pages/EcommercePage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import FormWizardPage from './pages/FormWizardPage.jsx';
import DataTablePage from './pages/DataTablePage.jsx';
import OverlayPatternsPage from './pages/OverlayPatternsPage.jsx';

const links = [
  { to: '/', label: 'Landing UI' },
  { to: '/admin', label: 'Admin Dashboard' },
  { to: '/ecommerce', label: 'E-commerce UI' },
  { to: '/auth', label: 'Auth UI' },
  { to: '/forms', label: 'Form-heavy UI' },
  { to: '/data-table', label: 'Data Table UI' },
  { to: '/overlays', label: 'Modal / Drawer / Popover' },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const appClass = useMemo(() => (darkMode ? 'app dark' : 'app light'), [darkMode]);

  return (
    <div className={appClass}>
      <aside className="sidebar">
        <div>
          <h1>UI Lab</h1>
          <p>Compare multiple app surfaces in one project.</p>
        </div>
        <nav>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button className="primary" onClick={() => setDarkMode((value) => !value)}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </aside>
      <main className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/forms" element={<FormWizardPage />} />
          <Route path="/data-table" element={<DataTablePage />} />
          <Route path="/overlays" element={<OverlayPatternsPage />} />
        </Routes>
      </main>
    </div>
  );
}
