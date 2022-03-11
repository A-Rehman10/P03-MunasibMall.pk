import React from 'react';
import {Text} from '../text';
import styles from './error-banner.style';

const ErrorBanner = ({error}) => {
  return <Text style={styles.text}>{error}</Text>;
};

export {ErrorBanner};
