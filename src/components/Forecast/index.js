import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Forecast = ({ forecast }) => (
  <div className={styles.forecastContainer}>
    {
      forecast.map(w => (
        <article key={w.date} className={styles.card}>
          <header className={styles.cardHead}>
            <h2 className={styles.cardDay}>
              {w.day}
            </h2>
            <p className={styles.cardText}>
              {w.date + ', ' + w.desc}
            </p>
          </header>
          <main className={styles.cardBody}>
            <div className={styles.cardMainInfo}>
              <span className={styles.temp}>
                {w.temp}
              </span>
              <img className={styles.icon} src={w.icon} alt={w.desc} />
            </div>
            <table className={styles.table}>
              <colgroup>
                <col width="50%"></col>
                <col width="50%"></col>
              </colgroup>
              <tbody>
                <tr className={styles.row}>
                  <th className={styles.th}>Вітер</th>
                  <td className={styles.td}>
                    {w.windSpeed}
                    {
                      <i 
                        className={'material-icons ' + styles.wind}
                        style={{
                          transform: `rotate(${w.windDir}deg)`,
                        }}
                      >
                        arrow_upward
                      </i>
                    }
                  </td>
                </tr>
                <tr className={styles.row}>
                  <th className={styles.th}>Мінімальна темп.</th>
                  <td className={styles.td}>{w.minTemp}</td>
                </tr>
                <tr className={styles.row}>
                  <th className={styles.th}>Максимальна темп.</th>
                  <td className={styles.td}>{w.maxTemp}</td>
                </tr>
              </tbody>
            </table>
          </main>
        </article>
      ))
    }
  </div>
);

Forecast.propTypes = {
  forecast: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Forecast;
