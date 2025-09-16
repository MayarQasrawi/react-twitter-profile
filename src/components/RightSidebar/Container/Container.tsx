import styles from './container.module.css';

const Container = ({
  title,
  children,
  showMore = false,
  onShowMore,
  className = '',
  loading = false,
  ...rest
}) => {
  return (
    <section className={`${styles.container} ${className}`} {...rest}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>
      
      <main className={styles.content}>
        {loading ? (
          <div className={styles.loading}>
            <div className={styles.loadingSpinner}></div>
            <span>Loading...</span>
          </div>
        ) : (
          children
        )}
      </main>
      
      {showMore && onShowMore && !loading && (
        <footer className={styles.footer}>
          <button 
            className={styles.showMoreBtn}
            onClick={onShowMore}
            type="button"
          >
            Show more
          </button>
        </footer>
      )}
    </section>
  );
};

export default Container;
