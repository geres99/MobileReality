/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect} from 'react';
import {getPostsRequest} from '../../api/requests/getPosts';
import {View, FlatList, Text, Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';
import {useUserContext} from '../../context';

const {width} = Dimensions.get('window');

const DetailsScreen = () => {
  const {posts, setPosts} = useUserContext();
  const navigation = useNavigation<any>();
  useEffect(() => {
    const getResponse = async () => {
      const response = await getPostsRequest();
      setPosts(response);
    };
    getResponse();
  }, [setPosts]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 32,
      }}>
      <FlatList
        keyExtractor={item => `${item.id}`}
        data={posts}
        style={{flexGrow: 1}}
        ItemSeparatorComponent={() => <View style={{paddingVertical: 16}} />}
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
          <View style={{paddingTop: 32}}>
            <Button
              title="Dodaj"
              onPress={() => {
                navigation.navigate('createNew');
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default DetailsScreen;
