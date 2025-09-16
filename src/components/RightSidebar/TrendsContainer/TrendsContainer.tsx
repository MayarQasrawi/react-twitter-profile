import TrendItem from './TrendItem/TrendItem';
import Container from '../Container/Container';
import styles from './trendsContainer.module.css';

const TrendsContainer = ({ onShowMore, trends }) => {
  return (
    <Container
      title="Trends for you"
      onShowMore={onShowMore}
      showMore
      role="region"
      aria-label="Trending topics"
    >
      <div className={styles.trendsWrapper} role="list">
        {trends.map((trend) => (
          <div key={trend.id} role="listitem">
            <TrendItem trend={trend} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TrendsContainer;