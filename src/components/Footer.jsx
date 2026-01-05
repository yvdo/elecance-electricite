const Footer = () => {
    const currentYear = new Date().getFullYear()

    const handleScrollTo = (e, target) => {
        e.preventDefault()
        const element = document.querySelector(target)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const navLinks = [
        { href: '#hero', label: 'Accueil' },
        { href: '#services', label: 'Services' },
        { href: '#realisations', label: 'Réalisations' },
        { href: '#avis', label: 'Avis clients' },
        { href: '#apropos', label: 'À propos' },
        { href: '#faq', label: 'FAQ' },
        { href: '#contact', label: 'Contact' }
    ]

    const communes = [
        'Samoëns',
        'Morillon',
        'Verchaix',
        'Sixt-Fer-à-Cheval',
        'Taninges',
        'Cluses'
    ]

    return (
        <footer className="bg-charbon border-t border-ivoire/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1 - Brand */}
                    <div className="lg:col-span-1">
                        <div className="mb-4 inline-block">
                            <div className="bg-ivoire/95 rounded-lg px-3 py-1.5 shadow-sm">
                                <img
                                    src="/logo.png"
                                    alt="Elecance Électricité"
                                    className="h-12 w-auto"
                                />
                            </div>
                        </div>
                        <p className="text-ivoire/60 text-sm font-light leading-relaxed">
                            Électricité & élégance à Samoëns (74). Votre électricien haut de gamme pour chalets,
                            résidences secondaires et projets résidentiels en Haute-Savoie.
                        </p>
                    </div>

                    {/* Column 2 - Navigation */}
                    <div>
                        <h4 className="text-ivoire font-medium mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleScrollTo(e, link.href)}
                                        className="text-ivoire/60 hover:text-or transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Zone */}
                    <div>
                        <h4 className="text-ivoire font-medium mb-4">Zone d'intervention</h4>
                        <ul className="space-y-2">
                            {communes.map((commune) => (
                                <li key={commune}>
                                    <span className="text-ivoire/60 text-sm">{commune}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 - Contact */}
                    <div>
                        <h4 className="text-ivoire font-medium mb-4">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <svg className="w-4 h-4 text-or flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                <span className="text-ivoire/60 text-sm">Samoëns (74340)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-4 h-4 text-or flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:0783452864" className="text-or hover:text-or-light transition-colors text-sm">
                                    07 83 45 28 64
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-4 h-4 text-or flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:contact@elecance-electricite.fr" className="text-or hover:text-or-light transition-colors text-sm">
                                    contact@elecance-electricite.fr
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-ivoire/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-ivoire/40 text-sm">
                            © {currentYear} Elecance Électricité – Tous droits réservés.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-ivoire/40 hover:text-ivoire/60 transition-colors text-sm">
                                Mentions légales
                            </a>
                            <a href="#" className="text-ivoire/40 hover:text-ivoire/60 transition-colors text-sm">
                                Politique de confidentialité
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
