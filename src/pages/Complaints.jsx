import React, { useMemo, useState } from 'react'

export default function Complaints({ t, lang }){
  const CATS = lang==='ar' ? ['شكوى','اقتراح','ملاحظة'] : ['Complaint','Suggestion','Note']
  const [category,setCategory]=useState(CATS[0])
  const [subject,setSubject]=useState('')
  const [message,setMessage]=useState('')
  const [anonymous,setAnonymous]=useState(true)
  const [name,setName]=useState('')
  const [studentId,setStudentId]=useState('')
  const [email,setEmail]=useState('')
  const [toast,setToast]=useState(null)
  const valid = useMemo(()=>subject.trim() && message.trim() && subject.length<=200 && message.length<=4000,[subject,message])

  function submit(e){
    e.preventDefault()
    if(!valid){ show(lang==='ar'?'الرجاء تعبئة الحقول بشكل صحيح':'Please fill in the fields correctly', true); return }
    setSubject(''); setMessage(''); setAnonymous(true); setName(''); setStudentId(''); setEmail('')
    show(lang==='ar'?'تم إرسال النموذج (تجريبي)':'Form submitted (prototype)')
  }
  function show(msg, err=false){ setToast({msg,err}); setTimeout(()=>setToast(null),3000) }

  return (
    <div className="paper" style={{marginTop:20}}>
      <div className="hd">{t.complaints}</div>
      <div className="bd">
        <div className="toast">{toast && <div className={toast.err?'err':''}>{toast.msg}</div>}</div>
        <form className="form" onSubmit={submit} noValidate>
          <label>{lang==='ar'?'النوع':'Category'}</label>
          <div className="chips">
            {CATS.map(c=> (
              <button type="button" key={c} onClick={()=>setCategory(c)} className={"chip "+(category===c?'active':'')} aria-pressed={category===c}>{c}</button>
            ))}
          </div>

          <label>{lang==='ar'?'العنوان':'Subject'}</label>
          <input value={subject} onChange={e=>setSubject(e.target.value)}
            placeholder={lang==='ar'?'عنوان مختصر ':'Short, meaningful subject'} maxLength={200} />

          <label>{lang==='ar'?'النص':'Message'}</label>
          <textarea value={message} onChange={e=>setMessage(e.target.value)}
            placeholder={lang==='ar'?'اكتب التفاصيل':'Please describe the issue'} maxLength={4000} />

          <div className="checkbox">
            <input id="anon" type="checkbox" checked={anonymous} onChange={e=>setAnonymous(e.target.checked)} />
            <label htmlFor="anon">{lang==='ar'?'إرسال بدون اسم':'Submit anonymously'}</label>
          </div>

          {!anonymous && (
            <div className="row" style={{width:'100%'}}>
              <div style={{flex:'1 1 250px'}}>
                <label>{lang==='ar'?'الاسم':'Name'}</label>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder={lang==='ar'?'الاسم الكامل':'Full name'} />
              </div>
              <div style={{flex:'1 1 200px'}}>
                <label>{lang==='ar'?'الرقم الجامعي':'Student ID'}</label>
                <input value={studentId} onChange={e=>setStudentId(e.target.value)} placeholder="202******" />
              </div>
              <div style={{flex:'1 1 260px'}}>
                <label>{lang==='ar'?'البريد الجامعي':'University Email'}</label>
                <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="s202******@kfupm.edu.sa" />
              </div>
            </div>
          )}

          <button className="btn" disabled={!valid}>{lang==='ar'?'إرسال':'Submit'}</button>
          <div className="hint" style={{fontSize:12,color:'#6b7280'}}>
            {lang==='ar'
              ? 'هذا نموذج تجريبي بدون قاعدة بيانات.'
              : 'This is a prototype only (no database).'}
          </div>
        </form>
      </div>
    </div>
  )
}
