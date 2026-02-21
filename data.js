// ========================================
// Portfolio Data - Centralized Data Source
// ========================================

const portfolioData = {
    // ========================================
    // Profile Section
    // ========================================
    profile: {
        name: "Muhammad Rizki Hidayat",
        fullName: "Muhammad Rizki Hidayat",
        title: "Full Stack Developer & UI/UX Designer",
        greeting: "Halo, saya",
        description: "Membangun solusi digital yang elegan dan fungsional dengan fokus pada pengalaman pengguna yang luar biasa.",
        aboutDescription: "Saya adalah seorang pengembang web yang passionate dalam menciptakan pengalaman digital yang menarik dan fungsional. Dengan pengalaman dalam berbagai proyek, saya mengkhususkan diri dalam membangun aplikasi web yang responsif dan user-friendly. Saya percaya bahwa teknologi harus membantu manusia, bukan mempersulitnya. Oleh karena itu, saya selalu mengutamakan clean code, aksesibilitas, dan pengalaman pengguna dalam setiap proyek yang saya kerjakan.",
        photo: "assets/profile.png",
        //Fallback icons when no photo
        heroIcon: "fa-user",
        aboutIcon: "fa-user-tie"
    },

    // ========================================
    // Statistics
    // ========================================
    stats: {
        experience: {
            value: 3,
            suffix: "+",
            label: "Tahun Pengalaman"
        },
        projects: {
            value: 50,
            suffix: "+",
            label: "Proyek Selesai"
        },
        clients: {
            value: 30,
            suffix: "+",
            label: "Klien Puas"
        }
    },

    // ========================================
    // Skills Section
    // ========================================
    skills: {
        frontend: {
            title: "Frontend",
            items: [
                { name: "HTML5", icon: "fab fa-html5", level: 95 },
                { name: "CSS3", icon: "fab fa-css3-alt", level: 90 },
                { name: "JavaScript", icon: "fab fa-js", level: 85 },
                { name: "React", icon: "fab fa-react", level: 80 }
            ]
        },
        backend: {
            title: "Backend",
            items: [
                { name: "Node.js", icon: "fab fa-node-js", level: 80 },
                { name: "MySQL", icon: "fas fa-database", level: 75 },
                { name: "Python", icon: "fab fa-python", level: 70 },
                { name: "PHP", icon: "fab fa-php", level: 75 }
            ]
        },
        tools: {
            title: "Tools & Design",
            items: [
                { name: "Figma", icon: "fab fa-figma", level: 85 },
                { name: "Git", icon: "fab fa-git-alt", level: 80 },
                { name: "Docker", icon: "fab fa-docker", level: 65 },
                { name: "UI/UX Design", icon: "fas fa-pencil-ruler", level: 85 }
            ]
        }
    },

    // ========================================
    // Projects Section
    // ========================================
    projects: [
        {
            title: "E-Commerce Platform",
            description: "Platform belanja online lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin.",
            image: "assets/projects/ecommerce.jpg",
            icon: "fas fa-store",
            tags: ["React", "Node.js", "MySQL"],
            links: {
                source: "#",
                demo: "#"
            }
        },
        {
            title: "Task Management App",
            description: "Aplikasi manajemen tugas dengan fitur drag & drop, real-time collaboration, dan notifikasi.",
            image: "assets/projects/taskmanager.jpg",
            icon: "fas fa-tasks",
            tags: ["Vue.js", "Firebase", "Tailwind"],
            links: {
                source: "#",
                demo: "#"
            }
        },
        {
            title: "Analytics Dashboard",
            description: "Dashboard analitik dengan visualisasi data interaktif, laporan real-time, dan export PDF.",
            image: "assets/projects/analytics.jpg",
            icon: "fas fa-chart-line",
            tags: ["React", "D3.js", "Express"],
            links: {
                source: "#",
                demo: "#"
            }
        },
        {
            title: "Restaurant Website",
            description: "Website restoran dengan reservasi online, menu interaktif, dan sistem pemesanan.",
            image: "assets/projects/restaurant.jpg",
            icon: "fas fa-utensils",
            tags: ["HTML/CSS", "JavaScript", "PHP"],
            links: {
                source: "#",
                demo: "#"
            }
        },
        {
            title: "E-Learning Platform",
            description: "Platform pembelajaran online dengan video streaming, quiz interaktif, dan tracking progress.",
            image: "assets/projects/elearning.jpg",
            icon: "fas fa-graduation-cap",
            tags: ["MERN Stack", "AWS", "Stripe"],
            links: {
                source: "#",
                demo: "#"
            }
        },
        {
            title: "Portfolio Website",
            description: "Website portofolio responsif dengan desain modern, animasi smooth, dan SEO optimized.",
            image: "assets/projects/portfolio.jpg",
            icon: "fas fa-mobile-alt",
            tags: ["HTML/CSS", "JavaScript", "GSAP"],
            links: {
                source: "#",
                demo: "#"
            }
        }
    ],

    // ========================================
    // Contact Section
    // ========================================
    contact: {
        email: "m.rizkihidayat15@gmail.com",
        phone: "+6282311033008",
        location: "Medan, Indonesia",
        social: {
            github: "https://github.com/rizkihidayat15",
            linkedin: "https://linkedin.com/in/mrizkihidayat",
            instagram: "https://instagram.com/kiihdyt_",
            twitter: "https://twitter.com"
        },
        socialNames: {
            github: "GitHub",
            linkedin: "LinkedIn",
            instagram: "Instagram",
            twitter: "Twitter"
        }
    },

    // ========================================
    // Footer
    // ========================================
    footer: {
        copyright: "© 2025 Muhammad Rizki. All rights reserved."
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
