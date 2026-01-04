const Process = () => {
    const steps = [
        {
            number: '01',
            title: 'Prise de contact',
            description: 'Vous nous contactez par téléphone ou via le formulaire de contact pour expliquer votre besoin, votre projet ou votre problème électrique.'
        },
        {
            number: '02',
            title: 'Visite sur place',
            description: 'Nous nous déplaçons à Samoëns et dans les communes voisines pour analyser votre installation, prendre les mesures et vérifier les contraintes techniques.'
        },
        {
            number: '03',
            title: 'Devis détaillé',
            description: 'Vous recevez un devis clair, adapté à votre budget et à vos délais. Nous vous expliquons les options possibles et les solutions retenues.'
        },
        {
            number: '04',
            title: 'Réalisation & suivi',
            description: 'Nous réalisons les travaux dans les règles de l\'art, en respectant les normes et votre logement. Nous restons disponibles ensuite pour toute question ou évolution de votre installation.'
        }
    ]

    return (
        <section id="process" className="py-24 section-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-or/10 border border-or/20 mb-6">
                        <span className="text-xs text-or font-medium tracking-wider uppercase">
                            Notre méthode
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light text-charbon mb-6">
                        Comment se déroule votre{' '}
                        <span className="text-or">projet électrique ?</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector line (desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-or/50 to-or/20" />
                            )}

                            <div className="relative bg-white rounded-xl p-8 shadow-lg border border-ivoire-dark hover:shadow-xl transition-shadow duration-300">
                                {/* Step number */}
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-or to-or-dark flex items-center justify-center mb-6 mx-auto lg:mx-0">
                                    <span className="text-xl font-heading font-semibold text-charbon">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="text-xl font-heading font-medium text-charbon mb-3 text-center lg:text-left">
                                    {step.title}
                                </h3>

                                <p className="text-charbon/70 font-light text-sm leading-relaxed text-center lg:text-left">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process
