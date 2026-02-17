const pricing = [
  { name: 'Starter', price: '$12', features: ['1 Project', 'Basic Analytics', 'Email Support'] },
  { name: 'Growth', price: '$29', features: ['10 Projects', 'Advanced Analytics', 'Priority Support'] },
  { name: 'Scale', price: '$99', features: ['Unlimited Projects', 'AI Insights', 'Dedicated Manager'] },
];

const testimonials = [
  { name: 'Nina Patel', quote: 'Our conversion jumped by 31% after switching to these patterns.' },
  { name: 'Samuel Kim', quote: 'The UI consistency made onboarding faster for new team members.' },
  { name: 'Ava Ross', quote: 'Dark mode + accessible defaults gave our users immediate value.' },
];

export default function LandingPage() {
  return (
    <section>
      <div className="hero">
        <h2>Build and Compare Modern UI Patterns</h2>
        <p>
          This page demonstrates landing page building blocks: hero, pricing sections, and social proof.
        </p>
        <div className="row">
          <button className="primary">Start Free Trial</button>
          <button className="ghost">View Components</button>
        </div>
      </div>

      <h3>Pricing</h3>
      <div className="grid three">
        {pricing.map((plan) => (
          <article className="card" key={plan.name}>
            <h4>{plan.name}</h4>
            <p className="price">{plan.price}/mo</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className="primary">Choose {plan.name}</button>
          </article>
        ))}
      </div>

      <h3>Testimonials</h3>
      <div className="grid three">
        {testimonials.map((item) => (
          <article className="card" key={item.name}>
            <p>“{item.quote}”</p>
            <p className="muted">— {item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
