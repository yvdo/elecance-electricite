const About = () => {
    const values = [
        { icon: '✨', label: 'Qualité' },
        { icon: '🎯', label: 'Finition' },
        { icon: '💡', label: 'Conseil' },
        { icon: '🛡️', label: 'Fiabilité' },
        { icon: '📋', label: 'Transparence' }
    ]

    return (
        <section id="apropos" className="py-24 bg-charbon-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image / Visual */}
                    <div className="relative">
                        <div className="aspect-square max-w-md mx-auto">
                            {/* Decorative circles */}
                            <div className="absolute inset-0">
                                <div className="absolute top-0 left-0 w-full h-full rounded-full border border-or/10" />
                                <div className="absolute top-4 left-4 right-4 bottom-4 rounded-full border border-or/20" />
                                <div className="absolute top-8 left-8 right-8 bottom-8 rounded-full border border-or/30" />
                            </div>

                            {/* Center content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-or to-or-dark flex items-center justify-center glow-box">
                                        <svg className="w-16 h-16 text-charbon" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
                                        </svg>
                                    </div>
                                    <div className="text-4xl font-heading font-light text-ivoire">
                                        <span className="text-or">+10</span> ans
                                    </div>
                                    <p className="text-ivoire/60 text-sm mt-2">d'expérience</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-or/10 border border-or/20 mb-6">
                            <span className="text-xs text-or font-medium tracking-wider uppercase">
                                Qui sommes-nous
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-heading font-light text-ivoire mb-6">
                            À propos d'<span className="text-or">Elecance Électricité</span>
                        </h2>

                        <div className="space-y-4 text-ivoire/70 font-light leading-relaxed mb-8">
                            <p>
                                Elecance Électricité, c'est plus de 10 ans d'expérience en installations et rénovations
                                électriques, avec une spécialisation progressive dans les chalets, résidences secondaires
                                et projets résidentiels haut de gamme.
                            </p>
                            <p>
                                Nous attachons une grande importance à la qualité des finitions, à la discrétion des
                                câblages et à la mise en valeur de la lumière dans chaque projet.
                            </p>
                            <p>
                                Notre priorité : des installations sûres, durables et esthétiques, réalisées dans le
                                respect des lieux et des personnes.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="flex flex-wrap gap-3">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 bg-charbon rounded-full border border-or/20"
                                >
                                    <span className="text-lg">{value.icon}</span>
                                    <span className="text-sm text-ivoire font-medium">{value.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
