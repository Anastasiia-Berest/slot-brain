import { useEffect, useState } from 'react';
import styles from './styles.module.sass';

export default function BtnToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            //console.log('Scrolling...', window.scrollY);
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button className={`${styles.btn} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop}>
            UP
        </button>
    );
}
