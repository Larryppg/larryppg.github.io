// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 技能条动画
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('style').match(/width:\s*(\d+%)/)[1];
        }
    });
}, observerOptions);

document.querySelectorAll('.progress-bar').forEach(bar => {
    observer.observe(bar);
});

// 动态年份
document.querySelector('footer p').innerHTML = 
    `&copy; ${new Date().getFullYear()} 张三. Made with ❤️ using GitHub Pages`;
