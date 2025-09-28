import React from 'react'
export default function Structure({ t, lang }){
  const items = lang==='ar'
    ? ['رئيسة المجلس','نائبة الرئيس','لجنة التقنية والتطوير','لجنة الشكاوى والمقترحات','لجنة التواصل والإعلام']
    : ['Council President','Vice President','Technology Committee','Activities Committee','Communications & Media Committee']
  return (
    <div className="paper" style={{marginTop:20}}>
      <div className="hd">{t.structure}</div>
      <div className="bd">
        <ul style={{paddingInlineStart:'20px'}}>
          {items.map((it,i)=>(<li key={i} style={{marginBottom:8}}>{it}</li>))}
        </ul>
      </div>
    </div>
  )
}
