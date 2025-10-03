import React, {useMemo, useState, useEffect} from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Complaints from '../pages/Complaints.jsx'
import Achievements from '../pages/Achievements.jsx'
import Structure from '../pages/Structure.jsx'

const STRINGS = {
    en: {
        brand:"Student Advisory Council",
        home:"Home",
        complaints:"Complaints & Suggestions",
        achievements:"Achievements",
        structure:"Council Structure",
        heroTitle:"Welcome to the official website of the Student Advisory Council at KFUPM",
        heroBody:"This platform lets you browse the council's info and submit complaints easily.",
        ctaComplaints:"Go to Complaints",
        ctaLearn:"Learn more",
        footerNote:"All rights reserved",
        lang:"Language",
        followUs:"Follow Us",
        university:"King Fahd University of Petroleum & Minerals"
    },
    ar: {
        brand:"المجلس الاستشاري الطلابي",
        home:"الرئيسية",
        complaints:"الشكاوى والمقترحات",
        achievements:"إنجازات المجلس",
        structure:"هيكلة المجلس",
        heroTitle:"المجلس الاستشاري الطلابي التابع لعمادة شؤون الطلاب في جامعة الملك فهد للبترول والمعادن",
        heroBody:"لتمثيل صوت الطلاب وتأكيد دورهم في صناعة القرار",
        ctaComplaints:"الذهاب لصفحة الشكاوى والمقترحات",
        ctaLearn:"اعرف المزيد",
        footerNote:"جميع الحقوق محفوظة",
        lang:"اللغة",
        followUs:"تابعنا",
        university:"جامعة الملك فهد للبترول والمعادن"
    }
}

