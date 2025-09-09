import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({ t, lang, navigate }){
  return (
    <div className="paper" style={{marginTop:20}}>
      <div className="hd">{t.home}</div>
      <div className="bd">
        <div className="hero">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroBody}</p>
          <div className="cards">
            <div className="card">
              <h3>📝 {t.complaints}</h3>
              <p>{lang==='ar' ? 'أرسل شكواك أو اقتراحك بسهولة عبر النموذج المخصص' : 'Send your complaint or suggestion easily through the dedicated form.'}</p>
              <button className="btn" onClick={()=>navigate('/complaints')}>{t.ctaComplaints}</button>
            </div>
            <div className="card">
              <h3>🏆 {t.achievements}</h3>
              <p>{lang==='ar' ? 'تعرف على أبرز إنجازات المجلس خلال الفترة الماضية' : 'Explore the council’s recent highlights and impact.'}</p>
              <Link className="btn secondary" to="/achievements">{t.ctaLearn}</Link>
            </div>
            <div className="card">
              <h3>🏛️ {t.structure}</h3>
              <p>{lang==='ar' ? 'اطلع على الهيكلة التنظيمية واللجان' : 'See the organizational structure and committees.'}</p>
              <Link className="btn secondary" to="/structure">{t.ctaLearn}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
