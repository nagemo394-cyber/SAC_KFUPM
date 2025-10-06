// import React from 'react'
//
//
//
// export default function Achievements({ t, lang }){
//
//
//
//
//
//     // ---------- الإنجازات ----------
//
//     const achievements = lang === 'ar'
//
//         ? [
//
//             { img: "/food.png", text: 'تقديم توصية لرفع جودة الطعام في الحرم الجامعي،حيث طُبّقت التحسينات' },
//
//             { img: '/meeting.png', text: 'تطبيق اقترح المجلس بإضافة محطة مرور للباصات المخصصة للطالبات بالقرب من 22' },
//
//             { img: '/survay2.png', text: 'بناءً على توصية المجلس لتطوير المرافق في القنصلة,باشرت العمادة عملية التطوير' },
//
//             { img: '/survay.png', text: 'تحسين الخدمات بناءً على الاستبيانات,حيث تدرس النتائج لرفع توصيات' },
//
//             { img: 'platform.png', text: 'إطلاق منصة البلاغات الإلكترونية' }
//
//         ]
//
//         : [
//
//             { img: 'food.png', text: 'Providing a recommendation to improve the quality of food in the university cafeteria, where improvements have been implemented' },
//
//             { img: '/meeting.png', text: 'Implementing the council’s proposal to add a bus stop for female students near Building 22' },
//
//             { img: '/survay2.png', text: 'Based on the council’s recommendation to enhance the facilities in the consulate area, the deanship has begun the development process' },
//
//             { img: '/survay.png', text: 'Improving services based on survey results, which are being studied to make further recommendations' },
//
//             { img: '/platform.png', text: 'Launching the electronic reporting platform' }
//
//         ];
//
//
//
//     const visionMission = lang === 'ar'
//
//         ? [
//
//             { title: 'رؤيتنا', text: 'الوصول إلى بيئة جامعية متكاملة تلبي احتياجات الطلاب والطالبات، تدعمهم لتحقيق طموحاتهم، وتحفزهم على الإبداع والتطوير.' },
//
//             { title: 'رسالتنا', text: 'تمثيل احتياجات وآراء الطلاب والطالبات أمام العمادة، وتعزيز التواصل، والعمل على تحسين التجربة الجامعية من خلال مبادرات ومشاريع وتوصيات تعزز من جودة الحياة في الجامعة.' }
//
//         ]
//
//         : [
//
//             { title: 'Vision', text: 'Creating a fully supportive university environment that meets students’ needs, empowers them to achieve their ambitions, and encourages creativity and development.' },
//
//             { title: 'Mission', text: 'Representing students’ needs and opinions to the deanship, enhancing communication, and improving the university experience through initiatives, projects, and recommendations that enhance quality of life.' }
//
//         ];
//
//
//
//     const goals = lang === 'ar'
//
//         ? ['تمثيل الطلاب والطالبات', 'تحسين جودة الأنشطة والخدمات', 'تعزيز القيادة والعمل الجماعي']
//
//         : ['Represent students', 'Improve activities and services', 'Enhance leadership and teamwork'];
//
//
//
//     const values = lang === 'ar'
//
//         ? ['الالتزام', 'المسؤولية', 'التعاون']
//
//         : ['Commitment', 'Responsibility', 'Collaboration'];
//
//
//
//     const sectionTitles = lang === 'ar'
//
//         ? { goals: 'أهدافنا', values: 'قيمنا' }
//
//         : { goals: 'Our Goals', values: 'Our Values' };
//
//
//
//
//
//     const paperStyle = {
//
//         backgroundColor: '#fff',
//
//         borderRadius: 12,
//
//         marginTop: 20,
//
//         padding: 20,
//
//         boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
//
//     };
//
//
//
//     const hdStyle = {
//
//         fontSize: 22,
//
//         fontWeight: 'bold',
//
//         marginBottom: 12,
//
//         color: '#0f5132',
//
//         textAlign:  lang === 'ar' ? 'right' : 'left'
//
//     };
//
//
//
//     const bdStyle = {
//
//         fontSize: 16,
//
//         lineHeight: 1.8,
//
//         color: '#333',
//
//         textAlign:  lang === 'ar' ? 'right' : 'left'
//
//     };
//
//
//
//     const listStyle = {
//
//         paddingInlineStart: '20px',
//
//         listStyleType: 'disc',
//
//         textAlign: lang === 'ar' ? 'right' : 'left'
//
//     };
//
//
//
//     return (
//
//         <div style={{ padding: 20 }}>
//
//
//
//             {/* 🔹 إنجازات */}
//
//             {/* إنجازات */}
//
//             <div className="paper" style={{ marginTop: 20 }}>
//
//                 <div
//
//                     className="hd"
//
//                     style={{
//
//                         fontSize: 22,
//
//                         fontWeight: 'bold',
//
//                         marginBottom: 12,
//
//                         color: '#0f5132',
//
//                         textAlign: lang === 'ar' ? 'right' : 'left',
//
//                     }}
//
//                 >
//
//                     {t.achievements}
//
//                 </div>
//
//
//
//                 <div
//
//                     className="bd"
//
//                     style={{
//
//                         overflowX: 'auto',
//
//                         whiteSpace: 'nowrap',
//
//                         display: 'flex',
//
//                         gap: 20,
//
//                         paddingBottom: 10,
//
//                     }}
//
//                 >
//
//                     {achievements.map((item, i) => (
//
//                         <div
//
//                             key={i}
//
//                             style={{
//
//                                 display: 'inline-flex',
//
//                                 flexDirection: 'column',
//
//                                 alignItems: 'center',
//
//                                 justifyContent: 'flex-start',
//
//                                 width: 220,
//
//                                 backgroundColor: '#fff',
//
//                                 border: '1px solid #198754',
//
//                                 borderRadius: 12,
//
//                                 padding: 12,
//
//                                 boxSizing: 'border-box',
//
//                                 textAlign: 'center',
//
//                                 whiteSpace: 'normal', // ← مهم جداً حتى النص ينزل سطر جديد
//
//                             }}
//
//                         >
//
//                             <img
//
//                                 src={item.img}
//
//                                 alt={`achievement-${i}`}
//
//                                 style={{
//
//                                     width: '100%',
//
//                                     height: 130,
//
//                                     objectFit: 'cover',
//
//                                     borderRadius: 8,
//
//                                     marginBottom: 10,
//
//                                 }}
//
//                             />
//
//                             <div
//
//                                 style={{
//
//                                     fontSize: 15,
//
//                                     color: '#333',
//
//                                     lineHeight: 1.6,
//
//                                 }}
//
//                             >
//
//                                 {item.text}
//
//                             </div>
//
//                         </div>
//
//                     ))}
//
//                 </div>
//
//             </div>
//
//
//
//             {/* رؤية + رسالة */}
//
//             {visionMission.map((item, i) => (
//
//                 <div key={i} className="paper" style={{marginTop:20}}>
//
//                     <div className="hd" style={hdStyle}>{item.title}</div>
//
//                     <div className="bd" style={bdStyle}>{item.text}</div>
//
//                 </div>
//
//             ))}
//
//
//
//             {/* أهدافنا */}
//
//             <div className="paper" style={{marginTop:20}}>
//
//                 <div className="hd" style={hdStyle}>{sectionTitles.goals}</div>
//
//                 <div className="bd" style={bdStyle}>
//
//                     {goals.map((goal, i) => (
//
//                         <div key={i}>{goal}</div>
//
//                     ))}
//
//                 </div>
//
//             </div>
//
//
//
//             {/* قيمنا */}
//
//             <div className="paper" style={{marginTop:20}}>
//
//                 <div className="hd" style={hdStyle}>{sectionTitles.values}</div>
//
//                 <div className="bd" style={bdStyle}>
//
//                     {values.map((val, i) => (
//
//                         <div key={i}>{val}</div>
//
//                     ))}
//
//                 </div>
//
//             </div>
//
//
//
//         </div>
//
//     );
//
// }


