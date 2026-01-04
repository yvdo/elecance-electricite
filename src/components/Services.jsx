const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="card group">
            <div className="w-14 h-14 rounded-xl bg-or/10 flex items-center justify-center mb-6 group-hover:bg-or/20 transition-colors duration-300">
                <div className="text-or" dangerouslySetInnerHTML={{ __html: icon }} />
            </div>
            <h3 className="text-xl font-heading font-light text-ivoire mb-3">
                {title}
            </h3>
            <p className="text-ivoire/60 font-light text-sm leading-relaxed">
                {description}
            </p>
        </div>
    )
}

const Services = () => {
    const services = [
        {
            icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>`,
            title: 'Dépannage rapide',
            description: 'Nous intervenons rapidement en cas de panne électrique, disjoncteur qui saute, prise défectueuse ou éclairage en panne. Basés à Samoëns, nous assurons un dépannage réactif dans toute la vallée du Giffre et en Haute-Savoie.'
        },
        {
            icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>`,
            title: 'Rénovation',
            description: 'Nous réalisons la rénovation complète de votre installation électrique : remplacement des anciens équipements, mise aux normes et sécurisation du logement. Idéal pour appartements, chalets et résidences secondaires en Haute-Savoie.'
        },
        {
            icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>`,
            title: 'Éclairage / Design',
            description: 'Nous concevons des éclairages intérieurs et extérieurs qui mettent en valeur vos pièces, vos volumes et votre décoration. Spots, LED, rubans lumineux et ambiances chaleureuses : l\'éclairage devient un véritable élément de design dans votre chalet ou votre appartement.'
        },
        {
            icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>`,
            title: 'Domotique & maison connectée',
            description: 'Nous installons des solutions domotiques simples et fiables pour piloter votre éclairage, chauffage ou volets à distance. Depuis votre smartphone, vous gardez le contrôle de votre logement à Samoëns ou de votre résidence secondaire en Haute-Savoie.'
        },
        {
            icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>`,
            title: 'Chauffage électrique, sèche-serviettes',
            description: 'Nous dimensionnons et installons vos radiateurs électriques, sèche-serviettes et planchers chauffants pour un confort optimal en toutes saisons. Nous vous conseillons sur les équipements les plus adaptés à votre habitat et à votre consommation.'
        },
        {
            icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12H3m18 0h-2M12 3V1m0 22v-2" />
      </svg>`,
            title: 'Bornes de recharge véhicules électriques',
            description: 'Nous étudions, préparons et installons votre borne de recharge pour véhicule électrique à domicile ou dans votre chalet. L\'installation est réalisée dans le respect des normes en vigueur, avec un tableau électrique adapté et une utilisation simple au quotidien.'
        }
    ]

    return (
        <section id="services" className="py-24 bg-charbon">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-or/10 border border-or/20 mb-6">
                        <span className="text-xs text-or font-medium tracking-wider uppercase">
                            Nos prestations
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light text-ivoire mb-6">
                        Nos services d'électricité à Samoëns<br />
                        <span className="text-or">et en Haute-Savoie (74)</span>
                    </h2>

                    <p className="max-w-3xl mx-auto text-ivoire/60 font-light leading-relaxed">
                        Que vous rénoviez un appartement, un chalet de montagne ou un local professionnel,
                        Elecance Électricité prend en charge l'ensemble de vos travaux électriques, du simple
                        dépannage aux rénovations complètes et aux projets d'éclairage sur-mesure.
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
