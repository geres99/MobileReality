/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {getPostsRequest, PostType} from '../../api/requests/getPosts';
import {View, FlatList, Text, Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';

const {width} = Dimensions.get('window');

const DetailsScreen = () => {
  const [list, setList] = useState<PostType[]>([]);
  const navigation = useNavigation<any>();
  useEffect(() => {
    const getResponse = async () => {
      const response = await getPostsRequest();
      setList(response);
    };
    getResponse();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 32,
      }}>
      <FlatList
        data={list}
        style={{flexGrow: 1}}
        renderItem={({item: {title, description, id, createdAt}}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('componentDetails', {
                id,
              })
            }>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexGrow: 1, width: width - 64}}>
                <Text style={{fontSize: 16, fontWeight: '800'}}>{title}</Text>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  {description}
                </Text>
                <Text style={{fontSize: 12, fontWeight: '600'}}>{id}</Text>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  {createdAt}
                </Text>
              </View>
              <View style={{flexGrow: 1}} />
            </View>
          </TouchableOpacity>
        )}
        ListFooterComponent={() => (
          <Button
            title="Dodaj"
            onPress={() => {
              navigation.navigate('createNew');
            }}
          />
        )}
      />
    </View>
  );
};

export default DetailsScreen;
