import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Form submission logic would go here
        console.log('Form submitted:', formData)
        alert('Merci pour votre message ! Nous vous recontacterons rapidement.')
    }

    return (
        <section id="contact" className="py-24 bg-charbon">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-or/10 border border-or/20 mb-6">
                        <span className="text-xs text-or font-medium tracking-wider uppercase">
                            Contact
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light text-ivoire mb-6">
                        Demander un devis ou une{' '}
                        <span className="text-or">intervention</span>
                    </h2>

                    <p className="max-w-3xl mx-auto text-ivoire/60 font-light leading-relaxed">
                        Expliquez-nous votre projet ou votre problème électrique (rénovation, mise aux normes, panne,
                        éclairage de chalet, etc.) et nous vous proposerons la solution la plus adaptée. Indiquez vos
                        disponibilités, votre adresse et, si possible, quelques photos de l'installation existante
                        afin que nous puissions préparer au mieux notre intervention.
                    </p>
                    <p className="max-w-3xl mx-auto text-ivoire/60 font-light leading-relaxed mt-4">
                        Nous vous recontactons rapidement pour vous donner un avis professionnel et un devis clair,
                        sans engagement.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm text-ivoire/80 mb-2">
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Votre nom"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm text-ivoire/80 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm text-ivoire/80 mb-2">
                                        Téléphone *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="06 00 00 00 00"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="type" className="block text-sm text-ivoire/80 mb-2">
                                        Type de demande *
                                    </label>
                                    <select
                                        id="type"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Sélectionnez...</option>
                                        <option value="devis">Devis</option>
                                        <option value="depannage">Dépannage</option>
                                        <option value="renovation">Rénovation</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm text-ivoire/80 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder="Décrivez votre projet ou votre problème électrique..."
                                />
                            </div>

                            <button type="submit" className="btn-primary text-base px-8 py-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                Envoyer
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <div className="bg-charbon-light rounded-xl p-8 border border-or/10 h-full">
                            <h3 className="text-xl font-heading font-light text-ivoire mb-6">
                                Coordonnées
                            </h3>

                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-or/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-or" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-ivoire font-medium">Adresse</p>
                                        <p className="text-ivoire/60 text-sm mt-1">
                                            Samoëns (74340)<br />
                                            Vallée du Giffre
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-or/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-or" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-ivoire font-medium">Téléphone</p>
                                        <a
                                            href="tel:0783452864"
                                            className="text-or hover:text-or-light transition-colors text-sm mt-1 block"
                                        >
                                            07 83 45 28 64
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-or/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-or" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-ivoire font-medium">Email</p>
                                        <a
                                            href="mailto:contact@elecance-electricite.fr"
                                            className="text-or hover:text-or-light transition-colors text-sm mt-1 block"
                                        >
                                            contact@elecance-electricite.fr
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-8 pt-8 border-t border-ivoire/10">
                                <p className="text-ivoire/60 text-sm mb-4">
                                    Besoin d'une intervention urgente ?
                                </p>
                                <a
                                    href="tel:0783452864"
                                    className="btn-outline w-full justify-center"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Appeler maintenant
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
