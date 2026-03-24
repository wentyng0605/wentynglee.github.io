document.addEventListener('DOMContentLoaded', () => {
  // 1. 获取所有带有 ID 的 Section 和对应的侧边导航链接
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#side-nav .nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // 只要 Section 露出 30% 就触发切换，这样更灵敏
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 获取当前进入视野的 Section ID
        const activeId = entry.target.getAttribute('id');

        // 2. 清除所有链接的 active 类，并给当前项加上
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  // 3. 开始观察每个 Section
  sections.forEach(section => {
    observer.observe(section);
  });
});