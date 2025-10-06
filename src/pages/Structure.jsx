import React, { useState } from 'react';

export default function CouncilStructure({ t, lang = 'ar' }) {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedMember, setSelectedMember] = useState(null);
    const [activeCommittee, setActiveCommittee] = useState(null);

    const names = {
        'فرقان السلمان': 'Forkan Alsalman',
        'عبدالعزيز نواز': 'Abdulaziz Nawwaz',
        'غيداء التمياط': 'Ghaida Altimyat',
        'سلمان العدوان': 'Salman Aladwan',
        'يزيد الغامدي': 'Yazeed Alghamdi',
        'فرح حماد': 'Farah Hammad',
        'إياد سالم': 'Eyad Salem',
        'زياد تفاحة': 'Zeyad Tuffaha',
        'شهد خواهر': 'Shahad Khawaher',
        'محمد الرومي': 'Mohammed Alroomi',
        'مهدي المطوع': 'Mahdi Almutawa',
        'نعيمة الهاشم': 'Naimah Alsaidalhashim',
        'أبرار السفياني': 'Abrar Alsufyani',
        'منيرة الدوسري': 'Munirah Aldawsari',
        'سعيد الجعران': 'Saeed Aljaran',
        'ريا البلوي': 'Ria Albalawi',
        'عبدالله السيف': 'Abdullah Alsaif',
        'عبدالمجيد الفيفي': 'Abdulmajeed Alfaifi',
        'علي المبارك': 'Ali Almubarak',
        'رغد فؤاد': 'Raghad Kalantan',
        'سفانه جعر': 'Sefana Guar',
        'عمر نجم': 'Omar Nizhim',
        'جواهر العجلان': 'Jawaher Alajlan',
        'محمد الحصيني': 'Mohamed Alhusini',
        'صبا الجهني': 'Saba Aljohani',
        'حوراء الخلف': 'Hawraa Alkhalaf'
    };

    const majors = {
        'الهندسة الكيميائية': 'Chemical Engineering',
        'هندسة البرمجيات': 'Software Engineering',
        'المحاسبة': 'Accounting',
        'هندسة الحاسب': 'Computer Engineering',
        'هندسة الطيران والفضاء': 'Aerospace Engineering',
        'الهندسة الميكانيكية': 'Mechanical Engineering',
        'هندسة البترول': 'Petroleum Engineering',
        'الهندسة الكهربائية': 'Electrical Engineering',
        'المالية': 'Finance',
        'قائد الفريق': 'Team Leader'
    };

    const getName = (arabicName) => lang === 'ar' ? arabicName : (names[arabicName] || arabicName);
    const getMajor = (arabicMajor) => lang === 'ar' ? arabicMajor : (majors[arabicMajor] || arabicMajor);

    const management = {
        president: { name: 'غيداء التمياط', email: 's202253540@kfupm.edu.sa', major: 'الهندسة الكيميائية' },
        vicePresident: { name: 'سفانه جعر', email: 's202277340@kfupm.edu.sa', major: 'الهندسة الكيميائية' }
    };

    const committees = [
        {
            id: 1,
            name: lang === 'ar' ? "لجنة تجربة الطالب" : "Student Experience Committee",
            color: "#FF9900",
            teams: [
                {
                    teamName: lang === 'ar' ? "فريق الخدمات الطلابية" : "Student Services Team",
                    members: [
                        { name: "إياد سالم", role: "قائد الفريق", email: "s202368990@kfupm.edu.sa", major: "هندسة الحاسب" },
                        { name: "نعيمة الهاشم", major: "الهندسة الكهربائية", email: "s202271860@kfupm.edu.sa" },
                        { name: "يزيد الغامدي", major: "الهندسة الميكانيكية", email: "s202243980@kfupm.edu.sa" },
                        { name: "محمد الحصيني", major: "هندسة البرمجيات", email: "s202029480@kfupm.edu.sa" },
                        { name: "عبدالمجيد الفيفي", major: "الهندسة الميكانيكية", email: "s202355890@kfupm.edu.sa" },
                        { name: "ريا البلوي", major: "هندسة الطيران والفضاء", email: "s202272100@kfupm.edu.sa" },
                        { name: "أبرار السفياني", major: "هندسة الطيران والفضاء", email: "s202268260@kfupm.edu.sa" }
                    ]
                },
                {
                    teamName: lang === 'ar' ? "فريق الأنشطة الطلابية" : "Student Activities Team",
                    members: [
                        { name: "سعيد الجعران", major: "الهندسة الميكانيكية", email: "s202165130@kfupm.edu.sa" },
                        { name: "عبدالعزيز نواز", major: "المحاسبة", email: "s202279920@kfupm.edu.sa" },
                        { name: "مهدي المطوع", major: "هندسة البترول", email: "s202261800@kfupm.edu.sa" },
                        { name: "علي المبارك", major: "الهندسة الميكانيكية", email: "s202258220@kfupm.edu.sa" },
                        { name: "جواهر العجلان", major: "هندسة الطيران والفضاء", email: "s202271760@kfupm.edu.sa" },
                        { name: "زياد تفاحة", major: "الهندسة الميكانيكية", email: "s202267480@kfupm.edu.sa" },
                        { name: "رغد فؤاد", major: "هندسة البرمجيات", email: "s202256260@kfupm.edu.sa" }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: lang === 'ar' ? "لجنة التواصل والإعلام" : "Communication & Media Committee",
            color: "#00733E",
            leader: { name: "عمر نجم", email: "s202345270@kfupm.edu.sa", major: "هندسة الطيران والفضاء" },
            members: [
                { name: "سلمان العدوان", major: "هندسة الحاسب", email: "s202244180@kfupm.edu.sa" },
                { name: "شهد خواهر", major: "هندسة الطيران والفضاء", email: "s202259700@kfupm.edu.sa" },
                { name: "حوراء الخلف", major: "الهندسة الكهربائية", email: "s202265960@kfupm.edu.sa" },
            ]
        },
        {
            id: 3,
            name: lang === 'ar' ? "لجنة التقنية والتطوير" : "Technology & Development Committee",
            color: "#FF9900",
            leader: { name: "فرح حماد", email: "s202257640@kfupm.edu.sa", major: "هندسة البرمجيات" },
            members: [
                { name: "محمد الرومي", major: "هندسة البرمجيات", email: "s202250760@kfupm.edu.sa" },
                { name: "صبا الجهني", major: "هندسة البرمجيات", email: "s202341930@kfupm.edu.sa" },
                { name: "فرقان السلمان", major: "هندسة البرمجيات", email: "s202278520@kfupm.edu.sa" }
            ]
        }
    ];

    const MemberCard = ({ member, index, isLeader, commitColor, isFemaleLeader, customRole }) => {
        const isHovered = hoveredCard === index;
        const isSelected = selectedMember === index;

        return (
            <div
                style={{
                    padding: '20px',
                    border: `2px solid ${isSelected ? commitColor : (isHovered ? commitColor : '#E5E7EB')}`,
                    borderRadius: '12px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    backgroundColor: isSelected ? `${commitColor}10` : '#fff',
                    transform: isHovered ? 'translateY(-8px) scale(1.02)' : isSelected ? 'scale(1.02)' : 'none',
                    boxShadow: isHovered || isSelected ? `0 12px 30px ${commitColor}30` : '0 2px 8px rgba(0,0,0,0.05)',
                    width: '240px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
            >
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${commitColor}20, ${commitColor}10)`,
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'none'
                }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={commitColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                    </svg>
                </div>

                {(isLeader || member.role) && (
                    <div style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        color: commitColor,
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        padding: '4px 12px',
                        background: `${commitColor}15`,
                        borderRadius: '999px',
                        fontFamily: 'inherit'
                    }}>
                        {customRole || (isLeader ? (lang === 'ar' ? (isFemaleLeader ? 'القائدة' : 'القائد') : 'LEADER') : getMajor(member.role))}
                    </div>
                )}

                <div style={{ textAlign: 'center', width: '100%' }}>
                    <div style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#111827',
                        marginBottom: '6px',
                        fontFamily: 'inherit'
                    }}>
                        {getName(member.name)}
                    </div>
                    <div style={{
                        fontSize: '13px',
                        color: '#6B7280',
                        marginBottom: '8px',
                        fontFamily: 'inherit'
                    }}>
                        {getMajor(member.major)}
                    </div>
                    <div style={{
                        fontSize: '12px',
                        color: '#9CA3AF',
                        wordBreak: 'break-word',
                        fontFamily: 'inherit'
                    }}>
                        {member.email}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="paper" style={{marginTop: 20}}>
            <div className="hd">{lang === 'ar' ? 'هيكلة المجلس' : 'Council Structure'}</div>
            <div className="bd">
                {/* Management */}
                <div style={{
                    marginBottom: '40px',
                    padding: '24px',
                    background: '#F9FAFB',
                    borderRadius: '12px',
                    border: '1px solid #E5E7EB',
                    animation: 'fadeInUp 0.5s ease-out'
                }}>
                    <h3 style={{
                        fontSize: '20px',
                        fontWeight: '800',
                        color: '#00733E',
                        marginBottom: '24px',
                        textAlign: 'center'
                    }}>
                        {lang === 'ar' ? 'إدارة المجلس' : 'Council Management'}
                    </h3>

                    <div style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <MemberCard
                            member={management.president}
                            index="pres"
                            isLeader={true}
                            commitColor="#00733E"
                            isFemaleLeader={true}
                            customRole={lang === 'ar' ? 'قائدة المجلس' : 'PRESIDENT'}
                        />
                        <MemberCard
                            member={management.vicePresident}
                            index="vice"
                            isLeader={true}
                            commitColor="#00733E"
                            isFemaleLeader={true}
                            customRole={lang === 'ar' ? 'نائبة قائدة المجلس' : 'VICE PRESIDENT'}
                        />
                    </div>
                </div>

                {/* Committees Tabs */}
                <div style={{
                    display: 'flex',
                    gap: '12px',
                    marginBottom: '32px',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {committees.map((committee) => {
                        const getIcon = (id) => {
                            if (id === 1) {
                                return (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                        <circle cx="9" cy="7" r="4"/>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                    </svg>
                                );
                            } else if (id === 2) {
                                return (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"/>
                                    </svg>
                                );
                            } else {
                                return (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                                        <line x1="8" y1="21" x2="16" y2="21"/>
                                        <line x1="12" y1="17" x2="12" y2="21"/>
                                    </svg>
                                );
                            }
                        };

                        return (
                            <button
                                key={committee.id}
                                onClick={() => setActiveCommittee(activeCommittee === committee.id ? null : committee.id)}
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '999px',
                                    border: `2px solid ${activeCommittee === committee.id ? committee.color : '#E5E7EB'}`,
                                    background: activeCommittee === committee.id ? committee.color : '#fff',
                                    color: activeCommittee === committee.id ? '#fff' : '#111827',
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    transform: activeCommittee === committee.id ? 'scale(1.05)' : 'none',
                                    boxShadow: activeCommittee === committee.id ? `0 4px 12px ${committee.color}40` : 'none',
                                    fontFamily: 'inherit'
                                }}
                            >
                                {getIcon(committee.id)}
                                {committee.name}
                            </button>
                        );
                    })}
                </div>

                {/* Committees Content */}
                {committees.map((committee) => (
                    (activeCommittee === null || activeCommittee === committee.id) && (
                        <div
                            key={committee.id}
                            style={{
                                marginBottom: '40px',
                                padding: '24px',
                                background: '#F9FAFB',
                                borderRadius: '12px',
                                border: '1px solid #E5E7EB',
                                animation: 'fadeInUp 0.5s ease-out'
                            }}
                        >
                            <h3 style={{
                                fontSize: '20px',
                                fontWeight: '800',
                                color: committee.color,
                                marginBottom: '8px'
                            }}>
                                {committee.name}
                            </h3>

                            {/* Leader */}
                            {committee.leader && (
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: '32px',
                                    marginTop: '24px'
                                }}>
                                    <MemberCard
                                        member={committee.leader}
                                        index={`leader-${committee.id}`}
                                        isLeader={true}
                                        commitColor={committee.color}
                                        isFemaleLeader={committee.id === 3}
                                    />
                                </div>
                            )}

                            {/* Teams or Members */}
                            {committee.teams ? (
                                committee.teams.map((team, idx) => (
                                    <div key={idx} style={{ marginBottom: '32px' }}>
                                        <h4 style={{
                                            fontSize: '16px',
                                            fontWeight: '700',
                                            color: '#374151',
                                            marginBottom: '20px',
                                            textAlign: 'center'
                                        }}>
                                            {team.teamName}
                                        </h4>
                                        <div style={{
                                            display: 'flex',
                                            gap: '20px',
                                            flexWrap: 'wrap',
                                            justifyContent: 'center'
                                        }}>
                                            {team.members.map((member, mIdx) => (
                                                <MemberCard
                                                    key={mIdx}
                                                    member={member}
                                                    index={`${committee.id}-${idx}-${mIdx}`}
                                                    commitColor={committee.color}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div style={{
                                    display: 'flex',
                                    gap: '20px',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center'
                                }}>
                                    {committee.members.map((member, mIdx) => (
                                        <MemberCard
                                            key={mIdx}
                                            member={member}
                                            index={`${committee.id}-${mIdx}`}
                                            commitColor={committee.color}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}