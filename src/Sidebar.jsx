import React, { useEffect, useState } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({ items = [] }) {
  const [activeId, setActiveId] = useState(items[0]?.id || '');

  // Smooth scroll when clicking links (works even if user disables CSS smooth)
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // update active immediately for snappy feedback
    setActiveId(id);
  };

  // Observe sections to update active link
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    }, observerOptions);

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className={styles.sidebar} aria-label="Page guide">
      <ul className={styles.list}>
        {items.map((it) => (
          <li key={it.id} className={styles.item}>
            <a
              href={`#${it.id}`}
              onClick={(e) => handleClick(e, it.id)}
              className={`${styles.link} ${activeId === it.id ? styles.active : ''}`}
              aria-current={activeId === it.id ? 'true' : undefined}
            >
              {it.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}