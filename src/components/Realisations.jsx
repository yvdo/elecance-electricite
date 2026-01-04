const Realisations = () => {
    const projects = [
        {
            title: 'Rénovation tableau électrique',
            location: 'Chalet, Samoëns',
            category: 'Mise aux normes'
        },
        {
            title: 'Éclairage design salon',
            location: 'Appartement, Morillon',
            category: 'Éclairage'
        },
        {
            title: 'Installation domotique complète',
            location: 'Villa, Sixt-Fer-à-Cheval',
            category: 'Domotique'
        },
        {
            title: 'Rénovation électrique totale',
            location: 'Chalet ancien, Verchaix',
            category: 'Rénovation'
        },
        {
            title: 'Borne de recharge Tesla',
            location: 'Résidence, Taninges',
            category: 'Borne EV'
        },
        {
            title: 'Éclairage extérieur jardin',
            location: 'Chalet, Samoëns',
            category: 'Éclairage'
        }
    ]

    return (
        <section id="realisations" className="py-24 bg-charbon">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-or/10 border border-or/20 mb-6">
                        <span className="text-xs text-or font-medium tracking-wider uppercase">
                            Portfolio
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light text-ivoire mb-6">
                        Quelques réalisations en{' '}
                        <span className="text-or">Haute-Savoie</span>
                    </h2>

                    <p className="max-w-3xl mx-auto text-ivoire/60 font-light leading-relaxed">
                        Découvrez des exemples de rénovations électriques, créations d'éclairages et mises aux normes
                        réalisées dans des chalets et appartements de la vallée du Giffre. Chaque projet fait l'objet
                        d'un soin particulier apporté à la lumière, à la sécurité et aux finitions.
                    </p>
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-charbon-light border border-ivoire/5 hover:border-or/30 transition-all duration-500"
                        >
                            {/* Placeholder background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-charbon-lighter to-charbon flex items-center justify-center">
                                <div className="text-center p-6">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-or/10 flex items-center justify-center group-hover:bg-or/20 transition-colors duration-300">
                                        <svg className="w-8 h-8 text-or" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-ivoire/30 text-xs">Photo à ajouter</p>
                                </div>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-charbon via-charbon/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <span className="inline-block w-fit px-2 py-1 bg-or/20 rounded text-xs text-or font-medium mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-lg font-heading font-light text-ivoire mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-ivoire/50">
                                    {project.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Realisations
