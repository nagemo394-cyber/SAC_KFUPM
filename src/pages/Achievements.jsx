import React from 'react'
export default function Achievements({ t, lang }){
  const items = lang==='ar'
    ? ['إطلاق منصة البلاغات الإلكترونية','تحسين الخدمات بناءً على الاستبيانات']
    : ['Launched the online complaints platform','Organized Student Innovation Week','Improved services based on surveys']
  return (
    <div className="paper" style={{marginTop:20}}>
      <div className="hd">{t.achievements}</div>
      <div className="bd">
        <ul style={{paddingInlineStart:'20px'}}>
          {items.map((it,i)=>(<li key={i} style={{marginBottom:8}}>{it}</li>))}
        </ul>
      </div>
    </div>
  )
}