export default function App(){
    const location = useLocation()
    const navigate = useNavigate()
    const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'ar')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr'
        document.documentElement.lang = lang
        localStorage.setItem('lang', lang)
        document.body.style.fontFamily = (lang === 'ar')
            ? `'CouncilArabic','CouncilEnglish','Tajawal','Inter',system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif`
            : `'CouncilEnglish','CouncilArabic','Inter','Tajawal',system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif`
    }, [lang])

    const t = useMemo(() => STRINGS[lang], [lang])
    const isActive = (p) => location.pathname === p

    return (
        <div>
            <nav className="nav" style={{
                boxShadow: scrolled ? '0 8px 30px rgba(0, 0, 0, 0.12)' : '0 4px 20px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease'
            }}>
                <div className="nav-inner container">
                    <Link to="/" className="brand">
                        <img src="/logo.png" alt="Council logo" />
                        <div>
                            <div className="ttl" style={{fontFamily:"'Inter', Arial, sans-serif", fontWeight:"bold", fontSize: '18px'}}>
                                SAC
                            </div>
                            <div style={{fontSize: 12, color: '#6b7280', fontWeight: '500'}}>
                                {t.brand}
                            </div>
                        </div>
                    </Link>

                    <div className="links">
                        <Link className={"link " + (isActive('/') ? 'active' : '')} to="/">{t.home}</Link>
                        <Link className={"link " + (isActive('/complaints') ? 'active' : '')} to="/complaints">{t.complaints}</Link>
                        <Link className={"link " + (isActive('/achievements') ? 'active' : '')} to="/achievements">{t.achievements}</Link>
                        <Link className={"link " + (isActive('/structure') ? 'active' : '')} to="/structure">{t.structure}</Link>
                    </div>

                    <div className="lang">
                        <span style={{fontSize: 12, color: '#6b7280', fontWeight: '600'}}>{t.lang}</span>
                        <button className={lang === 'ar' ? 'active' : ''} onClick={() => setLang('ar')} style={{fontFamily: 'CouncilArabic, Tajawal, sans-serif'}}>العربية</button>
                        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')} style={{fontFamily: 'Inter, sans-serif'}}>English</button>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className={lang === 'ar' ? 'rtl' : 'ltr'}>
                    <Routes>
                        <Route path="/" element={<Home t={t} lang={lang} navigate={navigate} />} />
                        <Route path="/complaints" element={<Complaints t={t} lang={lang} />} />
                        <Route path="/achievements" element={<Achievements t={t} lang={lang} />} />
                        <Route path="/structure" element={<Structure t={t} lang={lang} />} />
                    </Routes>
                </div>

                <div className="footer paper" style={{marginTop: 40, animation: 'fadeInUp 0.6s ease-out', padding: '40px 32px'}}>
                    <div style={{
                        maxWidth: '1100px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px'
                    }}>
                        {/* Main Content - Three Columns */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '40px',
                            alignItems: 'start'
                        }}>
                            {/* Column 1: Brand Info */}
                            <div>
                                <div style={{
                                    fontWeight: '700',
                                    fontSize: '18px',
                                    marginBottom: '12px',
                                    color: '#00733E'
                                }}>
                                    {t.brand}
                                </div>
                                <div style={{
                                    color: '#6B7280',
                                    fontSize: '14px',
                                    lineHeight: '1.6'
                                }}>
                                    {t.university}
                                </div>
                            </div>

                            {/* Column 2: Contact */}
                            <div>
                                <div style={{
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    marginBottom: '16px',
                                    color: '#111827'
                                }}>
                                    {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                                </div>
                                <a href="mailto:sac@kfupm.edu.sa" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: '#00733E',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    transition: 'all 0.3s ease',
                                    padding: '8px 0'
                                }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                                        <path d="m2 7 10 7 10-7"/>
                                    </svg>
                                    sac@kfupm.edu.sa
                                </a>
                            </div>

                            {/* Column 3: Social Media */}
                            <div>
                                <div style={{
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    marginBottom: '16px',
                                    color: '#111827'
                                }}>
                                    {t.followUs}
                                </div>
                                <div style={{
                                    display: 'flex',
                                    gap: '12px',
                                    flexWrap: 'wrap'
                                }}>
                                    {/* X (Twitter) */}
                                    <a
                                        href="https://x.com/kfupm_sac"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="X"
                                        style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '10px',
                                            background: '#F9FAFB',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.3s ease',
                                            border: '2px solid #E5E7EB'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = '#000000'
                                            e.currentTarget.style.borderColor = '#000000'
                                            e.currentTarget.style.transform = 'translateY(-3px)'
                                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
                                            e.currentTarget.querySelector('svg').style.stroke = '#FFFFFF'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = '#F9FAFB'
                                            e.currentTarget.style.borderColor = '#E5E7EB'
                                            e.currentTarget.style.transform = 'translateY(0)'
                                            e.currentTarget.style.boxShadow = 'none'
                                            e.currentTarget.querySelector('svg').style.stroke = '#111827'
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transition: 'stroke 0.3s ease'}}>
                                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                                        </svg>
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href="https://linkedin.com/company/sac-kfupm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '10px',
                                            background: '#F9FAFB',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.3s ease',
                                            border: '2px solid #E5E7EB'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = '#0A66C2'
                                            e.currentTarget.style.borderColor = '#0A66C2'
                                            e.currentTarget.style.transform = 'translateY(-3px)'
                                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(10,102,194,0.3)'
                                            e.currentTarget.querySelector('svg').style.stroke = '#FFFFFF'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = '#F9FAFB'
                                            e.currentTarget.style.borderColor = '#E5E7EB'
                                            e.currentTarget.style.transform = 'translateY(0)'
                                            e.currentTarget.style.boxShadow = 'none'
                                            e.currentTarget.querySelector('svg').style.stroke = '#111827'
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transition: 'stroke 0.3s ease'}}>
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                            <rect x="2" y="9" width="4" height="12"/>
                                            <circle cx="4" cy="4" r="2"/>
                                        </svg>
                                    </a>

                                    {/* Instagram */}
                                    <a
                                        href="https://instagram.com/kfupm_sac"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '10px',
                                            background: '#F9FAFB',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.3s ease',
                                            border: '2px solid #E5E7EB'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = '#E4405F'
                                            e.currentTarget.style.borderColor = '#E4405F'
                                            e.currentTarget.style.transform = 'translateY(-3px)'
                                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(228,64,95,0.3)'
                                            e.currentTarget.querySelector('svg').style.stroke = '#FFFFFF'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = '#F9FAFB'
                                            e.currentTarget.style.borderColor = '#E5E7EB'
                                            e.currentTarget.style.transform = 'translateY(0)'
                                            e.currentTarget.style.boxShadow = 'none'
                                            e.currentTarget.querySelector('svg').style.stroke = '#111827'
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transition: 'stroke 0.3s ease'}}>
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div style={{
                            height: '1px',
                            background: '#E5E7EB',
                            margin: '0'
                        }}></div>

                        {/* Copyright Section */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#9CA3AF',
                            fontSize: '14px',
                            textAlign: 'center'
                        }}>
                            © {new Date().getFullYear()} {t.brand} · {t.footerNote}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}