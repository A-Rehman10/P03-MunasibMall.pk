/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Switch,
  Dimensions,
} from 'react-native';
import {Text} from '../../../components/text';
import styles from './stat.style';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../../redux/actions/auth.action';
import {enableTouchId} from '../../../redux/actions/settings.action';
import {COLOR} from '../../../config/color';
import axios from 'axios';
import {baseUrl} from '../../../redux/actions/base-url';
import {LineChart} from 'react-native-chart-kit';
const MerchantStatsScreen = ({enableTouchId, isTouchIdEnabled, token}) => {
  const [productLabels, setLabels] = useState([]);
  const [productDataSet, seData] = useState([0, 0, 0, 0]);
  useEffect(() => {
    const getProductData = async () => {
      const res = await axios.get(`${baseUrl}/api/product/your-product`, {
        headers: {
          'x-auth-token': `${token}`,
        },
      });
      let labels = [];
      let dataSet = [];
      labels = res.data.map(product => product.title);
      dataSet = res.data.map(product => product.reviews.length);
      setLabels(labels);
      seData(dataSet);
    };
    getProductData();
  }, [token]);
  return (
    <ScrollView style={styles.container}>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        // contentContainerStyle={{ }}
        horizontal>
        <OptionSeparator />
        {productDataSet && productLabels ? (
          <LineChart
            segments={2}
            data={{
              labels: productLabels,
              datasets: [
                {
                  data: productDataSet,
                  strokeWidth: 4,
                  color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={600}
            // yAxisLabel="$"
            // yAxisSuffix="sales"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: COLOR.GREY.WHITE,
              backgroundGradientFrom: COLOR.GREY[600],
              backgroundGradientTo: COLOR.ORANGE,
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(200, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
                paddingVertical: 200,
              },
              propsForLabels: {
                inlineSize: '0',
                fontWeight: '700',
              },
              propsForDots: {
                r: '5',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            withOuterLines={false}
            // transparent={true}
            spacing={0.8}
            spacingInner={0.8}
            verticalLabelRotation={90}
            style={{
              marginTop: 90,
              borderRadius: 16,
            }}
          />
        ) : null}
        <OptionSeparator />
      </ScrollView>
    </ScrollView>
  );
};

const Option = ({title, showIcon = true, imageSource, isEnabled, onSwitch}) => {
  return (
    <View o style={styles.option}>
      <View style={styles.optionContainer}>
        <View style={styles.optionIconContainer}>
          <Image source={imageSource} />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{title}</Text>
        </View>
      </View>
      {showIcon && (
        <View style={styles.optionIconContainer}>
          <Switch
            trackColor={{false: COLOR.GREY[800], true: COLOR.BLUE_GREY}}
            thumbColor={isEnabled ? COLOR.ORANGE : COLOR.WHITE}
            ios_backgroundColor={COLOR.TRANSPARENT}
            onValueChange={onSwitch}
            value={isEnabled}
          />
        </View>
      )}
    </View>
  );
};

const OptionSeparator: React.FC = () => <View style={styles.optionSeparator} />;

MerchantStatsScreen.propTypes = {
  isTouchIdEnabled: PropTypes.bool,
  enableTouchId: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLogging: state.auth.loading,
  user: state.auth.user,
  isTouchIdEnabled: state.settings.isTouchIdEnabled,
  token: state.auth.token,
});

export default connect(mapStateToProps, {logout, enableTouchId})(
  MerchantStatsScreen,
);
