import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      {/* Background image */}
      <Image
        src="/hero.png"
        alt="Professional pressure washing technician at work"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/60" />

      {/* Subtle blue bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-6 -mt-[75px]">
        <p className="text-white/70 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-2 md:mb-3">
          Quispamsis &amp; Greater Saint John Area
        </p>
        <Image
          src="/logo.png"
          alt="Valley Pressure Washing logo"
          width={1680}
          height={576}
          className="h-[105px] sm:h-[150px] md:h-[195px] lg:h-[240px] w-auto object-contain mx-auto mb-2"
          priority
        />
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-2 md:mb-3"
          style={{ fontFamily: 'var(--font-heading, var(--font-sans))' }}
        >
          Restore Your Property&apos;s{' '}
          <span className="text-white">True Shine</span>
        </h1>
        <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8 text-pretty">
          Valley Pressure Washing rejuvenates your home or business exterior with the highest quality
          pressure washing services — powered by passionate local entrepreneurs.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#contact"
            className="bg-secondary text-secondary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold hover:bg-accent transition-colors shadow-lg"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="border border-white/50 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold hover:bg-white/10 transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
