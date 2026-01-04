const Hero = () => {
    const handleScrollTo = (e, target) => {
        e.preventDefault()
        const element = document.querySelector(target)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-charbon overflow-hidden"
        >
            {/* Animated background glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-or/5 rounded-full blur-3xl animate-pulse-glow" />
                <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-or/3 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `linear-gradient(rgba(245, 241, 232, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(245, 241, 232, 0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }} />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in-up">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-or/10 border border-or/20 mb-8">
                        <span className="w-2 h-2 rounded-full bg-or animate-pulse" />
                        <span className="text-sm text-or font-light tracking-wide">
                            Électricien en Haute-Savoie
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-light text-ivoire mb-6 glow-text">
                        Électricien à Samoëns
                        <span className="block text-or">(74)</span>
                        <span className="block text-2xl sm:text-3xl md:text-4xl mt-4 font-light">
                            Elecance Électricité
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="max-w-3xl mx-auto text-base sm:text-lg text-ivoire/70 font-light leading-relaxed mb-10">
                        Elecance Électricité est votre électricien basé à Samoëns (74340), au cœur de la vallée du Giffre.
                        Nous accompagnons les particuliers, propriétaires de chalets et résidences secondaires, ainsi que
                        les professionnels pour tous leurs besoins en électricité : dépannage, rénovation complète,
                        mise aux normes et création d'éclairages élégants.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#contact"
                            onClick={(e) => handleScrollTo(e, '#contact')}
                            className="btn-primary text-base px-8 py-4"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Demander un devis
                        </a>
                        <a
                            href="tel:0783452864"
                            className="btn-outline text-base px-8 py-4"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Urgence / Dépannage
                        </a>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                        <svg className="w-6 h-6 text-or/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
