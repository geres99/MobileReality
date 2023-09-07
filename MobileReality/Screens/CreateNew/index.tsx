/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {FC, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {addPostRequest} from '../../api/requests/addPost';
import Button from '../../Components/Button';

const CreateNewScreen: FC = () => {
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 32,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingBottom: 32,
        }}>
        <Text style={{fontWeight: '800', fontSize: 24}}>Dodaj nowy post</Text>
      </View>
      <Text style={{fontWeight: '600', fontSize: 16}}>Tytuł</Text>
      <View style={{flexDirection: 'row', paddingBottom: 16}}>
        <TextInput
          placeholder="xxx"
          style={{
            color: 'black',
            borderWidth: 1,
            flexGrow: 1,
            padding: 8,
            fontSize: 16,
          }}
          value={titleInput}
          onChangeText={value => setTitleInput(value)}
        />
      </View>
      <Text style={{fontWeight: '600', fontSize: 16}}>Opis</Text>
      <View style={{flexDirection: 'row', paddingBottom: 16}}>
        <TextInput
          placeholder="xxx"
          style={{
            color: 'black',
            borderWidth: 1,
            flexGrow: 1,
            padding: 8,
            fontSize: 16,
          }}
          value={descriptionInput}
          onChangeText={value => setDescriptionInput(value)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button
          title="Dodaj"
          onPress={() => {
            addPostRequest({title: titleInput, description: descriptionInput});
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

export default CreateNewScreen;
