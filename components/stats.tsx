const stats = [
  { value: '200+', label: 'Properties Cleaned' },
  { value: '5★', label: 'Average Rating' },
  { value: '100%', label: 'Eco-Friendly Solutions' },
  { value: '2024', label: 'Est. Locally in NB' },
]

export default function Stats() {
  return (
    <section className="bg-primary py-12 md:py-16" aria-label="Company statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-1 md:mb-2"
                style={{ fontFamily: 'var(--font-heading, var(--font-sans))' }}
              >
                {stat.value}
              </p>
              <p className="text-primary-foreground/70 text-xs sm:text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
