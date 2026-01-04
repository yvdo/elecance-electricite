const ZoneIntervention = () => {
    const communes = [
        'Samoëns',
        'Morillon',
        'Verchaix',
        'Sixt-Fer-à-Cheval',
        'Taninges',
        'Cluses',
        'Vallée de l\'Arve'
    ]

    return (
        <section id="zone" className="py-24 bg-charbon-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-or/10 border border-or/20 mb-6">
                            <span className="text-xs text-or font-medium tracking-wider uppercase">
                                Zone d'intervention
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-heading font-light text-ivoire mb-6">
                            Électricien à Samoëns et dans toute la{' '}
                            <span className="text-or">vallée du Giffre</span>
                        </h2>

                        <div className="space-y-4 text-ivoire/70 font-light leading-relaxed mb-8">
                            <p>
                                Basé à Samoëns (74340), Elecance Électricité couvre l'ensemble de la vallée du Giffre :
                                Samoëns, Morillon, Verchaix, Sixt-Fer-à-Cheval, Taninges, ainsi que les environs de Cluses
                                et de la vallée de l'Arve.
                            </p>
                            <p>
                                Que vous habitiez ici à l'année ou que vous soyez propriétaire d'un chalet ou d'un
                                appartement en résidence secondaire, nous organisons les interventions en fonction de
                                vos disponibilités, y compris en période de vacances scolaires.
                            </p>
                        </div>

                        {/* Communes list */}
                        <div className="flex flex-wrap gap-2">
                            {communes.map((commune, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 bg-charbon rounded-full text-sm text-ivoire/70 border border-ivoire/10"
                                >
                                    {commune}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Map */}
                    <div className="relative">
                        <div className="aspect-square rounded-xl overflow-hidden bg-charbon border border-ivoire/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44384.77772866929!2d6.694683!3d46.0819384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c94a81b7e7f91%3A0x408ab2ae4bae820!2s74340%20Samo%C3%ABns!5e0!3m2!1sfr!2sfr!4v1704240000000!5m2!1sfr!2sfr"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Zone d'intervention - Samoëns, Haute-Savoie"
                            />
                        </div>

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 pointer-events-none rounded-xl border border-or/20" />

                        {/* Location badge */}
                        <div className="absolute top-4 left-4 bg-charbon/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-or/20">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-or" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                <span className="text-sm text-ivoire font-medium">Samoëns (74340)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ZoneIntervention
