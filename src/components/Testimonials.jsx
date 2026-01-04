const Testimonials = () => {
    const testimonials = [
        {
            quote: 'Intervention rapide et très professionnelle sur notre chalet à Samoëns. Explications claires, travail propre, je recommande.',
            author: 'Claire',
            location: 'Samoëns',
            rating: 5
        },
        {
            quote: 'Nous avons fait refaire toute l\'installation électrique de notre appartement : très bon suivi, devis respecté et super finition.',
            author: 'Pierre',
            location: 'Morillon',
            rating: 5
        },
        {
            quote: 'Excellent travail sur l\'éclairage de notre chalet de location. Ambiance chaleureuse, consommation maîtrisée, nos clients adorent.',
            author: 'Sophie & Marc',
            location: 'Verchaix',
            rating: 5
        }
    ]

    return (
        <section id="avis" className="py-24 bg-charbon">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-or/10 border border-or/20 mb-6">
                        <span className="text-xs text-or font-medium tracking-wider uppercase">
                            Témoignages
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light text-ivoire mb-6">
                        Ils nous font <span className="text-or">confiance</span>
                    </h2>
                </div>

                {/* Testimonials grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative bg-charbon-light rounded-xl p-8 border border-or/10 hover:border-or/30 transition-all duration-300"
                        >
                            {/* Quote icon */}
                            <div className="absolute -top-4 left-8">
                                <div className="w-8 h-8 rounded-full bg-or flex items-center justify-center">
                                    <svg className="w-4 h-4 text-charbon" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Rating stars */}
                            <div className="flex gap-1 mb-4 mt-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-or" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-ivoire/80 font-light leading-relaxed mb-6 italic">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-or/20 flex items-center justify-center">
                                    <span className="text-or font-medium text-sm">
                                        {testimonial.author.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-ivoire font-medium text-sm">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-ivoire/50 text-xs">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
