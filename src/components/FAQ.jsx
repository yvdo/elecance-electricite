import { useState } from 'react'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: 'Intervenez-vous en urgence à Samoëns et dans les alentours ?',
            answer: 'Oui, nous proposons un service de dépannage électrique dans la vallée du Giffre, en fonction de nos disponibilités. En cas de coupure de courant, de disjoncteur qui saute ou de panne sur votre installation, contactez-nous directement par téléphone pour une prise en charge rapide.'
        },
        {
            question: 'Travaillez-vous sur les résidences secondaires et locations saisonnières ?',
            answer: 'Oui, nous intervenons très régulièrement dans des chalets et appartements loués en saison ou occupés ponctuellement. Nous pouvons organiser les visites en amont de la saison d\'hiver ou d\'été pour sécuriser votre installation et éviter les mauvaises surprises.'
        },
        {
            question: 'Réalisez-vous de petits dépannages (prise, interrupteur, luminaire) ?',
            answer: 'Bien sûr. Un interrupteur qui ne fonctionne plus, un luminaire à remplacer ou une prise à ajouter : nous pouvons intervenir pour ce type de petits travaux, à Samoëns et dans les communes voisines.'
        },
        {
            question: 'Êtes-vous couverts par une assurance professionnelle ?',
            answer: 'Oui, nous travaillons avec une assurance responsabilité civile professionnelle adaptée à nos activités, et nos travaux respectent les normes en vigueur.'
        }
    ]

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-24 section-light">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-or/10 border border-or/20 mb-6">
                        <span className="text-xs text-or font-medium tracking-wider uppercase">
                            FAQ
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light text-charbon mb-6">
                        Questions <span className="text-or">fréquentes</span>
                    </h2>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-ivoire-dark overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span className="text-charbon font-medium pr-4">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-or/10 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-4 h-4 text-or" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 text-charbon/70 font-light leading-relaxed border-t border-ivoire-dark pt-4">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
