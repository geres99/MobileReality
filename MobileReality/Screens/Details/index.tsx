import {useEffect, useState} from 'react';
import {getPostsRequest, PostType} from '../../api/requests/getPosts';
import {View, FlatList, Text, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const DetailsScreen = () => {
  const [list, setList] = useState<PostType[]>([]);
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
        renderItem={({item}) => (
          <View style={{flexDirection: 'row'}}>
            <View style={{flexGrow: 1, width: width - 64}}>
              <Text style={{fontSize: 16, fontWeight: 800}}>{item.title}</Text>
              <Text style={{fontSize: 12, fontWeight: 600}}>
                {item.description}
              </Text>
              <Text style={{fontSize: 12, fontWeight: 600}}>{item.id}</Text>
              <Text style={{fontSize: 12, fontWeight: 600}}>
                {item.createdAt}
              </Text>
            </View>
            <View style={{flexGrow: 1}} />
          </View>
        )}
      />
    </View>
  );
};

export default DetailsScreen;
