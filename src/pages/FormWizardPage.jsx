import { useState } from 'https://esm.sh/react@18.3.1';

const steps = ['Account', 'Profile', 'Confirmation'];

export default function FormWizardPage() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({ email: '', role: '', company: '' });

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const emailValid = values.email.includes('@');
  const canProceed = step === 0 ? emailValid : true;

  return (
    <section>
      <h2>Form-heavy UI</h2>
      <div className="row wrap">
        {steps.map((label, index) => (
          <span key={label} className={`chip ${index === step ? 'active-chip' : ''}`}>
            {index + 1}. {label}
          </span>
        ))}
      </div>

      <article className="card form-card">
        {step === 0 && (
          <label>
            Work Email
            <input name="email" value={values.email} onChange={onChange} placeholder="work@email.com" />
            {!emailValid && values.email && <small className="error">Please enter a valid email.</small>}
          </label>
        )}
        {step === 1 && (
          <>
            <label>
              Role
              <select name="role" value={values.role} onChange={onChange}>
                <option value="">Select role</option>
                <option>Designer</option>
                <option>Engineer</option>
                <option>Product Manager</option>
              </select>
            </label>
            <label>
              Company
              <input name="company" value={values.company} onChange={onChange} placeholder="Acme Inc." />
            </label>
          </>
        )}
        {step === 2 && (
          <div>
            <p><strong>Email:</strong> {values.email || '—'}</p>
            <p><strong>Role:</strong> {values.role || '—'}</p>
            <p><strong>Company:</strong> {values.company || '—'}</p>
          </div>
        )}

        <div className="row">
          <button className="ghost" onClick={() => setStep((s) => Math.max(s - 1, 0))}>
            Back
          </button>
          <button
            className="primary"
            disabled={!canProceed}
            onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
          >
            Next
          </button>
        </div>
      </article>
    </section>
  );
}
