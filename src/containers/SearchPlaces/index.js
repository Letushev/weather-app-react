import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import consts from '../../utils/constants'; 
import styles from './styles.module.scss';
import { throws } from 'assert';

class Search extends Component {
  static propTypes = {
    onPlaceChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  onScriptLoad() {
    const options = {
      types: ['(cities)'],
      language: 'uk',
    };

    this.autocomplete = new window.google.maps.places.Autocomplete(
      this.input.current,
      options
    );

    this.autocomplete.addListener('place_changed', () => this.onPlaceChange());
  }

  onPlaceChange() {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceChange(place);
  }

  render() {
    return(
      <>
        <div className={styles.inputContainer}>
          <input type='text' className={styles.input} ref={this.input} />
          <i className={`${styles.inputIcon} material-icons`}>search</i>
        </div>
        <Script url={consts.PLACES_API_URL} onLoad={() => this.onScriptLoad()} />
      </>
    );
  }
}

export default Search;
