import React, {useState} from 'react';
import {Image, View, ActivityIndicator} from 'react-native';
import {Field} from 'formik';
import {Formik} from 'formik';
import styles from './edit-profile.style';
import * as Yup from 'yup';
import AppFormField from '../../components/form-components/form-field';
import FormSubmitButton from '../../components/form-components/form-submit-button';
import {FormFieldSeprator} from '../../components/form-field-seperator';
import {baseUrl} from '../../redux/actions/base-url';
import {
  launchImageLibrary,
  CameraOptions,
  Callback,
  ImagePickerResponse,
  Asset,
} from 'react-native-image-picker';
import {TouchableOpacity} from 'react-native';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(' Name is required'),
  phone_number: Yup.string().required('Phone number is required'),
});

const EditProfileForm = ({handleSubmit, profileUrl, name, phone_number}) => {
  const [imagePath, setImagePath] = useState('');
  const [loadImage, setLoading] = useState(false);
  const [profileImageUrl, setImageUrl] = useState('');
  const initialValues = {
    name: name,
    phone_number: phone_number,
    profile_image: profileImageUrl,
  };
  const openCamera = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, onImageSelected);
  };

  const onImageSelected: Callback = (response: ImagePickerResponse) => {
    response.assets?.map(image => {
      setImagePath(image.uri);
      uploadImage(image);
    });
  };

  const uploadImage = (imageData: Asset) => {
    const formData = new FormData();
    setLoading(true);
    formData.append('image', {
      uri: imageData.uri,
      type: imageData.type,
      name: imageData.fileName,
    });
    console.log('FormData', formData);
    axios
      .post(`${baseUrl}/api/images/single-image-upload`, formData, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(res => {
        setImageUrl(res.data.imageUrl);
        setLoading(false);
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize={true}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={openCamera}>
            <View
              style={[styles.selectedImage, styles.imagePlaceholderContainer]}>
              {loadImage ? (
                <ActivityIndicator size="small" color="green" />
              ) : (
                <Image
                  source={{
                    uri: imagePath ? imagePath : profileUrl,
                  }}
                  style={styles.selectedImage}
                />
              )}
              <View style={styles.imageEditContainer}>
                <Image source={require('../../assets/icons/camera.png')} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Field component={AppFormField} name="name" placeholder="Your Name" />

        <FormFieldSeprator />

        <Field
          component={AppFormField}
          name="phone_number"
          placeholder="phone_number"
        />

        <FormFieldSeprator />

        <FormSubmitButton title="Save" />
      </View>
    </Formik>
  );
};
export default EditProfileForm;
