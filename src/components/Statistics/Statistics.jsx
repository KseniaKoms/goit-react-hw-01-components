import PropTypes from 'prop-types';
import css  from './Statistics.module.css'

function Statistics({title, stats}) {
    return <section className={css.statistics}>
        {title  && (<h2 className={css.title}>{title}</h2>)}
        <ul className={css.statList}>
            {stats.map(data => ( <li style={{ backgroundColor: getRandomColor() }} className={css.item} key={data.id}>
      <span className={css.label}>{data.label }</span>
        <span className={css.percentage}>{data.percentage}%</span>
    </li>))}
   </ul>       
</section>
} 

export default Statistics;

Statistics.propTypes = {
     title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}