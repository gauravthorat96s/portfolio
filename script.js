// ========================================
// PROJECT DATA
// ========================================
const projectsData = {

    ecommerce: {
        title: 'E-Commerce Data Analysis',
        description: 'Comprehensive e-commerce data analysis with interactive dashboards and actionable business insights.',
        longDescription: 'This E-Commerce Data Analysis project focuses on analyzing customer behavior, sales performance, product trends, revenue patterns, and business performance using real-world e-commerce data. The project includes data cleaning, preprocessing, exploratory data analysis, SQL queries, statistical analysis, and visualizations to identify important business trends and support data-driven decision making.',
        technologies: ['Python', 'MySQL', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
        icon: 'fas fa-shopping-cart',
        mainImage: null,
        gallery: [
            {
                image: 'project-ecommerce-1.jpg',
                demo: 'https://github.com/gauravthorat96s/E-commers-Analysis/blob/main/updated_all_data.csv',
                title: 'Data Overview'
            },
            {
                image: 'project-ecommerce-2.jpg',
                demo: 'https://github.com/gauravthorat96s/E-commers-Analysis/blob/main/Sales_chart.png',
                title: 'Sales Analysis'
            },
            {
                image: 'project-ecommerce-3.jpg',
                demo: 'https://github.com/gauravthorat96s/E-commers-Analysis/tree/main/static/charts',
                title: 'Customer Analysis'
            },
            {
                image: 'project-ecommerce-4.jpg',
                demo: 'https://github.com/gauravthorat96s/E-commers-Analysis/tree/main/Insights_Garaphs',
                title: 'Business Insights'
            }
        ],
        liveDemo: 'https://github.com/gauravthorat96s/E-commers-Analysis'
    },

    bankAnalysis: {
        title: 'Bank Data Analysis',
        description: 'Comprehensive bank data analysis with interactive dashboards and actionable business insights.',
        longDescription: 'This Bank Data Analysis project analyzes banking data to understand customer behavior, account activity, financial trends, transaction patterns, and overall banking performance. Python and SQL are used for data cleaning, transformation, analysis, and visualization to generate meaningful insights that can support business and financial decision making.',
        technologies: ['Python', 'MySQL', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
        icon: 'fas fa-university',
        mainImage: null,
        gallery: [
            {
                image: 'project-bank-analysis-1.jpg',
                demo: 'https://github.com/gauravthorat96s/Bank-Analysis/blob/main/clean_banking_dataset.csv',
                title: 'Bank Data Overview'
            },
            {
                image: 'project-bank-analysis-2.jpg',
                demo: 'https://github.com/gauravthorat96s/Bank-Analysis/blob/main/READ.md',
                title: 'Customer Analysis'
            },
          
            {
                image: 'project-bank-analysis-4.jpg',
                demo: 'https://github.com/gauravthorat96s/Bank-Analysis/tree/main/Graphs',
                title: 'Financial Insights'
            }
        ],
        liveDemo: 'https://github.com/gauravthorat96s/Bank-Analysis'
    },

    walmartAnalysis: {
        title: 'Retail Walmart Analysis',
        description: 'Comprehensive retail data analysis for Walmart with interactive dashboards and actionable business insights.',
        longDescription: 'This Retail Walmart Analysis project focuses on analyzing retail sales data to understand product performance, store performance, customer purchasing trends, revenue patterns, and seasonal sales behavior. Python, SQL, Pandas, NumPy, and Matplotlib are used to clean, analyze, and visualize the dataset and generate actionable retail business insights.',
        technologies: ['Python', 'MySQL', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
        icon: 'fas fa-store',
        mainImage: null,
        gallery: [
            {
                image: 'project-walmart-1.jpg',
                demo: 'https://github.com/gauravthorat96s/retail-analysis-walmart/blob/main/Walmart_Store_sales.csv',
                title: 'Retail Overview'
            },
           
            {
                image: 'project-walmart-4.jpg',
                demo: 'https://github.com/gauravthorat96s/retail-analysis-walmart/tree/main/charts',
                title: 'Retail Insights'
            }
        ],
        liveDemo: 'https://github.com/gauravthorat96s/retail-analysis-walmart'
    },

    'bank-dashboard': {
        title: 'Bank Dashboard',
        description: 'Interactive dashboard for bank data visualization.',
        longDescription: 'This Bank Dashboard project provides an interactive visualization of banking data using Tableau. The dashboard presents important KPIs, customer information, financial trends, account statistics, and business performance metrics in a clear and interactive format to support faster and more effective decision making.',
        technologies: ['SQL', 'Tableau', "KPI's"],
        icon: 'fas fa-chart-bar',
        mainImage: null,
        gallery: [
            {
                image: 'bank-dashboard-1.jpg',
                demo: 'https://github.com/gauravthorat96s/Bank-Dashboard--Tableau-/blob/main/Screenshot%202026-07-02%20163359.jpg',
                title: 'Dashboard Overview'
            },
            {
                image: 'bank-dashboard-2.jpg',
                demo: 'https://github.com/gauravthorat96s/Bank-Dashboard--Tableau-/blob/main/Screenshot%202026-07-02%20163359.jpg',
                title: 'Customer KPIs'
            }
            
        ],
        liveDemo: 'https://github.com/gauravthorat96s/Bank-Dashboard--Tableau-'
    },

    'hr-dashboard': {
        title: 'HR Data Analysis Dashboard',
        description: 'Interactive dashboard for analyzing human resources data.',
        longDescription: 'This HR Data Analysis Dashboard provides insights into employee demographics, workforce distribution, attrition, department performance, salary patterns, job roles, and other important HR KPIs. SQL is used for data preparation and Tableau is used to create interactive dashboards that help organizations understand workforce trends and support HR decision making.',
        technologies: ['SQL', 'Tableau', "KPI's"],
        icon: 'fas fa-users',
        mainImage: null,
        gallery: [
            {
                image: 'hr-dashboard-1.jpg',
                demo: 'https://github.com/gauravthorat96s/HR-Analytics-Dashboard-Tableau-/blob/master/HR%20background.pptx.jpg',
                title: 'HR Dashboard'
            }
        ],
        liveDemo: 'https://github.com/gauravthorat96s/HR-Analytics-Dashboard-Tableau-'
    },

    'mobile-analytics': {
        title: 'Mobile Data Analysis Dashboard',
        description: 'Interactive dashboard for analyzing mobile sales data.',
        longDescription: 'This Mobile Data Analysis Dashboard focuses on analyzing mobile phone sales, brands, models, revenue, customer ratings, payment methods, and regional performance. SQL is used for preparing and analyzing the data, while Power BI, DAX, and KPIs are used to create an interactive dashboard that provides meaningful insights into mobile sales performance.',
        technologies: ['SQL', 'Power BI', 'DAX', "KPI's"],
        icon: 'fas fa-mobile-alt',
        mainImage: null,
        gallery: [
            {
                image: 'mobile-dashboard-1.jpg',
                demo: 'https://github.com/gauravthorat96s/Mobile-sales-Dashboard-Power-BI-/tree/master/Output',
                title: 'Mobile Dashboard'
            },
            {
                image: 'mobile-dashboard-2.jpg',
                demo: 'https://github.com/gauravthorat96s/Mobile-sales-Dashboard-Power-BI-/blob/master/18-06-2026%20Project.pbix',
                title: 'Require Data'
            }
        ],
        liveDemo: 'https://github.com/gauravthorat96s/Mobile-sales-Dashboard-Power-BI-'
    },

    'sales-analytics': {
        title: 'Sales Data Analysis',
        description: 'Interactive analysis for understanding sales performance and business trends.',
        longDescription: 'This Sales Data Analysis project analyzes sales transactions to identify revenue trends, product performance, customer purchasing patterns, monthly sales growth, and other important business metrics. Python, SQL, Pandas, NumPy, Matplotlib, and Jupyter Notebook are used for cleaning, analyzing, and visualizing the sales data to generate actionable business insights.',
        technologies: ['Python', 'MySQL', 'NumPy', 'Pandas', 'Matplotlib', 'Jupyter Notebook'],
        icon: 'fas fa-chart-line',
        mainImage: null,
        gallery: [
            {
                image: 'sales-analysis-1.jpg',
                demo: 'https://github.com/gauravthorat96s/Sales-Analysis/tree/main/Sales_Data',
                title: 'Sales Overview'
            },
            
            {
                image: 'sales-analysis-3.jpg',
                demo: 'https://github.com/gauravthorat96s/Sales-Analysis/blob/main/READ.md',
                title: 'ReadMD File'
            },
            {
                image: 'sales-analysis-4.jpg',
                demo: 'https://github.com/gauravthorat96s/Sales-Analysis/tree/main/Sales%20Graph',
                title: 'Sales Insights'
            }
        ],
        liveDemo: 'https://github.com/gauravthorat96s/Sales-Analysis'
    }
};


let currentGalleryImages = [];
let currentImageIndex = 0;


// ========================================
// WELCOME SCREEN ANIMATION
// ========================================
window.addEventListener('load', () => {

    setTimeout(() => {

        const welcomeScreen = document.getElementById('welcomeScreen');

        if (welcomeScreen) {
            welcomeScreen.classList.add('slide-down');
        }

    }, 5000);

});


// ========================================
// TYPING ANIMATION
// ========================================
const texts = [
    'Data Cleaning',
    'Data Analysis',
    'Data Visualization',
    'Dashboard Generation',
    'Reporting',
    'Mobile Apps',
    'Database Systems',
    'Web Development',
    'AI Solutions'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById('typing');


function type() {

    if (!typingElement) return;

    const currentText = texts[textIndex];

    if (isDeleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

    }


    let typeSpeed = isDeleting ? 50 : 100;


    if (!isDeleting && charIndex === currentText.length) {

        typeSpeed = 2000;
        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        textIndex =
            (textIndex + 1) % texts.length;

        typeSpeed = 500;

    }


    setTimeout(type, typeSpeed);
}


if (typingElement) {
    type();
}


// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
const navbar =
    document.getElementById('navbar');


if (navbar) {

    window.addEventListener('scroll', () => {

        navbar.classList.toggle(
            'scrolled',
            window.scrollY > 50
        );

    });

}


// ========================================
// MOBILE MENU
// ========================================
const hamburger =
    document.getElementById('hamburger');

const navLinks =
    document.getElementById('navLinks');


if (hamburger && navLinks) {

    hamburger.addEventListener('click', () => {

        navLinks.classList.toggle('active');

        hamburger.classList.toggle('active');

    });


    document.querySelectorAll('.nav-links a')
        .forEach(link => {

            link.addEventListener('click', () => {

                navLinks.classList.remove('active');

                hamburger.classList.remove('active');

            });

        });


    document.addEventListener('click', (e) => {

        if (
            !hamburger.contains(e.target) &&
            !navLinks.contains(e.target)
        ) {

            navLinks.classList.remove('active');

            hamburger.classList.remove('active');

        }

    });

}


// ========================================
// TAB SWITCHING
// ========================================
function switchTab(tabName) {

    document.querySelectorAll('.tab-btn')
        .forEach(btn =>
            btn.classList.remove('active')
        );


    document.querySelectorAll('.tab-content')
        .forEach(content =>
            content.classList.remove('active')
        );


    if (event && event.target) {

        event.target.classList.add('active');

    }


    const tabContent =
        document.getElementById(tabName);


    if (tabContent) {

        tabContent.classList.add('active');

    }

}


// ========================================
// PROJECT MODAL FUNCTIONS
// ========================================
function openProjectModal(projectId) {

    const project =
        projectsData[projectId];


    if (!project) return;


    const modalBody =
        document.getElementById('modalBody');


    if (!modalBody) return;


    currentGalleryImages =
        project.gallery;


    const galleryHTML =
        project.gallery.map((item, index) => `

        <div class="gallery-item"
            onclick="openLightbox(${index})">

            <img
                src="${item.image}"
                alt="${item.title}"
                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22250%22%3E%3Crect fill=%22%231a1a2e%22 width=%22400%22 height=%22250%22/%3E%3Ctext fill=%22%2300d9ff%22 font-family=%22Arial%22 font-size=%2216%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3E${encodeURIComponent(item.title)}%3C/text%3E%3C/svg%3E'"
            >

            <div class="gallery-overlay">

                <i class="fas fa-search-plus"></i>

                <span
                    style="
                    color:white;
                    font-size:0.9rem;
                    font-weight:600;
                    "
                >
                    ${item.title}
                </span>

                <a
                    href="${item.demo}"
                    class="gallery-demo-btn"
                    target="_blank"
                    onclick="event.stopPropagation()"
                >

                    <i class="fas fa-external-link-alt"></i>

                    Live Demo

                </a>

            </div>

        </div>

    `).join('');



    // ========================================
    // MODAL HEADER ICON / IMAGE
    // ========================================

    let headerHTML = '';


    if (project.icon) {

        headerHTML = `

            <div class="modal-header-icon">

                <i class="${project.icon}"></i>

            </div>

        `;

    } else if (project.mainImage) {

        headerHTML = `

            <div class="modal-header-image">

                <img
                    src="${project.mainImage}"
                    alt="${project.title}"
                >

            </div>

        `;

    }



    modalBody.innerHTML = `

        ${headerHTML}


        <div class="modal-info">

            <h2>
                ${project.title}
            </h2>


            <p>
                ${project.longDescription}
            </p>


            <div class="modal-tags">

                ${project.technologies
            .map(
                tech =>
                    `<span class="tag">${tech}</span>`
            )
            .join('')}

            </div>


            ${project.liveDemo &&
            project.liveDemo !== '#'

            ? `

                <a
                    href="${project.liveDemo}"
                    target="_blank"
                    class="gallery-demo-btn"
                    onclick="event.stopPropagation()"
                >

                    <i class="fas fa-external-link-alt"></i>

                    Live Demo

                </a>

                `

            : ''
        }


            <div class="project-gallery">

                <h3>
                    Project Gallery
                </h3>


                <p
                    style="
                    color:var(--text-secondary);
                    margin-bottom:1.5rem;
                    font-size:0.95rem;
                    "
                >

                    Click images to view project details

                </p>


                <div class="gallery-grid">

                    ${galleryHTML}

                </div>

            </div>

        </div>

    `;



    const modal =
        document.getElementById('projectModal');


    if (modal) {

        modal.classList.add('active');

        document.body.style.overflow =
            'hidden';

    }

}



function closeProjectModal() {

    const modal =
        document.getElementById('projectModal');


    if (modal) {

        modal.classList.remove('active');

        document.body.style.overflow = '';

    }

}



// ========================================
// LIGHTBOX FUNCTIONS
// ========================================
function openLightbox(index) {

    currentImageIndex =
        index;


    const lightbox =
        document.getElementById('lightbox');


    const lightboxImg =
        document.getElementById('lightboxImg');


    const lightboxDemoBtn =
        document.getElementById('lightboxDemoBtn');


    if (
        !lightbox ||
        !lightboxImg ||
        !lightboxDemoBtn
    ) return;


    const currentItem =
        currentGalleryImages[index];


    lightboxImg.src =
        currentItem.image;


    lightboxDemoBtn.href =
        currentItem.demo;


    lightboxDemoBtn.innerHTML = `

        <i class="fas fa-external-link-alt"></i>

        Live Demo - ${currentItem.title}

    `;


    lightbox.classList.add('active');

}



function closeLightbox() {

    const lightbox =
        document.getElementById('lightbox');


    if (lightbox) {

        lightbox.classList.remove('active');

    }

}



function changeImage(direction) {

    currentImageIndex +=
        direction;


    if (
        currentImageIndex >=
        currentGalleryImages.length
    ) {

        currentImageIndex = 0;

    }

    else if (
        currentImageIndex < 0
    ) {

        currentImageIndex =
            currentGalleryImages.length - 1;

    }


    const lightboxImg =
        document.getElementById('lightboxImg');


    const lightboxDemoBtn =
        document.getElementById('lightboxDemoBtn');


    if (
        !lightboxImg ||
        !lightboxDemoBtn
    ) return;


    const currentItem =
        currentGalleryImages[currentImageIndex];


    lightboxImg.src =
        currentItem.image;


    lightboxDemoBtn.href =
        currentItem.demo;


    lightboxDemoBtn.innerHTML = `

        <i class="fas fa-external-link-alt"></i>

        Live Demo - ${currentItem.title}

    `;

}



// ========================================
// MODAL & LIGHTBOX EVENT LISTENERS
// ========================================
document.addEventListener(
    'DOMContentLoaded',
    () => {

        const projectModal =
            document.getElementById(
                'projectModal'
            );


        if (projectModal) {

            projectModal.addEventListener(
                'click',
                function (e) {

                    if (e.target === this) {

                        closeProjectModal();

                    }

                }
            );

        }


        const lightbox =
            document.getElementById(
                'lightbox'
            );


        if (lightbox) {

            lightbox.addEventListener(
                'click',
                function (e) {

                    if (e.target === this) {

                        closeLightbox();

                    }

                }
            );

        }

    }
);



// ========================================
// ESC KEY
// ========================================
document.addEventListener(
    'keydown',
    function (e) {

        if (e.key === 'Escape') {

            closeProjectModal();

            closeLightbox();

        }

    }
);



// ========================================
// LIGHTBOX ARROW KEYS
// ========================================
document.addEventListener(
    'keydown',
    function (e) {

        const lightbox =
            document.getElementById(
                'lightbox'
            );


        if (
            lightbox &&
            lightbox.classList.contains(
                'active'
            )
        ) {

            if (e.key === 'ArrowLeft') {

                changeImage(-1);

            }

            else if (
                e.key === 'ArrowRight'
            ) {

                changeImage(1);

            }

        }

    }
);



// ========================================
// SCROLL REVEAL ANIMATION
// ========================================
function reveal() {

    document.querySelectorAll('.reveal')
        .forEach(el => {

            const windowHeight =
                window.innerHeight;


            const elementTop =
                el.getBoundingClientRect()
                    .top;


            const elementVisible =
                150;


            if (
                elementTop <
                windowHeight -
                elementVisible
            ) {

                el.classList.add('active');

            }

        });

}


window.addEventListener(
    'scroll',
    reveal
);


document.addEventListener(
    'DOMContentLoaded',
    () => {

        reveal();

    }
);



// ========================================
// BACK TO TOP BUTTON
// ========================================
const backToTopBtn =
    document.getElementById(
        'backToTop'
    );


if (backToTopBtn) {

    window.addEventListener(
        'scroll',
        () => {

            backToTopBtn.classList.toggle(
                'show',
                window.pageYOffset > 300
            );

        }
    );


    backToTopBtn.addEventListener(
        'click',
        () => {

            window.scrollTo({

                top: 0,

                behavior: 'smooth'

            });

        }
    );

}



// ========================================
// CONTACT FORM
// ========================================
const contactForm =
    document.getElementById(
        'contactForm'
    );


if (contactForm) {

    contactForm.addEventListener(
        'submit',
        function (e) {

            e.preventDefault();


            const formData = {

                name:
                    document.getElementById(
                        'name'
                    )?.value || '',


                email:
                    document.getElementById(
                        'email'
                    )?.value || '',


                subject:
                    document.getElementById(
                        'subject'
                    )?.value || '',


                message:
                    document.getElementById(
                        'message'
                    )?.value || ''

            };


            console.log(
                'Form Data:',
                formData
            );


            const submitBtn =
                this.querySelector(
                    '.submit-btn'
                );


            if (submitBtn) {

                const originalContent =
                    submitBtn.innerHTML;


                submitBtn.innerHTML =
                    '<i class="fas fa-check"></i> Message Sent!';


                submitBtn.style.background =
                    'linear-gradient(135deg, #10b981, #059669)';


                this.reset();


                setTimeout(() => {

                    submitBtn.innerHTML =
                        originalContent;


                    submitBtn.style.background =
                        '';

                }, 3000);

            }

        }
    );

}



// ========================================
// SMOOTH SCROLL
// ========================================
document.addEventListener(
    'DOMContentLoaded',
    () => {

        document
            .querySelectorAll('a[href^="#"]')
            .forEach(anchor => {

                anchor.addEventListener(
                    'click',
                    function (e) {

                        const href =
                            this.getAttribute(
                                'href'
                            );


                        if (href === '#')
                            return;


                        e.preventDefault();


                        const target =
                            document.querySelector(
                                href
                            );


                        if (target) {

                            const offsetTop =
                                target.offsetTop -
                                80;


                            window.scrollTo({

                                top:
                                    offsetTop,

                                behavior:
                                    'smooth'

                            });


                            const navLinks =
                                document.getElementById(
                                    'navLinks'
                                );


                            const hamburger =
                                document.getElementById(
                                    'hamburger'
                                );


                            if (
                                navLinks &&
                                navLinks.classList.contains(
                                    'active'
                                )
                            ) {

                                navLinks.classList.remove(
                                    'active'
                                );


                                if (hamburger) {

                                    hamburger.classList.remove(
                                        'active'
                                    );

                                }

                            }

                        }

                    }
                );

            });

    }
);



// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
if (
    'loading' in
    HTMLImageElement.prototype
) {

    const images =
        document.querySelectorAll(
            'img[loading="lazy"]'
        );


    images.forEach(img => {

        if (img.dataset.src) {

            img.src =
                img.dataset.src;

        }

    });

}



// ========================================
// TOUCH DEVICE DETECTION
// ========================================
function isTouchDevice() {

    return (

        ('ontouchstart' in window) ||

        (navigator.maxTouchPoints > 0) ||

        (navigator.msMaxTouchPoints > 0)

    );

}


if (isTouchDevice()) {

    document.body.classList.add(
        'touch-device'
    );

}



// ========================================
// ERROR HANDLING
// ========================================
window.addEventListener(
    'error',
    (e) => {

        console.error(
            'Error:',
            e.error
        );

    }
);



// ========================================
// INITIALIZATION COMPLETE
// ========================================
document.addEventListener(
    'DOMContentLoaded',
    () => {

        console.log(
            'Portfolio loaded successfully! 🚀'
        );


        console.log(
            'Touch device:',
            isTouchDevice()
        );

    }
);