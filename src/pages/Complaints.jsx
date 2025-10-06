// import React, { useMemo, useRef, useState } from 'react'
// import { db } from '../firebase'
// import { collection, doc, runTransaction, serverTimestamp } from 'firebase/firestore'
// // + import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
//
//
// export default function Complaints({ t, lang }) {
//     const CATS = lang === 'ar' ? ['شكوى', 'اقتراح'] : ['Complaint', 'Suggestion']
//     const [category, setCategory] = useState(CATS[0])
//     const [subject, setSubject] = useState('')
//     const [message, setMessage] = useState('')
//     const [anonymous, setAnonymous] = useState(true)
//     const [name, setName] = useState('')
//     const [studentId, setStudentId] = useState('')
//     const [email, setEmail] = useState('')
//     const [toast, setToast] = useState(null)
//     const [isSending, setIsSending] = useState(false)
//     const textareaRef = useRef(null)
//
//     const valid = useMemo(
//         () => subject.trim() && message.trim() && subject.length <= 200 && message.length <= 2000,
//         [subject, message]
//     )
//
//     function show(msg, err = false) {
//         setToast({ msg, err })
//         setTimeout(() => setToast(null), 5000)
//     }
//
//     async function submit(e) {
//         e.preventDefault()
//         if (isSending) return
//
//         const subjectOK = subject.trim().length > 0 && subject.trim().length <= 200
//         const bodyOK    = message.trim().length > 0 && message.trim().length <= 2000
//         if (!subjectOK || !bodyOK) {
//             show(lang === 'ar' ? 'الرجاء تعبئة العنوان والنص بشكل صحيح' : 'Please fill subject and message correctly', true)
//             return
//         }
//
//         try {
//             setIsSending(true)
//
//             const counterRef = doc(db, 'meta', 'counters')
//
//             // ترانزاكشن: نقرأ رقم العداد، نزيده، ونحفظ الشكوى تحت ID = الرقم
//             await runTransaction(db, async (tx) => {
//                 const snap = await tx.get(counterRef)
//                 let next = 1
//
//                 if (!snap.exists()) {
//                     // أول مرة: أنشئ العدّاد بقيمة 2 (نستخدم 1 الآن)
//                     tx.set(counterRef, { complaintsNext: 2 })
//                     next = 1
//                 } else {
//                     next = (snap.data().complaintsNext || 1)
//                     tx.update(counterRef, { complaintsNext: next + 1 })
//                 }
//
//                 const safeName      = anonymous || !name.trim()      ? 'مجهول' : name.trim()
//                 const safeStudentId = anonymous || !studentId.trim() ? 'مجهول' : studentId.trim()
//                 const safeEmail     = anonymous || !email.trim()     ? 'مجهول' : email.trim()
//
//                 const complaintRef = doc(collection(db, 'complaints'), String(next))
//                 tx.set(complaintRef, {
//                     category: category,
//                     subject: subject.trim(),
//                     body: message.trim(),
//                     createdAt: serverTimestamp(),
//                     status: 'new',
//                     ua: navigator.userAgent,
//                     anonymous: !!anonymous,
//                     name: safeName,
//                     studentId: safeStudentId,
//                     email: safeEmail
//                 })
//             })
//
//             // تنظيف وتجهيز لإرسال جديد فورًا
//             setSubject('')
//             setMessage('')
//             setAnonymous(true)
//             setName('')
//             setStudentId('')
//             setEmail('')
//             show(lang === 'ar' ? 'تم إرسال الشكوى بنجاح' : 'Complaint sent successfully')
//             setTimeout(() => textareaRef.current?.focus(), 0)
//         } catch (err) {
//             console.error(err)
//             const msg =
//                 err?.code === 'permission-denied'
//                     ? (lang === 'ar' ? 'صلاحيات غير كافية (Rules/App Check).' : 'Permission denied (Rules/App Check).')
//                     : (lang === 'ar' ? 'فشل الإرسال، حاول لاحقاً' : 'Failed to submit, please try again')
//             show(msg, true)
//         } finally {
//             setIsSending(false)
//         }
//     }
//
//     const charCountStyle = (current, max) => ({
//         fontSize: '12px',
//         color: current > max * 0.9 ? '#ef4444' : current > max * 0.7 ? '#f59e0b' : '#6b7280',
//         textAlign: lang === 'ar' ? 'left' : 'right',
//         marginTop: '4px',
//         fontWeight: '500',
//         transition: 'color 0.3s ease'
//     })
//
//     return (
//         <div className="paper" style={{ marginTop: 20 }}>
//             <div className="hd">{t.complaints}</div>
//             <div className="bd">
//                 {toast && (
//                     <div className="toast">
//                         <div className={toast.err ? 'err' : ''}>{toast.msg}</div>
//                     </div>
//                 )}
//
//                 <form className="form" onSubmit={submit} noValidate>
//                     {/* Category */}
//                     <div style={{ animation: 'fadeInUp 0.5s ease-out', animationDelay: '0.1s', animationFillMode: 'backwards' }}>
//                         <label>{lang === 'ar' ? 'النوع' : 'Category'}</label>
//                         <div className="chips">
//                             {CATS.map((c, idx) => (
//                                 <button
//                                     type="button"
//                                     key={c}
//                                     onClick={() => setCategory(c)}
//                                     className={'chip ' + (category === c ? 'active' : '')}
//                                     aria-pressed={category === c}
//                                     style={{ animation: 'fadeInUp 0.5s ease-out', animationDelay: `${0.2 + idx * 0.1}s`, animationFillMode: 'backwards' }}
//                                 >
//                                     {c}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//
//                     {/* Subject */}
//                     <div style={{ animation: 'fadeInUp 0.5s ease-out', animationDelay: '0.4s', animationFillMode: 'backwards' }}>
//                         <label>{lang === 'ar' ? 'العنوان' : 'Subject'}</label>
//                         <input
//                             value={subject}
//                             onChange={e => setSubject(e.target.value)}
//                             placeholder={lang === 'ar' ? 'عنوان مختصر وواضح' : 'Short, meaningful subject'}
//                             maxLength={200}
//                             style={{ transition: 'all 0.3s ease' }}
//                         />
//                         <div style={charCountStyle(subject.length, 200)}>{subject.length} / 200</div>
//                     </div>
//
//                     {/* Message */}
//                     <div style={{ animation: 'fadeInUp 0.5s ease-out', animationDelay: '0.5s', animationFillMode: 'backwards' }}>
//                         <label>{lang === 'ar' ? 'النص' : 'Message'}</label>
//                         <textarea
//                             ref={textareaRef}
//                             value={message}
//                             onChange={e => setMessage(e.target.value)}
//                             placeholder={lang === 'ar' ? 'اكتب التفاصيل بشكل واضح...' : 'Please describe the issue in detail...'}
//                             maxLength={2000}
//                             rows={6}
//                             style={{ resize: 'vertical', minHeight: '120px', transition: 'all 0.3s ease' }}
//                         />
//                         <div style={charCountStyle(message.length, 2000)}>{message.length} / 2000</div>
//                     </div>
//
//                     {/* Anonymous */}
//                     <div style={{ animation: 'fadeInUp 0.5s ease-out', animationDelay: '0.6s', animationFillMode: 'backwards', background: '#F9FAFB', padding: 16, borderRadius: 12, border: '2px solid #E5E7EB' }}>
//                         <div className="checkbox">
//                             <input id="anon" type="checkbox" checked={anonymous} onChange={e => setAnonymous(e.target.checked)} />
//                             <label htmlFor="anon" style={{ textTransform: 'none', fontSize: 15, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
//                                 {lang === 'ar' ? 'إرسال بدون اسم' : 'Submit anonymously'}
//                             </label>
//                         </div>
//                     </div>
//
//                     {/* Contact (optional) */}
//                     {!anonymous && (
//                         <div style={{ animation: 'fadeInUp 0.5s ease-out', display: 'grid', gap: 16, padding: 20, background: '#F9FAFB', borderRadius: 12, border: '2px solid #E5E7EB' }}>
//                             <div style={{ fontWeight: 600, color: '#374151', marginBottom: 8, fontSize: 15 }}>
//                                 {lang === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
//                             </div>
//
//                             <div className="row" style={{ width: '100%' }}>
//                                 <div style={{ flex: '1 1 250px' }}>
//                                     <label>{lang === 'ar' ? 'الاسم' : 'Name'}</label>
//                                     <input value={name} onChange={e => setName(e.target.value)} placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Full name'} />
//                                 </div>
//                                 <div style={{ flex: '1 1 200px' }}>
//                                     <label>{lang === 'ar' ? 'الرقم الجامعي' : 'Student ID'}</label>
//                                     <input value={studentId} onChange={e => setStudentId(e.target.value)} placeholder="202******" />
//                                 </div>
//                                 <div style={{ flex: '1 1 260px' }}>
//                                     <label>{lang === 'ar' ? 'البريد الجامعي' : 'University Email'}</label>
//                                     <input value={email} onChange={e => setEmail(e.target.value)} placeholder="s202******@kfupm.edu.sa" />
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//
//                     <button className="btn" type="submit" aria-disabled={isSending} style={{ animation: 'fadeInUp 0.5s ease-out', animationDelay: '0.7s', animationFillMode: 'backwards', position: 'relative', overflow: 'hidden' }}>
//                         {isSending ? (<><span style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite', marginLeft: lang === 'ar' ? 8 : 0, marginRight: lang === 'en' ? 8 : 0 }}></span>{lang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...'}</>) : (lang === 'ar' ? 'إرسال' : 'Submit')}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }

import React, { useMemo, useRef, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Complaints({ t, lang }) {
    const CATS = lang === "ar" ? ["شكوى", "اقتراح"] : ["Complaint", "Suggestion"];
    const [category, setCategory] = useState(CATS[0]);
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [anonymous, setAnonymous] = useState(true);
    const [name, setName] = useState("");
    const [studentId, setStudentId] = useState("");
    const [email, setEmail] = useState("");
    const [toast, setToast] = useState(null);
    const [isSending, setIsSending] = useState(false);
    const textareaRef = useRef(null);

    const valid = useMemo(
        () => subject.trim() && message.trim() && subject.length <= 200 && message.length <= 2000,
        [subject, message]
    );

    function show(msg, err = false) {
        setToast({ msg, err });
        setTimeout(() => setToast(null), 5000);
    }

    async function submit(e) {
        e.preventDefault();
        if (isSending) return;

        const subjectOK = subject.trim().length > 0 && subject.trim().length <= 200;
        const bodyOK = message.trim().length > 0 && message.trim().length <= 2000;
        if (!subjectOK || !bodyOK) {
            show(
                lang === "ar" ? "الرجاء تعبئة العنوان والنص بشكل صحيح" : "Please fill subject and message correctly",
                true
            );
            return;
        }

        try {
            setIsSending(true);

            await addDoc(collection(db, "complaints"), {
                category,
                subject: subject.trim(),
                body: message.trim(),
                createdAt: serverTimestamp(),
                status: "new",
                ua: navigator.userAgent,
                anonymous: !!anonymous,
                name: anonymous || !name.trim() ? "مجهول" : name.trim(),
                studentId: anonymous || !studentId.trim() ? "مجهول" : studentId.trim(),
                email: anonymous || !email.trim() ? "مجهول" : email.trim(),
            });

            // reset
            setSubject("");
            setMessage("");
            setAnonymous(true);
            setName("");
            setStudentId("");
            setEmail("");
            show(lang === "ar" ? "تم إرسال الشكوى بنجاح" : "Complaint sent successfully");
            setTimeout(() => textareaRef.current?.focus(), 0);
        } catch (err) {
            console.error(err);
            const msg =
                err?.code === "permission-denied"
                    ? lang === "ar"
                        ? "صلاحيات غير كافية (Rules/App Check)."
                        : "Permission denied (Rules/App Check)."
                    : lang === "ar"
                        ? "فشل الإرسال، حاول لاحقاً"
                        : "Failed to submit, please try again";
            show(msg, true);
        } finally {
            setIsSending(false);
        }
    }

    const charCountStyle = (current, max) => ({
        fontSize: "12px",
        color: current > max * 0.9 ? "#ef4444" : current > max * 0.7 ? "#f59e0b" : "#6b7280",
        textAlign: lang === "ar" ? "left" : "right",
        marginTop: "4px",
        fontWeight: "500",
        transition: "color 0.3s ease",
    });

    return (
        <div className="paper" style={{ marginTop: 20 }}>
            <div className="hd">{t.complaints}</div>
            <div className="bd">
                {toast && (
                    <div className="toast">
                        <div className={toast.err ? "err" : ""}>{toast.msg}</div>
                    </div>
                )}

                <form className="form" onSubmit={submit} noValidate>
                    {/* Category */}
                    <div style={{ animation: "fadeInUp 0.5s ease-out", animationDelay: "0.1s", animationFillMode: "backwards" }}>
                        <label>{lang === "ar" ? "النوع" : "Category"}</label>
                        <div className="chips">
                            {CATS.map((c, idx) => (
                                <button
                                    type="button"
                                    key={c}
                                    onClick={() => setCategory(c)}
                                    className={"chip " + (category === c ? "active" : "")}
                                    aria-pressed={category === c}
                                    style={{
                                        animation: "fadeInUp 0.5s ease-out",
                                        animationDelay: `${0.2 + idx * 0.1}s`,
                                        animationFillMode: "backwards",
                                    }}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Subject */}
                    <div style={{ animation: "fadeInUp 0.5s ease-out", animationDelay: "0.4s", animationFillMode: "backwards" }}>
                        <label>{lang === "ar" ? "العنوان" : "Subject"}</label>
                        <input
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder={lang === "ar" ? "عنوان مختصر وواضح" : "Short, meaningful subject"}
                            maxLength={200}
                            style={{ transition: "all 0.3s ease" }}
                        />
                        <div style={charCountStyle(subject.length, 200)}>{subject.length} / 200</div>
                    </div>

                    {/* Message */}
                    <div style={{ animation: "fadeInUp 0.5s ease-out", animationDelay: "0.5s", animationFillMode: "backwards" }}>
                        <label>{lang === "ar" ? "النص" : "Message"}</label>
                        <textarea
                            ref={textareaRef}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={lang === "ar" ? "اكتب التفاصيل بشكل واضح..." : "Please describe the issue in detail..."}
                            maxLength={2000}
                            rows={6}
                            style={{ resize: "vertical", minHeight: "120px", transition: "all 0.3s ease" }}
                        />
                        <div style={charCountStyle(message.length, 2000)}>{message.length} / 2000</div>
                    </div>

                    {/* Anonymous */}
                    <div
                        style={{
                            animation: "fadeInUp 0.5s ease-out",
                            animationDelay: "0.6s",
                            animationFillMode: "backwards",
                            background: "#F9FAFB",
                            padding: 16,
                            borderRadius: 12,
                            border: "2px solid #E5E7EB",
                        }}
                    >
                        <div className="checkbox">
                            <input id="anon" type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
                            <label
                                htmlFor="anon"
                                style={{ textTransform: "none", fontSize: 15, display: "flex", alignItems: "center", cursor: "pointer" }}
                            >
                                {lang === "ar" ? "إرسال بدون اسم" : "Submit anonymously"}
                            </label>
                        </div>
                    </div>

                    {/* Contact (optional) */}
                    {!anonymous && (
                        <div
                            style={{
                                animation: "fadeInUp 0.5s ease-out",
                                display: "grid",
                                gap: 16,
                                padding: 20,
                                background: "#F9FAFB",
                                borderRadius: 12,
                                border: "2px solid #E5E7EB",
                            }}
                        >
                            <div style={{ fontWeight: 600, color: "#374151", marginBottom: 8, fontSize: 15 }}>
                                {lang === "ar" ? "معلومات التواصل" : "Contact Information"}
                            </div>

                            <div className="row" style={{ width: "100%" }}>
                                <div style={{ flex: "1 1 250px" }}>
                                    <label>{lang === "ar" ? "الاسم" : "Name"}</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder={lang === "ar" ? "الاسم الكامل" : "Full name"} />
                                </div>
                                <div style={{ flex: "1 1 200px" }}>
                                    <label>{lang === "ar" ? "الرقم الجامعي" : "Student ID"}</label>
                                    <input value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="202******" />
                                </div>
                                <div style={{ flex: "1 1 260px" }}>
                                    <label>{lang === "ar" ? "البريد الجامعي" : "University Email"}</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="s202******@kfupm.edu.sa" />
                                </div>
                            </div>
                        </div>
                    )}

                    <button className="btn" type="submit" aria-disabled={isSending} style={{ animation: "fadeInUp 0.5s ease-out", animationDelay: "0.7s", animationFillMode: "backwards", position: "relative", overflow: "hidden" }}>
                        {isSending ? (
                            <>
                <span
                    style={{
                        display: "inline-block",
                        width: 16,
                        height: 16,
                        border: "2px solid #fff",
                        borderTopColor: "transparent",
                        borderRadius: "50%",
                        animation: "spin 0.8s linear infinite",
                        marginLeft: lang === "ar" ? 8 : 0,
                        marginRight: lang === "en" ? 8 : 0,
                    }}
                ></span>
                                {lang === "ar" ? "جارٍ الإرسال..." : "Sending..."}
                            </>
                        ) : lang === "ar" ? (
                            "إرسال"
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
