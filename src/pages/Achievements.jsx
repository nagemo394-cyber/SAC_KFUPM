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


