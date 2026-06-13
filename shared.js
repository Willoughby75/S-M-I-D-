// ============================================
// SMID PLATFORM v2 — UPGRADED SHARED JS
// i18n + Auth + Charts + Search + Reports + Notifications
// ============================================

// ---------- MULTI-LANGUAGE SYSTEM (i18n) ----------
const SMIDi18n = {
    current: 'en',

    translations: {
        en: {
            nav_home: 'Home', nav_categories: 'Categories', nav_register: 'Register',
            nav_dashboard: 'Dashboard', nav_idcard: 'ID Card', nav_cloud: 'Cloud',
            nav_founder: 'Founder', nav_login: 'Login',
            hero_title: 'Building Trust. Protecting Identity. Creating a Safer Digital World.',
            hero_cta_verify: 'Get Verified', hero_cta_view: 'View Categories',
            stats_fraud: 'Lost to Online Fraud Yearly', stats_worry: 'Users Worry About Fake Accounts',
            stats_impact: 'Impacted by Scams Daily', stats_moderation: 'Spent on Moderation',
            problem_title: 'The Problem We\'re Solving',
            problem_fake: 'Fake Accounts', problem_scams: 'Rising Scams',
            problem_trust: 'Lost Trust', problem_business: 'Business Losses',
            vision_verify: 'Verify Real Identities', vision_authentic: 'Promote Authenticity',
            vision_safety: 'Enhance User Safety', vision_accountability: 'Build Accountability',
            goal_title: 'GOAL', mission_title: 'MISSION',
            cloud_sync: 'Cloud Sync: Active', cloud_saved: 'saved',
            notification_success: 'Success', notification_error: 'Error',
            notification_warning: 'Warning', notification_info: 'Info',
            contact_email: 'Email', contact_partner: 'Partnerships',
            contact_invest: 'Investors', contact_career: 'Careers',
            founder_role: 'Founder & CEO, SMID Platform',
            founder_quote: 'I\'m a non-technical founder with a clear vision. I need the right technical partner to bring it to life.',
            search_placeholder: 'Search by name, category, or ID...',
            report_title: 'Report User', report_reason: 'Reason for report',
            report_submit: 'Submit Report', report_cancel: 'Cancel',
            auth_login: 'Login', auth_signup: 'Sign Up',
            auth_email: 'Email', auth_password: 'Password',
            auth_name: 'Full Name', auth_forgot: 'Forgot Password?',
            auth_no_account: 'No account?', auth_has_account: 'Already have an account?',
            pw_weak: 'Weak', pw_medium: 'Medium', pw_strong: 'Strong',
            lang_name: 'English'
        },
        fr: {
            nav_home: 'Accueil', nav_categories: 'Catégories', nav_register: 'S\'inscrire',
            nav_dashboard: 'Tableau', nav_idcard: 'Carte ID', nav_cloud: 'Cloud',
            nav_founder: 'Fondateur', nav_login: 'Connexion',
            hero_title: 'Construire la Confiance. Protéger l\'Identité. Créer un Monde Numérique Plus Sûr.',
            hero_cta_verify: 'Se Vérifier', hero_cta_view: 'Voir les Catégories',
            stats_fraud: 'Perdu par Fraude en Ligne / An', stats_worry: 'Utilisateurs Inquiets des Faux Comptes',
            stats_impact: 'Touchés par Arnaques / Jour', stats_moderation: 'Dépensés en Modération',
            problem_title: 'Le Problème que Nous Résolvons',
            problem_fake: 'Faux Comptes', problem_scams: 'Arnaques en Hausse',
            problem_trust: 'Confiance Perdue', problem_business: 'Pertes Commerciales',
            vision_verify: 'Vérifier les Identités Réelles', vision_authentic: 'Promouvoir l\'Authenticité',
            vision_safety: 'Améliorer la Sécurité', vision_accountability: 'Construire la Responsabilité',
            goal_title: 'OBJECTIF', mission_title: 'MISSION',
            cloud_sync: 'Sync Cloud: Active', cloud_saved: 'enregistrés',
            notification_success: 'Succès', notification_error: 'Erreur',
            notification_warning: 'Attention', notification_info: 'Info',
            contact_email: 'Email', contact_partner: 'Partenariats',
            contact_invest: 'Investisseurs', contact_career: 'Carrières',
            founder_role: 'Fondateur & PDG, Plateforme SMID',
            founder_quote: 'Je suis un fondateur non technique avec une vision claire. J\'ai besoin du bon partenaire technique pour le réaliser.',
            search_placeholder: 'Rechercher par nom, catégorie, ou ID...',
            report_title: 'Signaler un Utilisateur', report_reason: 'Raison du signalement',
            report_submit: 'Envoyer', report_cancel: 'Annuler',
            auth_login: 'Connexion', auth_signup: 'Inscription',
            auth_email: 'Email', auth_password: 'Mot de passe',
            auth_name: 'Nom Complet', auth_forgot: 'Mot de passe oublié?',
            auth_no_account: 'Pas de compte?', auth_has_account: 'Déjà un compte?',
            pw_weak: 'Faible', pw_medium: 'Moyen', pw_strong: 'Fort',
            lang_name: 'Français'
        },
        es: {
            nav_home: 'Inicio', nav_categories: 'Categorías', nav_register: 'Registrarse',
            nav_dashboard: 'Panel', nav_idcard: 'Tarjeta ID', nav_cloud: 'Nube',
            nav_founder: 'Fundador', nav_login: 'Iniciar Sesión',
            hero_title: 'Construir Confianza. Proteger Identidad. Crear un Mundo Digital Más Seguro.',
            hero_cta_verify: 'Verificarse', hero_cta_view: 'Ver Categorías',
            stats_fraud: 'Perdido por Fraude Online / Año', stats_worry: 'Usuarios Preocupados por Cuentas Falsas',
            stats_impact: 'Afectados por Estafas / Día', stats_moderation: 'Gastado en Moderación',
            problem_title: 'El Problema que Resolvemos',
            problem_fake: 'Cuentas Falsas', problem_scams: 'Estafas en Aumento',
            problem_trust: 'Confianza Perdida', problem_business: 'Pérdidas Empresariales',
            vision_verify: 'Verificar Identidades Reales', vision_authentic: 'Promover Autenticidad',
            vision_safety: 'Mejorar Seguridad', vision_accountability: 'Construir Responsabilidad',
            goal_title: 'META', mission_title: 'MISIÓN',
            cloud_sync: 'Sync Nube: Activo', cloud_saved: 'guardados',
            notification_success: 'Éxito', notification_error: 'Error',
            notification_warning: 'Advertencia', notification_info: 'Info',
            contact_email: 'Email', contact_partner: 'Asociaciones',
            contact_invest: 'Inversores', contact_career: 'Carreras',
            founder_role: 'Fundador y CEO, Plataforma SMID',
            founder_quote: 'Soy un fundador no técnico con una visión clara. Necesito el socio técnico adecuado para hacerlo realidad.',
            search_placeholder: 'Buscar por nombre, categoría, o ID...',
            report_title: 'Reportar Usuario', report_reason: 'Razón del reporte',
            report_submit: 'Enviar', report_cancel: 'Cancelar',
            auth_login: 'Iniciar Sesión', auth_signup: 'Registrarse',
            auth_email: 'Email', auth_password: 'Contraseña',
            auth_name: 'Nombre Completo', auth_forgot: '¿Olvidaste tu contraseña?',
            auth_no_account: '¿No tienes cuenta?', auth_has_account: '¿Ya tienes cuenta?',
            pw_weak: 'Débil', pw_medium: 'Medio', pw_strong: 'Fuerte',
            lang_name: 'Español'
        },
        pt: {
            nav_home: 'Início', nav_categories: 'Categorias', nav_register: 'Registrar',
            nav_dashboard: 'Painel', nav_idcard: 'Cartão ID', nav_cloud: 'Nuvem',
            nav_founder: 'Fundador', nav_login: 'Entrar',
            hero_title: 'Construir Confiança. Proteger Identidade. Criar um Mundo Digital Mais Seguro.',
            hero_cta_verify: 'Verificar-se', hero_cta_view: 'Ver Categorias',
            stats_fraud: 'Perdido por Fraude Online / Ano', stats_worry: 'Usuários Preocupados com Contas Falsas',
            stats_impact: 'Impactados por Golpes / Dia', stats_moderation: 'Gasto em Moderação',
            problem_title: 'O Problema que Resolvemos',
            problem_fake: 'Contas Falsas', problem_scams: 'Golpes em Alta',
            problem_trust: 'Confiança Perdida', problem_business: 'Perdas Empresariais',
            vision_verify: 'Verificar Identidades Reais', vision_authentic: 'Promover Autenticidade',
            vision_safety: 'Melhorar Segurança', vision_accountability: 'Construir Responsabilidade',
            goal_title: 'META', mission_title: 'MISSÃO',
            cloud_sync: 'Sync Nuvem: Ativo', cloud_saved: 'salvos',
            notification_success: 'Sucesso', notification_error: 'Erro',
            notification_warning: 'Aviso', notification_info: 'Info',
            contact_email: 'Email', contact_partner: 'Parcerias',
            contact_invest: 'Investidores', contact_career: 'Carreiras',
            founder_role: 'Fundador e CEO, Plataforma SMID',
            founder_quote: 'Sou um fundador não técnico com uma visão clara. Preciso do parceiro técnico certo para torná-la realidade.',
            search_placeholder: 'Pesquisar por nome, categoria, ou ID...',
            report_title: 'Denunciar Usuário', report_reason: 'Motivo da denúncia',
            report_submit: 'Enviar', report_cancel: 'Cancelar',
            auth_login: 'Entrar', auth_signup: 'Cadastrar',
            auth_email: 'Email', auth_password: 'Senha',
            auth_name: 'Nome Completo', auth_forgot: 'Esqueceu a senha?',
            auth_no_account: 'Não tem conta?', auth_has_account: 'Já tem conta?',
            pw_weak: 'Fraca', pw_medium: 'Média', pw_strong: 'Forte',
            lang_name: 'Português'
        },
        yo: {
            nav_home: 'Ilé', nav_categories: 'Àwọn Ẹ̀ka', nav_register: 'Forukọsilẹ',
            nav_dashboard: 'Dasibọọdu', nav_idcard: 'Káàdì ID', nav_cloud: 'Aájù',
            nav_founder: 'Olùpilẹ̀', nav_login: 'Wọlé',
            hero_title: 'Kíkó Ìgbẹ́kẹ̀lé. Àbò Ìdánimọ̀. Ṣíṣẹ̀dá Àyè Dígítàlì Tó Dájú.',
            hero_cta_verify: 'Jẹ́rìí Ìdánimọ̀', hero_cta_view: 'Wo Àwọn Ẹ̀ka',
            stats_fraud: 'Ìpádánù nítorí Ìwà Ipá Dígítàlì', stats_worry: 'Àwọn Asàmúlò Ní Ìbànújẹ́ nípa Àwọn Àkọ̀ọ́lẹ̀ Òtítọ́',
            stats_impact: 'Àwọn Tó Ní Ìpalára Lójoojúmọ́', stats_moderation: 'Ìnáwó lórí Ìṣàkóso',
            problem_title: 'Ìṣòro Tí A ń Yanjú',
            problem_fake: 'Àwọn Àkọ̀ọ́lẹ̀ Òtítọ́', problem_scams: 'Ìwà Ipá Tó ń Pọ̀ síi',
            problem_trust: 'Ìgbẹ́kẹ̀lé Tí a Pàdánù', problem_business: 'Ìpádánù Ìṣòwò',
            vision_verify: 'Jẹ́rìí Ìdánimọ̀ Tí Ó Jẹ Òtítọ́', vision_authentic: 'Ìgbékalẹ̀ Ìtọ́wò',
            vision_safety: 'Ìdájú Àbò Asàmúlò', vision_accountability: 'Kíkó Ìwà Òtítọ́',
            goal_title: 'ÀFỌ̀NÀ', mission_title: 'IṢẸ́',
            cloud_sync: 'Aájù: Nṣiṣẹ́', cloud_saved: 'tí a fi pamọ́',
            notification_success: 'Aṣeyọrí', notification_error: 'Àṣìṣe',
            notification_warning: 'Ìkìlọ̀', notification_info: 'Àlàyé',
            contact_email: 'Ímeèlì', contact_partner: 'Àwọn Ajọpọ̀',
            contact_invest: 'Àwọn Oníwó', contact_career: 'Àwọn Iṣẹ́',
            founder_role: 'Olùpilẹ̀ & Alága, Ètò SMID',
            founder_quote: 'Èmi jẹ́ olùpilẹ̀ tí kò mọ̀ nípa ìmọ̀ ẹ̀rọ pẹ̀lú ìròyìn tó hàn. Mo nílò ajọpọ̀ ìmọ̀ ẹ̀rò tó yẹ láti mú un wá sí ayé.',
            search_placeholder: 'Wá nípa orúkọ, ẹ̀ka, tàbí ID...',
            report_title: 'Jẹ́bọ̀ Asàmúlò', report_reason: 'Ìdí ìjẹ́bọ̀',
            report_submit: 'Firanṣẹ́', report_cancel: 'Fagilé',
            auth_login: 'Wọlé', auth_signup: 'Forukọsilẹ',
            auth_email: 'Ímeèlì', auth_password: 'Ọ̀rọ̀ aṣínà',
            auth_name: 'Orúkọ Kíkún', auth_forgot: 'Gbàgbé ọ̀rọ̀ aṣínà?',
            auth_no_account: 'Kò sí àkọ̀ọ́lẹ̀?', auth_has_account: 'Ti ní àkọ̀ọ́lẹ̀?',
            pw_weak: 'Láìlágbára', pw_medium: 'Alárinrin', pw_strong: 'Alágbára',
            lang_name: 'Yorùbá'
        },
        ar: {
            nav_home: 'الرئيسية', nav_categories: 'الفئات', nav_register: 'تسجيل',
            nav_dashboard: 'لوحة التحكم', nav_idcard: 'بطاقة الهوية', nav_cloud: 'السحابة',
            nav_founder: 'المؤسس', nav_login: 'تسجيل الدخول',
            hero_title: 'بناء الثقة. حماية الهوية. خلق عالم رقمي أكثر أماناً.',
            hero_cta_verify: 'احصل على التحقق', hero_cta_view: 'عرض الفئات',
            stats_fraud: 'خسارة بسبب الاحتيال الإلكتروني سنوياً', stats_worry: 'المستخدمون القلقون بشأن الحسابات المزيفة',
            stats_impact: 'المتأثرون بالاحتيال يومياً', stats_moderation: 'الإنفاق على الإشراف',
            problem_title: 'المشكلة التي نحلها',
            problem_fake: 'الحسابات المزيفة', problem_scams: 'الاحتيال المتزايد',
            problem_trust: 'فقدان الثقة', problem_business: 'خسائر الأعمال',
            vision_verify: 'التحقق من الهويات الحقيقية', vision_authentic: 'تعزيز الأصالة',
            vision_safety: 'تعزيز سلامة المستخدم', vision_accountability: 'بناء المساءلة',
            goal_title: 'الهدف', mission_title: 'المهمة',
            cloud_sync: 'مزامنة السحابة: نشط', cloud_saved: 'محفوظ',
            notification_success: 'نجاح', notification_error: 'خطأ',
            notification_warning: 'تحذير', notification_info: 'معلومات',
            contact_email: 'البريد', contact_partner: 'الشراكات',
            contact_invest: 'المستثمرون', contact_career: 'الوظائف',
            founder_role: 'المؤسس والرئيس التنفيذي، منصة SMID',
            founder_quote: 'أنا مؤسس غير تقني برؤية واضحة. أحتاج إلى الشريك التقني المناسب لتحقيقها.',
            search_placeholder: 'البحث بالاسم أو الفئة أو المعرف...',
            report_title: 'الإبلاغ عن مستخدم', report_reason: 'سبب الإبلاغ',
            report_submit: 'إرسال', report_cancel: 'إلغاء',
            auth_login: 'تسجيل الدخول', auth_signup: 'إنشاء حساب',
            auth_email: 'البريد الإلكتروني', auth_password: 'كلمة المرور',
            auth_name: 'الاسم الكامل', auth_forgot: 'نسيت كلمة المرور؟',
            auth_no_account: 'ليس لديك حساب؟', auth_has_account: 'لديك حساب بالفعل؟',
            pw_weak: 'ضعيف', pw_medium: 'متوسط', pw_strong: 'قوي',
            lang_name: 'العربية'
        },
        zh: {
            nav_home: '首页', nav_categories: '类别', nav_register: '注册',
            nav_dashboard: '仪表盘', nav_idcard: '身份证', nav_cloud: '云存储',
            nav_founder: '创始人', nav_login: '登录',
            hero_title: '建立信任。保护身份。创造更安全的数字世界。',
            hero_cta_verify: '获取验证', hero_cta_view: '查看类别',
            stats_fraud: '每年因网络诈骗损失', stats_worry: '用户担心虚假账户',
            stats_impact: '每天受诈骗影响', stats_moderation: '用于审核支出',
            problem_title: '我们要解决的问题',
            problem_fake: '虚假账户', problem_scams: '诈骗增加',
            problem_trust: '失去信任', problem_business: '商业损失',
            vision_verify: '验证真实身份', vision_authentic: '促进真实性',
            vision_safety: '增强用户安全', vision_accountability: '建立问责制',
            goal_title: '目标', mission_title: '使命',
            cloud_sync: '云同步：活跃', cloud_saved: '已保存',
            notification_success: '成功', notification_error: '错误',
            notification_warning: '警告', notification_info: '信息',
            contact_email: '电子邮件', contact_partner: '合作伙伴',
            contact_invest: '投资者', contact_career: '职业',
            founder_role: '创始人兼CEO，SMID平台',
            founder_quote: '我是一个有清晰愿景的非技术创始人。我需要合适的技术合作伙伴来实现它。',
            search_placeholder: '按名称、类别或ID搜索...',
            report_title: '举报用户', report_reason: '举报原因',
            report_submit: '提交', report_cancel: '取消',
            auth_login: '登录', auth_signup: '注册',
            auth_email: '电子邮件', auth_password: '密码',
            auth_name: '全名', auth_forgot: '忘记密码？',
            auth_no_account: '没有账户？', auth_has_account: '已有账户？',
            pw_weak: '弱', pw_medium: '中', pw_strong: '强',
            lang_name: '中文'
        }
    },

    t(key) {
        const lang = this.translations[this.current] || this.translations.en;
        return lang[key] || this.translations.en[key] || key;
    },

    setLang(lang) {
        this.current = lang;
        localStorage.setItem('smid_lang', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        this.apply();
        showNotification(this.t('notification_success'), `Language changed to ${this.translations[lang]?.lang_name || lang}`, 'success');
    },

    apply() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = this.t(key);
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        });
    },

    load() {
        const saved = localStorage.getItem('smid_lang');
        if (saved && this.translations[saved]) {
            this.current = saved;
        } else {
            // Auto-detect from browser
            const browserLang = navigator.language.split('-')[0];
            if (this.translations[browserLang]) this.current = browserLang;
        }
        document.documentElement.lang = this.current;
        document.documentElement.dir = (this.current === 'ar') ? 'rtl' : 'ltr';
    }
};

// ---------- PARTICLE NETWORK ----------
(function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#6366f1';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        const count = Math.min(80, (canvas.width * canvas.height) / 15000);
        for (let i = 0; i < count; i++) particles.push(new Particle());
    }
    init();

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 150)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
})();

// ---------- THEME ----------
function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    localStorage.setItem('smid_theme', theme);
}

function loadTheme() {
    const saved = localStorage.getItem('smid