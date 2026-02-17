import { useState } from 'https://esm.sh/react@18.3.1';

export default function AuthPage() {
  const [mode, setMode] = useState('login');

  const title =
    mode === 'login' ? 'Login' : mode === 'register' ? 'Create Account' : 'Forgot Password';

  return (
    <section>
      <h2>Auth UI</h2>
      <div className="row wrap">
        <button className={mode === 'login' ? 'primary' : 'ghost'} onClick={() => setMode('login')}>
          Login
        </button>
        <button className={mode === 'register' ? 'primary' : 'ghost'} onClick={() => setMode('register')}>
          Register
        </button>
        <button className={mode === 'forgot' ? 'primary' : 'ghost'} onClick={() => setMode('forgot')}>
          Forgot Password
        </button>
      </div>

      <article className="card form-card">
        <h3>{title}</h3>
        <form className="stack">
          {mode !== 'forgot' && (
            <label>
              Email
              <input type="email" placeholder="you@example.com" required />
            </label>
          )}
          {mode === 'register' && (
            <label>
              Full Name
              <input type="text" placeholder="Jane Doe" required />
            </label>
          )}
          {mode === 'forgot' ? (
            <label>
              Account Email
              <input type="email" placeholder="you@example.com" required />
            </label>
          ) : (
            <label>
              Password
              <input type="password" placeholder="••••••••" required />
            </label>
          )}
          <button className="primary" type="submit">
            {mode === 'login' ? 'Sign In' : mode === 'register' ? 'Create Account' : 'Send Reset Link'}
          </button>
        </form>
      </article>
    </section>
  );
}
