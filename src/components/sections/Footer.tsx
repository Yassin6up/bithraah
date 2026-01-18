export default function Footer() {
    return (
        <footer style={{ background: '#020202', borderTop: '1px solid #111', padding: '80px 24px 40px', color: '#666', direction: 'rtl' }}>
            <div style={{ maxWidth: 1400, margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 60, marginBottom: 100 }}>

                    {/* Brand */}
                    <div style={{ gridColumn: 'span 2' }}>
                        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 24 }}>بذرة</h2>
                        <p style={{ maxWidth: 300, fontSize: 14, lineHeight: 1.6 }}>
                            النظام البيئي الرقمي الأول للمبتكرين في المنطقة. نعيد تعريف المستقبل بأدوات اليوم.
                        </p>
                    </div>

                    {/* Columns */}
                    <div>
                        <h4 style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 24, letterSpacing: '0.1em' }}>المنصة</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 14, display: 'grid', gap: 16 }}>
                            <li><a href="#" style={{ color: '#888', textDecoration: 'none' }}>عن بذرة</a></li>
                            <li><a href="#" style={{ color: '#888', textDecoration: 'none' }}>المميزات</a></li>
                            <li><a href="#" style={{ color: '#888', textDecoration: 'none' }}>الأمان</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 24, letterSpacing: '0.1em' }}>قانوني</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 14, display: 'grid', gap: 16 }}>
                            <li><a href="#" style={{ color: '#888', textDecoration: 'none' }}>الخصوصية</a></li>
                            <li><a href="#" style={{ color: '#888', textDecoration: 'none' }}>الشروط</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 24, letterSpacing: '0.1em' }}>تواصل معنا</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 14, display: 'grid', gap: 16 }}>
                            <li><a href="#" style={{ color: '#888', textDecoration: 'none' }}>تويتر / X</a></li>
                            <li><a href="#" style={{ color: '#888', textDecoration: 'none' }}>لينكدإن</a></li>
                            <li><a href="#" style={{ color: '#888', textDecoration: 'none' }}>إنستغرام</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #111',
                    paddingTop: 40,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 12,
                    color: '#444',
                    flexDirection: 'row-reverse',
                }}>
                    <span style={{ direction: 'ltr' }}>© 2026 BITHRAH PLATFORM. ALL RIGHTS RESERVED.</span>
                    <span>صمم للمستقبل.</span>
                </div>
            </div>
        </footer>
    )
}
