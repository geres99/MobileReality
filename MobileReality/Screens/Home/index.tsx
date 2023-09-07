import {useNavigation} from '@react-navigation/native';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import Button from '../../Components/Button';

const {width} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          paddingHorizontal: 32,
        }}>
        <Text style={{fontSize: 32, fontWeight: 800}}>Kilka słow o nas</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: 'blue',
            paddingBottom: 32,
          }}>
          Czyli kim jesteśmy i dokąd zmierzamy
        </Text>
        <Text style={{paddingBottom: 32}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet dolor quis justo pellentesque semper. Etiam fringilla laoreet
          auctor. Donec ipsum ligula, tincidunt non posuere non, gravida non
          dui. Suspendisse mi nunc, laoreet non nulla ac, vulputate dignissim
          ex. Praesent rutrum magna massa, eget pellentesque nisl ultrices
          venenatis. Donec lacinia, ante eget sollicitudin lacinia, odio quam
          venenatis nibh, sed volutpat lorem nisi at libero. Proin ultricies,
          ante sed gravida lacinia, mi nisl feugiat eros, ut ultrices risus
          nulla sit amet nisl. Ut quis lectus accumsan est consequat vehicula
          sit amet in enim. Curabitur ut imperdiet lectus. Nunc tempus
          vestibulum orci, in lobortis lorem blandit at. Integer pulvinar, ipsum
          sed scelerisque auctor, mauris risus interdum lectus, quis eleifend
          enim tellus non odio. Cras euismod, nisl et maximus dignissim, lorem
          nisl venenatis nisl, id hendrerit mauris erat non velit. Duis eu
          vulputate lorem, vel scelerisque lacus. Vestibulum sed nisi neque.
          Mauris aliquet dictum diam eget vestibulum. Nulla malesuada dictum
          metus eu tempus.
        </Text>
        <Button
          title="Zobacz więcej"
          onPress={() => navigation.navigate('details')}
        />
        <Image
          style={{width: width, height: width, marginTop: 32}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          paddingTop: 32,
          backgroundColor: 'white',
          alignItems: 'center',
          paddingHorizontal: 32,
        }}>
        <Text style={{fontSize: 32, fontWeight: 800}}>Kilka słow o nas</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: 'blue',
            paddingBottom: 32,
          }}>
          Czyli kim jesteśmy i dokąd zmierzamy
        </Text>
        <Text style={{paddingBottom: 32}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet dolor quis justo pellentesque semper. Etiam fringilla laoreet
          auctor. Donec ipsum ligula, tincidunt non posuere non, gravida non
          dui. Suspendisse mi nunc, laoreet non nulla ac, vulputate dignissim
          ex. Praesent rutrum magna massa, eget pellentesque nisl ultrices
          venenatis. Donec lacinia, ante eget sollicitudin lacinia, odio quam
          venenatis nibh, sed volutpat lorem nisi at libero. Proin ultricies,
          ante sed gravida lacinia, mi nisl feugiat eros, ut ultrices risus
          nulla sit amet nisl. Ut quis lectus accumsan est consequat vehicula
          sit amet in enim. Curabitur ut imperdiet lectus. Nunc tempus
          vestibulum orci, in lobortis lorem blandit at. Integer pulvinar, ipsum
          sed scelerisque auctor, mauris risus interdum lectus, quis eleifend
          enim tellus non odio. Cras euismod, nisl et maximus dignissim, lorem
          nisl venenatis nisl, id hendrerit mauris erat non velit. Duis eu
          vulputate lorem, vel scelerisque lacus. Vestibulum sed nisi neque.
          Mauris aliquet dictum diam eget vestibulum. Nulla malesuada dictum
          metus eu tempus.
        </Text>
        <Button
          title="Zobacz więcej"
          onPress={() => navigation.navigate('details')}
        />
        <Image
          style={{width: width, height: width, marginTop: 32}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