import React from 'react'

export default function Achievements({ t, lang }){

    const achievements = lang === 'ar'
        ? [
            { img: "/food.jpeg", text: 'قدّم المجلس توصية لرفع جودة الطعام في الحرم الجامعي، فاستجابت الجهات المعنية ونفّذت التحسينات' },
            { img: '/meeting.png', text: 'اقترح المجلس إضافة محطة لباصات الطالبات قرب مبنيي 22 و59، ونُفِّذ المقترح' },
            { img: '/survay2.jpeg', text: 'رفع المجلس توصية لتطوير المرافق في القنصلية، وقد باشرت العمادة والجهات المعنية تنفيذها' },
            { img: '/survay.png', text: 'أطلق المجلس استبيانًا عن مقاهي الجامعة جمع أكثر من 1400 مشاركة و400 مقترح، وتُدرس نتائجه لرفع التوصيات عبر العمادة' },
            { img: 'platform.png', text: 'أطلق المجلس موقعًا لاستقبال الشكاوى والمقترحات' }
        ]
        : [
            { img: 'food.jpeg', text: 'The council recommended improving the quality of campus food, and the concerned authorities implemented the enhancements' },
            { img: '/meeting.png', text: 'The council proposed a bus stop for female students near Buildings 22 and 59, and it was implemented' },
            { img: '/survay2.jpeg', text: 'The council recommended enhancing the consulate’s facilities, and the dean’s office and relevant authorities commenced execution' },
            { img: '/survay.png', text: 'The council launched a survey on campus cafés, gathering over 1,400 responses and 400 proposals; its findings will inform recommendations through the dean’s office' },
            { img: '/platform.png', text: 'The council launched a platform to receive complaints and suggestions' }
        ];

    const visionMission = lang === 'ar'
        ? [
            { title: 'رؤيتنا', text: 'الوصول إلى بيئة جامعية متكاملة تلبي احتياجات الطلاب والطالبات، تدعمهم لتحقيق طموحاتهم، وتحفزهم على الإبداع والتطوير.' },
            { title: 'رسالتنا', text: 'تمثيل احتياجات وآراء الطلاب والطالبات أمام العمادة، وتعزيز التواصل، والعمل على تحسين التجربة الجامعية من خلال مبادرات ومشاريع وتوصيات تعزز من جودة الحياة في الجامعة.' }
        ]
        : [
            { title: 'Vision', text: 'Creating a fully supportive university environment that meets students needs, empowers them to achieve their ambitions, and encourages creativity and development.' },
            { title: 'Mission', text: 'Representing students needs and opinions to the deanship, enhancing communication, and improving the university experience through initiatives, projects, and recommendations that enhance quality of life.' }
        ];

    const goals = lang === 'ar'
        ? ['تمثيل الطلاب والطالبات', 'تحسين جودة الأنشطة والخدمات', 'تعزيز القيادة والعمل الجماعي']
        : ['Represent students', 'Improve activities and services', 'Enhance leadership and teamwork'];

    const values = lang === 'ar'
        ? ['الالتزام', 'المسؤولية', 'التعاون']
        : ['Commitment', 'Responsibility', 'Collaboration'];

    const sectionTitles = lang === 'ar'
        ? { goals: 'أهدافنا', values: 'قيمنا' }
        : { goals: 'Our Goals', values: 'Our Values' };

    return (
        <div>
            <div className="paper" style={{marginTop: 20}}>
                <div className="hd">{t.achievements}</div>
                <div className="bd">
                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        overflowX: 'auto',
                        paddingBottom: '20px'
                    }}>
                        {achievements.map((item, i) => (
                            <div
                                key={i}
                                className="card"
                                style={{
                                    minWidth: '280px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transform: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'none'
                                }}
                            >
                                <img
                                    src={item.img}
                                    alt={'achievement ' + i}
                                    style={{
                                        width: '100%',
                                        height: '160px',
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                        marginBottom: '16px'
                                    }}
                                />
                                <p style={{
                                    fontSize: '15px',
                                    color: '#374151',
                                    lineHeight: '1.6',
                                    margin: 0
                                }}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
                marginTop: '20px'
            }}>
                {visionMission.map((item, i) => (
                    <div key={i} className="paper">
                        <div className="hd">{item.title}</div>
                        <div className="bd">
                            <p style={{
                                fontSize: '15px',
                                lineHeight: '1.7',
                                color: '#4B5563',
                                margin: 0
                            }}>
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
                marginTop: '20px'
            }}>
                <div className="paper">
                    <div className="hd">{sectionTitles.goals}</div>
                    <div className="bd">
                        {goals.map((goal, i) => (
                            <div key={i} style={{
                                padding: '12px 16px',
                                marginBottom: '12px',
                                background: '#F9FAFB',
                                borderRadius: '10px',
                                borderLeft: lang === 'ar' ? 'none' : '4px solid #00733E',
                                borderRight: lang === 'ar' ? '4px solid #00733E' : 'none',
                                fontSize: '15px',
                                color: '#374151'
                            }}>
                                {goal}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="paper">
                    <div className="hd">{sectionTitles.values}</div>
                    <div className="bd">
                        {values.map((val, i) => (
                            <div key={i} style={{
                                padding: '12px 16px',
                                marginBottom: '12px',
                                background: '#F9FAFB',
                                borderRadius: '10px',
                                borderLeft: lang === 'ar' ? 'none' : '4px solid #FF9900',
                                borderRight: lang === 'ar' ? '4px solid #FF9900' : 'none',
                                fontSize: '15px',
                                color: '#374151'
                            }}>
                                {val}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


