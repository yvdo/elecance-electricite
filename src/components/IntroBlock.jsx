const IntroBlock = () => {
    const handleScrollTo = (e, target) => {
        e.preventDefault()
        const element = document.querySelector(target)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="py-24 bg-charbon-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-or/10 border border-or/20 mb-6">
                            <span className="text-xs text-or font-medium tracking-wider uppercase">
                                Vallée du Giffre
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-heading font-light text-ivoire mb-6">
                            Votre électricien de confiance à{' '}
                            <span className="text-or">Samoëns</span>
                        </h2>

                        <div className="space-y-4 text-ivoire/70 font-light leading-relaxed">
                            <p>
                                Elecance Électricité est votre électricien basé à Samoëns (74340), au cœur de la vallée
                                du Giffre. Nous accompagnons les particuliers, propriétaires de chalets et résidences
                                secondaires, ainsi que les professionnels pour tous leurs besoins en électricité :
                                dépannage, rénovation complète, mise aux normes et création d'éclairages élégants.
                            </p>
                            <p>
                                Nous intervenons rapidement à Samoëns et dans les communes voisines en Haute-Savoie (74).
                            </p>
                        </div>

                        <a
                            href="#services"
                            onClick={(e) => handleScrollTo(e, '#services')}
                            className="inline-flex items-center gap-2 mt-8 text-or hover:text-or-light transition-colors duration-300 group"
                        >
                            <span className="font-medium">En savoir plus</span>
                            <svg
                                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            {/* Decorative frame */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-or/20 to-transparent rounded-2xl" />

                            {/* Main image container */}
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden glow-box">
                                {/* Placeholder image - chalet éclairé */}
                                <div className="absolute inset-0 bg-gradient-to-br from-charbon-lighter to-charbon flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-or/10 flex items-center justify-center">
                                            <svg className="w-12 h-12 text-or" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                            </svg>
                                        </div>
                                        <p className="text-ivoire/50 text-sm font-light">
                                            Chalet haut de gamme éclairé
                                        </p>
                                        <p className="text-ivoire/30 text-xs mt-2">
                                            Image à remplacer
                                        </p>
                                    </div>
                                </div>

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-charbon/60 via-transparent to-transparent" />
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-or text-charbon px-4 py-2 rounded-lg shadow-lg">
                                <span className="text-sm font-medium">+10 ans d'expérience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroBlock
