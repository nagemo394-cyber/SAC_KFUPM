import React, {useMemo, useState, useEffect} from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Complaints from '../pages/Complaints.jsx'
import Achievements from '../pages/Achievements.jsx'
import Structure from '../pages/Structure.jsx'

const STRINGS = {
  en: { brand:"Student Advisory Council", home:"Home", complaints:"Complaints and Suggestions", achievements:"Achievements", structure:"Council Structure",
        heroTitle:"Welcome to the official website of the Student Advisory Council at KFUPM",
        heroBody:"This prototype lets you browse the council's info and submit complaints easily.",
        ctaComplaints:"Go to Complaints", ctaLearn:"Learn more", footerNote:"Colors & style inspired by official identity", lang:"Language" },
  ar: { brand:"المجلس الاستشاري الطلابي", home:"الرئيسية", complaints:"الشكاوى والمقترحات", achievements:"إنجازات المجلس", structure:"هيكلة المجلس",
        heroTitle:"المجلس الاستشاري الطلابي التابع لعمادة شؤون الطلاب في جامعة الملك فهد للبترول والمعادن",
        heroBody:"لتمثيل صوت الطلاب وتأكيد دورهم في صناعة القرار",
        ctaComplaints:"الذهاب لصفحة الشكاوى والمقترحات", ctaLearn:"اعرف المزيد", footerNote:"جميع الحقوق محفوظة", lang:"اللغة" }
}

export default function App(){
  const location = useLocation()
  const navigate = useNavigate()
  const [lang,setLang] = useState(() => localStorage.getItem('lang') || 'ar')

  useEffect(()=>{
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
    document.body.style.fontFamily = (lang==='ar')
      ? `'CouncilArabic','CouncilEnglish','Tajawal','Inter',system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif`
      : `'CouncilEnglish','CouncilArabic','Inter','Tajawal',system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif`
  },[lang])

  const t = useMemo(()=>STRINGS[lang], [lang])
  const isActive = (p) => location.pathname === p

  return (
    <div>
      <nav className="nav">
        <div className="nav-inner container">
          <div className="brand">
            <img src="/logo.png" alt="Council logo" />
            <div>
                <div
                    className="ttl"
                    style={{fontFamily:"'Inter', Arial, sans-serif", fontWeight:"bold"}}
                >SAC
                </div>

                <div style={{fontSize:12,color:'#6b7280'}}>{t.brand}</div>
            </div>
          </div>
          <div className="links">
            <Link className={"link "+(isActive('/')?'active':'')} to="/">{t.home}</Link>
            <Link className={"link "+(isActive('/complaints')?'active':'')} to="/complaints">{t.complaints}</Link>
            <Link className={"link "+(isActive('/achievements')?'active':'')} to="/achievements">{t.achievements}</Link>
            <Link className={"link "+(isActive('/structure')?'active':'')} to="/structure">{t.structure}</Link>
          </div>
          <div className="lang">
            <span style={{fontSize:12,color:'#6b7280'}}>{t.lang}</span>
            <button className={lang==='ar'?'active':''} onClick={()=>setLang('ar')}>العربية</button>
            <button className={lang==='en'?'active':''} onClick={()=>setLang('en')}>English</button>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className={lang==='ar'?'rtl':'ltr'}>
          <Routes>
            <Route path="/" element={<Home t={t} lang={lang} navigate={navigate} />} />
            <Route path="/complaints" element={<Complaints t={t} lang={lang} />} />
            <Route path="/achievements" element={<Achievements t={t} lang={lang} />} />
            <Route path="/structure" element={<Structure t={t} lang={lang} />} />
          </Routes>
        </div>
        <div className="footer paper" style={{marginTop:24}}>
          <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>© {t.brand}</div>
            <div>{t.footerNote}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
