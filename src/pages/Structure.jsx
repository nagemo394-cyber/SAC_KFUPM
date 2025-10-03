import React from 'react';

export default function CouncilStructure({ t, lang = 'ar' }) {
    // Name translations
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
        'تخصص': 'Major',
        'الهندسة الكيميائية': 'Chemical Engineering',
        'قائد الفريق': 'Team Leader',
        'هندسة البرمجيات': 'Software Engineering',
        'المحاسبة': 'Accounting',
        'هندسة الحاسب': 'Computer Engineering',
        'هندسة الطيران والفضاء': 'Aerospace Engineering',
        'الهندسة الميكانيكية': 'Mechanical Engineering',
        'هندسة البترول': 'Petroleum Engineering',
        'الهندسة الكهربائية': 'Electrical Engineering',
        'المالية': 'Finance'
    };

    const getName = (arabicName) => {
        return lang === 'ar' ? arabicName : (names[arabicName] || arabicName);
    };

    const getMajor = (arabicMajor) => {
        return lang === 'ar' ? arabicMajor : (majors[arabicMajor] || arabicMajor);
    };

    const management = {
        president: {
            name: 'غيداء التمياط',
            email: 's202253540@kfupm.edu.sa',
            major: 'الهندسة الكيميائية'
        },
        vicePresident: {
            name: 'سفانه جعر',
            email: 's202277340@kfupm.edu.sa',
            major: 'الهندسة الكيميائية'
        }
    };

    const committees = [
        {
            id: 1,
            name: lang === 'ar' ? "لجنة تجربة الطالب" : "Student Experience Committee",
            leader: {
                name: "عبدالله السيف",
                email: "s202372410@kfupm.edu.sa",
                major: "المالية"
            },
            teams: [
                {
                    teamName: lang === 'ar' ? "فريق الخدمات الطلابية" : "Student Services Team",
                    members: [
                        {
                            name: "إياد سالم",
                            role: "قائد الفريق",
                            email: "s202368990@kfupm.edu.sa",
                            major: "هندسة الحاسب"
                        },
                        {
                            name: "نعيمة الهاشم",
                            major: "الهندسة الكهربائية",
                            email: "s202271860@kfupm.edu.sa"
                        },
                        {
                            name: "يزيد الغامدي",
                            major: "الهندسة الميكانيكية",
                            email: "s202243980@kfupm.edu.sa"
                        },
                        {
                            name: "محمد الحصيني",
                            major: "هندسة البرمجيات",
                            email: "s202029480@kfupm.edu.sa"
                        },
                        {
                            name: "عبدالمجيد الفيفي",
                            major: "الهندسة الميكانيكية",
                            email: "s202355890@kfupm.edu.sa"
                        },
                        {
                            name: "ريا البلوي",
                            major: "هندسة الطيران والفضاء",
                            email: "s202272100@kfupm.edu.sa"
                        },
                        {
                            name: "أبرار السفياني",
                            major: "هندسة الطيران والفضاء",
                            email: "s202268260@kfupm.edu.sa"
                        }
                    ]
                },
                {
                    teamName: lang === 'ar' ? "فريق الأنشطة الطلابية" : "Student Activities Team",
                    members: [
                        {
                            name: "سعيد الجعران",
                            major: "الهندسة الميكانيكية",
                            email: "s202165130@kfupm.edu.sa"
                        },
                        {
                            name: "عبدالعزيز نواز",
                            major: "المحاسبة",
                            email: "s202279920@kfupm.edu.sa"
                        },
                        {
                            name: "مهدي المطوع",
                            major: "هندسة البترول",
                            email: "s202261800@kfupm.edu.sa"
                        },
                        {
                            name: "علي المبارك",
                            major: "الهندسة الميكانيكية",
                            email: "s202258220@kfupm.edu.sa"
                        },
                        {
                            name: "جواهر العجلان",
                            major: "هندسة الطيران والفضاء",
                            email: "s202271760@kfupm.edu.sa"
                        },
                        {
                            name: "زياد تفاحة",
                            major: "الهندسة الميكانيكية",
                            email: "s202267480@kfupm.edu.sa"
                        },
                        {
                            name: "رغد فؤاد",
                            major: "هندسة البرمجيات",
                            email: "s202256260@kfupm.edu.sa"
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: lang === 'ar' ? "لجنة التواصل والإعلام" : "Communication & Media Committee",
            leader: {
                name: "منيرة الدوسري",
                email: "s202257120@kfupm.edu.sa",
                major: "الهندسة الكيميائية"
            },
            members: [
                {
                    name: "سلمان العدوان",
                    major: "هندسة الحاسب",
                    email: "s202244180@kfupm.edu.sa"
                },
                {
                    name: "شهد خواهر",
                    major: "هندسة الطيران والفضاء",
                    email: "s202259700@kfupm.edu.sa"
                },
                {
                    name: "حوراء الخلف",
                    major: "الهندسة الكهربائية",
                    email: "s202265960@kfupm.edu.sa"
                },
                {
                    name: "عمر نجم",
                    major: "هندسة الطيران والفضاء",
                    email: "s202345270@kfupm.edu.sa"
                }
            ]
        },
        {
            id: 3,
            name: lang === 'ar' ? "لجنة التقنية والتطوير" : "Technology & Development Committee",
            leader: {
                name: "فرح حماد",
                email: "s202257640@kfupm.edu.sa",
                major: "هندسة البرمجيات"
            },
            members: [
                {
                    name: "محمد الرومي",
                    major: "هندسة البرمجيات",
                    email: "s202250760@kfupm.edu.sa"
                },
                {
                    name: "صبا الجهني",
                    major: "هندسة البرمجيات",
                    email: "s202341930@kfupm.edu.sa"
                },
                {
                    name: "فرقان السلمان",
                    major: "هندسة البرمجيات",
                    email: "s202278520@kfupm.edu.sa"
                },
                {
                    name: "عمر نجم",
                    major: "هندسة الطيران والفضاء",
                    email: "s202345270@kfupm.edu.sa"
                }
            ]
        }
    ];

    const styles = {
        container: {
            padding: '40px 20px',
            maxWidth: '1200px',
            margin: '0 auto',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        },
        header: {
            textAlign: 'center',
            marginBottom: '30px',
            paddingBottom: '20px',
            borderBottom: '1px solid #e5e7eb',
            backgroundColor: 'transparent',
            padding: '30px',
            borderRadius: '8px'
        },
        logo: {
            width: '100px',
            height: '100px',
            margin: '0 auto 20px',
            display: 'block'
        },
        title: {
            fontSize: '2em',
            color: '#111827',
            marginBottom: '5px',
            fontWeight: '700'
        },
        subtitle: {
            fontSize: '2em',
            color: '#111827',
            fontWeight: '700',
            marginBottom: '20px'
        },
        sectionTitle: {
            fontSize: '1.5em',
            color: '#111827',
            fontWeight: '600',
            marginBottom: '5px'
        },
        sectionSubtitle: {
            fontSize: '1.1em',
            color: '#6b7280',
            fontWeight: '400',
            marginBottom: '20px'
        },
        managementSection: {
            marginBottom: '50px',
            backgroundColor: 'transparent',
            padding: '30px',
            borderRadius: '8px'
        },
        managementHeader: {
            textAlign: 'center',
            marginBottom: '30px',
            paddingBottom: '15px',
            borderBottom: '2px solid #0f5132'
        },
        managementTitle: {
            fontSize: '1.5em',
            marginBottom: '5px',
            fontWeight: '600',
            color: '#0f5132'
        },
        managementGrid: {
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap'
        },
        committee: {
            marginBottom: '40px',
            backgroundColor: 'transparent',
            padding: '30px',
            borderRadius: '8px'
        },
        committeeHeader: {
            marginBottom: '30px',
            paddingBottom: '15px',
            borderBottom: '2px solid #0f5132'
        },
        committeeName: {
            fontSize: '1.5em',
            marginBottom: '5px',
            fontWeight: '600',
            color: '#0f5132'
        },
        leaderBadge: {
            fontSize: '0.9em',
            fontWeight: '600',
            color: '#0f5132',
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
        },
        teamSection: {
            marginBottom: '35px'
        },
        teamTitle: {
            fontSize: '1.1em',
            marginBottom: '20px',
            fontWeight: '500',
            color: '#374151'
        },
        membersGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '20px',
            justifyItems: 'center'
        },
        memberCard: {
            padding: '20px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            transition: 'all 0.2s ease',
            cursor: 'default',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            width: '240px'
        },
        memberPhoto: {
            width: '80px',
            height: '80px',
            borderRadius: '8px',
            backgroundColor: '#d1d5db',
            marginBottom: '15px',
            objectFit: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2em',
            color: '#6b7280',
            fontWeight: '300'
        },
        memberInfo: {
            textAlign: 'center',
            width: '100%'
        },
        memberName: {
            fontSize: '1.05em',
            fontWeight: '500',
            color: '#111827',
            marginBottom: '6px'
        },
        memberMajor: {
            fontSize: '0.9em',
            color: '#6b7280',
            marginBottom: '8px'
        },
        memberEmail: {
            fontSize: '0.85em',
            color: '#9ca3af',
            wordBreak: 'break-word'
        }
    };

    const [hoveredCard, setHoveredCard] = React.useState(null);

    const ManagementCard = ({ person, role }) => {
        const initial = person.name.charAt(0);
        return (
            <div style={{...styles.memberCard, borderColor: '#0f5132', borderWidth: '2px'}}>
                <div style={styles.memberPhoto}>{initial}</div>
                <div style={styles.memberInfo}>
                    <div style={styles.leaderBadge}>
                        {role}
                    </div>
                    <div style={styles.memberName}>{getName(person.name)}</div>
                    <div style={styles.memberMajor}>{getMajor(person.major)}</div>
                    <div style={styles.memberEmail}>{person.email}</div>
                </div>
            </div>
        );
    };

    const LeaderCard = ({ leader }) => {
        const initial = leader.name.charAt(0);
        return (
            <div style={{...styles.memberCard, borderColor: '#0f5132', borderWidth: '2px'}}>
                <div style={styles.memberPhoto}>{initial}</div>
                <div style={styles.memberInfo}>
                    <div style={styles.leaderBadge}>
                        {lang === 'ar' ? 'القائد' : 'LEADER'}
                    </div>
                    <div style={styles.memberName}>{getName(leader.name)}</div>
                    <div style={styles.memberMajor}>{getMajor(leader.major)}</div>
                    <div style={styles.memberEmail}>{leader.email}</div>
                </div>
            </div>
        );
    };

    const MemberCard = ({ member, index }) => {
        const displayRole = member.role || member.major || "تخصص";
        const isHovered = hoveredCard === index;
        const initial = member.name.charAt(0);

        return (
            <div
                style={{
                    ...styles.memberCard,
                    borderColor: isHovered ? '#0f5132' : '#e5e7eb',
                    boxShadow: isHovered ? '0 2px 8px rgba(15, 81, 50, 0.1)' : 'none'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
            >
                <div style={styles.memberPhoto}>{initial}</div>
                <div style={styles.memberInfo}>
                    {member.role && <div style={{...styles.leaderBadge, marginBottom: '8px'}}>{getMajor(member.role)}</div>}
                    <div style={styles.memberName}>{getName(member.name)}</div>
                    <div style={styles.memberMajor}>{getMajor(member.major || displayRole)}</div>
                    <div style={styles.memberEmail}>{member.email}</div>
                </div>
            </div>
        );
    };

    return (
        <div style={{backgroundColor: '#ffffff', minHeight: '100vh'}}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <img src="/logo.png" alt="Council logo" style={styles.logo} />
                    <h1 style={styles.title}>
                        {lang === 'ar' ? 'المجلس الاستشاري الطلابي' : 'Student Advisory Council'}
                    </h1>
                    <h2 style={styles.sectionTitle}>
                        {lang === 'ar' ? 'هيكلة المجلس' : "Council's Structure"}
                    </h2>
                </div>

                {/* Council Management */}
                <div style={styles.managementSection}>
                    <div style={styles.managementHeader}>
                        <h2 style={styles.managementTitle}>
                            {lang === 'ar' ? 'إدارة المجلس' : 'Council Management'}
                        </h2>
                    </div>
                    <div style={styles.managementGrid}>
                        <ManagementCard
                            person={management.president}
                            role={lang === 'ar' ? 'قائد المجلس' : 'COUNCIL PRESIDENT'}
                        />
                        <ManagementCard
                            person={management.vicePresident}
                            role={lang === 'ar' ? 'نائب القائد' : 'VICE PRESIDENT'}
                        />
                    </div>
                </div>

                {/* Committees */}
                {committees.map((committee) => (
                    <div key={committee.id} style={styles.committee}>
                        <div style={styles.committeeHeader}>
                            <h2 style={styles.committeeName}>{committee.name}</h2>
                        </div>

                        {committee.teams ? (
                            <>
                                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                                    <div style={{width: '240px'}}>
                                        <LeaderCard leader={committee.leader} />
                                    </div>
                                </div>
                                {committee.teams.map((team, idx) => (
                                    <div key={idx} style={styles.teamSection}>
                                        <h3 style={styles.teamTitle}>{team.teamName}</h3>
                                        <div style={styles.membersGrid}>
                                            {team.members.map((member, mIdx) => (
                                                <MemberCard
                                                    key={mIdx}
                                                    member={member}
                                                    index={`${committee.id}-${idx}-${mIdx}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <>
                                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
                                    <div style={{width: '240px'}}>
                                        <LeaderCard leader={committee.leader} />
                                    </div>
                                </div>
                                <div style={styles.membersGrid}>
                                    {committee.members.map((member, mIdx) => (
                                        <MemberCard
                                            key={mIdx}
                                            member={member}
                                            index={`${committee.id}-${mIdx}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
