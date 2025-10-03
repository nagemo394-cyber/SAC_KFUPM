import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({ t, lang, navigate }){
    const cardData = [
        {
            title: t.complaints,
            description: lang==='ar' ? 'أرسل شكواك أو اقتراحك بسهولة عبر النموذج المخصص' : 'Send your complaint or suggestion easily through the dedicated form.',
            link: '/complaints',
            buttonText: t.ctaComplaints,
            delay: '0.1s'
        },
        {
            title: t.achievements,
            description: lang==='ar' ? 'تعرف على أبرز إنجازات المجلس خلال الفترة الماضية' : 'Explore the council\'s recent highlights and impact.',
            link: '/achievements',
            buttonText: t.ctaLearn,
            isSecondary: true,
            delay: '0.2s'
        },
        {
            title: t.structure,
            description: lang==='ar' ? 'اطلع على الهيكلة التنظيمية واللجان' : 'See the organizational structure and committees.',
            link: '/structure',
            buttonText: t.ctaLearn,
            isSecondary: true,
            delay: '0.3s'
        }
    ]

    return (
        <div className="paper" style={{marginTop:20}}>
            <div className="hd">{t.home}</div>
            <div className="bd">
                <div className="hero">
                    <h1 style={{
                        color: '#000000',
                        fontSize: '34px',
                        lineHeight: '1.3',
                        margin: 0,
                        fontWeight: '800'
                    }}>
                        {t.heroTitle}
                    </h1>
                    <p style={{
                        animation: 'fadeIn 1s ease-out 0.2s backwards',
                        fontSize: '18px',
                        lineHeight: '1.6'
                    }}>
                        {t.heroBody}
                    </p>

                    <div className="cards">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="card"
                                style={{
                                    animationDelay: card.delay
                                }}
                            >
                                <div style={{
                                    marginBottom: '20px'
                                }}>
                                    {index === 0 ? (
                                        // Complaints Icon
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00733E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                        </svg>
                                    ) : index === 1 ? (
                                        // Achievements Icon
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="8" r="7"/>
                                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                                        </svg>
                                    ) : (
                                        // Structure Icon - Team/People
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                            <circle cx="9" cy="7" r="4"/>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                        </svg>
                                    )}
                                </div>

                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    marginBottom: '8px',
                                    color: '#111827'
                                }}>
                                    {card.title}
                                </h3>

                                <p style={{
                                    fontSize: '15px',
                                    lineHeight: '1.6',
                                    color: '#6B7280',
                                    marginBottom: '16px',
                                    flex: '1'
                                }}>
                                    {card.description}
                                </p>

                                <Link
                                    className={`btn ${card.isSecondary ? 'secondary' : ''}`}
                                    to={card.link || '/complaints'}
                                    style={{
                                        width: '100%',
                                        marginTop: 'auto'
                                    }}
                                >
                                    {card.buttonText}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}