/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {FC, useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Button from '../../Components/Button';
import {deletePostsRequest} from '../../api/requests/deletePost';
import {useNavigation} from '@react-navigation/native';
import {getPostRequest} from '../../api/requests/getPost';
import {PostType} from '../../api/requests/getPosts';

const {width} = Dimensions.get('window');

const ComponentDetailsScreen: FC<any> = props => {
  const {id} = props.route.params;
  const [details, setDetails] = useState<PostType>();
  useEffect(() => {
    const getPost = async () => {
      const response = await getPostRequest(id);
      setDetails(response);
    };
    getPost();
  }, []);
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      {details ? (
        <View
          style={{
            flexGrow: 1,
            width: width - 64,
            marginBottom: 32,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 32, fontWeight: '800'}}>{details.title}</Text>
          <Text style={{fontSize: 24, fontWeight: '600'}}>
            {details.description}
          </Text>
          <Text style={{fontSize: 24, fontWeight: '600'}}>{details.id}</Text>
          <Text style={{fontSize: 24, fontWeight: '600'}}>
            {details.createdAt}
          </Text>
          <View style={{paddingTop: 32}} />
          <Button
            title="Usuń"
            onPress={() => {
              deletePostsRequest(id);
              navigation.goBack();
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default ComponentDetailsScreen;
