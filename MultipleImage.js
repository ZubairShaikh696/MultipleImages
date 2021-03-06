import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
// import { DocumentPicker, ImagePicker } from 'expo';

import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from 'expo-image-picker';
export default class MultipleImage extends React.Component {
    state = {
      image: null,
    };
  _pickDocument = async () => {
	    let result = await DocumentPicker.getDocumentAsync({type: "*/*",
        multiple: true,
        copyToCacheDirectory: true});  
        alert(result.uri);
      console.log(result);
	}

   _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
    //   allowsEditing: true,
    //   aspect: [4, 3],
    // allowsMultipleSelection
    });

    alert(result.uri);
    console.log(result)

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
         let { image } = this.state;
    return (
      <View style={styles.container}>
        <Button
          title="Select Document"
          onPress={this._pickDocument}
        />

      <View style={{ 'marginTop': 20}}>
        <Button
          title="Select Image"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
