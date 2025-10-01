import React from 'react';

export default function CouncilStructure({ t, lang = 'ar' }) {
    const committees = [
        {
            id: 1,
            name: lang === 'ar' ? "لجنة تجربة الطالب" : "Student Experience Committee",
            leader: {
                name: "عبدالله السيف",
                email: "abdullah.alsaif@example.com",
                major: "تخصص"
            },
            teams: [
                {
                    teamName: lang === 'ar' ? "فريق الخدمات الطلابية" : "Student Services Team",
                    members: [
                        {
                            name: "إياد سالم",
                            role: lang === 'ar' ? "قائد الفريق" : "Team Leader",
                            email: "eyad.salem@example.com"
                        },
                        {
                            name: "نعيمة الهاشم",
                            major: "تخصص",
                            email: "naeema.alhashem@example.com"
                        },
                        {
                            name: "يزيد الغامدي",
                            major: "تخصص",
                            email: "yazeed.alghamdi@example.com"
                        },
                        {
                            name: "محمد الحصيني",
                            major: "تخصص",
                            email: "mohammed.alhusaini@example.com"
                        },
                        {
                            name: "عبدالمجيد الفيفي",
                            major: "تخصص",
                            email: "abdulmajeed.alfifi@example.com"
                        },
                        {
                            name: "ريا البلوي",
                            major: "تخصص",
                            email: "raya.albalawi@example.com"
                        },
                        {
                            name: "أبرار السفياني",
                            major: "تخصص",
                            email: "abrar.alsufyani@example.com"
                        }
                    ]
                },
                {
                    teamName: lang === 'ar' ? "فريق الأنشطة الطلابية" : "Student Activities Team",
                    members: [
                        {
                            name: "عدي باشراحيل",
                            role: lang === 'ar' ? "قائد الفريق" : "Team Leader",
                            email: "adai.bashraheel@example.com"
                        },
                        {
                            name: "سعيد الجعران",
                            major: "تخصص",
                            email: "saeed.aljaran@example.com"
                        },
                        {
                            name: "عبدالعزيز نواز",
                            major: "تخصص",
                            email: "abdulaziz.nawaz@example.com"
                        },
                        {
                            name: "مهدي المطوع",
                            major: "تخصص",
                            email: "mahdi.almutawa@example.com"
                        },
                        {
                            name: "علي المبارك",
                            major: "تخصص",
                            email: "ali.almubarak@example.com"
                        },
                        {
                            name: "جواهر العجلان",
                            major: "تخصص",
                            email: "jawaher.alajlan@example.com"
                        },
                        {
                            name: "زياد تفاحة",
                            major: "تخصص",
                            email: "ziyad.tuffaha@example.com"
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
                email: "munira.aldosari@example.com",
                major: "تخصص"
            },
            members: [
                {
                    name: "سلمان العدوان",
                    major: "تخصص",
                    email: "salman.aladwan@example.com"
                },
                {
                    name: "رغد فؤاد",
                    major: "تخصص",
                    email: "raghad.fouad@example.com"
                },
                {
                    name: "شهد خواهر",
                    major: "تخصص",
                    email: "shahad.khawaher@example.com"
                },
                {
                    name: "عمر نجم",
                    major: "تخصص",
                    email: "omar.najm@example.com"
                }
            ]
        },
        {
            id: 3,
            name: lang === 'ar' ? "لجنة التقنية والتطوير" : "Technology & Development Committee",
            leader: {
                name: "فرح حماد",
                email: "farah.hammad@example.com",
                major: "تخصص"
            },
            members: [
                {
                    name: "محمد الرومي",
                    major: "تخصص",
                    email: "mohammed.alrumi@example.com"
                },
                {
                    name: "صبا الجهني",
                    major: "تخصص",
                    email: "saba.aljohani@example.com"
                },
                {
                    name: "فرقان السلمان",
                    major: "تخصص",
                    email: "furqan.alsalman@example.com"
                },
                {
                    name: "عمر نجم",
                    major: "تخصص",
                    email: "omar.najm@example.com"
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
            marginBottom: '20px'
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
            backgroundColor: '#ffffff'
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

    const LeaderCard = ({ leader }) => {
        const initial = leader.name.charAt(0);
        return (
            <div style={{...styles.memberCard, borderColor: '#0f5132', borderWidth: '2px'}}>
                <div style={styles.memberPhoto}>{initial}</div>
                <div style={styles.memberInfo}>
                    <div style={styles.leaderBadge}>
                        {lang === 'ar' ? 'القائد' : 'LEADER'}
                    </div>
                    <div style={styles.memberName}>{leader.name}</div>
                    <div style={styles.memberMajor}>{leader.major}</div>
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
                    <div style={styles.memberName}>{member.name}</div>
                    <div style={styles.memberMajor}>{displayRole}</div>
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
                    <h1 style={styles.title}>المجلس الاستشاري الطلابي</h1>
                    <p style={styles.subtitle}>SAC</p>
                    <h2 style={styles.sectionTitle}>هيكلة المجلس</h2>
                    <p style={styles.sectionSubtitle}>Council's Structure</p>
                </div>

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
