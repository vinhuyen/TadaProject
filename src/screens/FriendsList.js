import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ConfirmButton from '../components/ConfirmButton';
import DeleteButton from '../components/DeleteButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DATA = [
  {
    id: 1,
    avatar:
      'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/299578663_1480996059043842_7836062583426641710_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=b72el6NaxIkAX9eiK2d&_nc_ht=scontent.fdad2-1.fna&oh=00_AfCQ12j1eb6Cs60cqJRBGyz0Kj0_yGyMTp5DKbNYtjCggQ&oe=63A6C1E3',
    username: 'Vinh Uyen',
    followersAmount: 15,
  },
  {
    id: 2,
    avatar:
      'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/299196306_1480996085710506_7206253772070476424_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6GAJJMuFRssAX_-CI3F&_nc_ht=scontent.fdad2-1.fna&oh=00_AfAHtDrqN9EQnnIguUlcU78KczVHnFxNhRRVUI4llM5iOw&oe=63A8523F',
    username: 'Uyen nhan cach 1',
    followersAmount: 0,
  },
  {
    id: 3,
    avatar:
      'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/299366293_1480996075710507_1200499193523250191_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=eBnXmiXBFqEAX_4QruV&_nc_ht=scontent.fdad1-3.fna&oh=00_AfA6Ms_cELBzOg0_4ND1RY7QbCCI3io6wwHzkiLvz2q8xg&oe=63A6E382',
    username: 'Dzinh Yennnn',
    followersAmount: 15,
  },
  {
    id: 4,
    avatar:
      'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/299660185_1480996055710509_3431310840572106157_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_mZjBfjYlfQAX_2Kz2E&_nc_ht=scontent.fdad2-1.fna&oh=00_AfAmon4PXo_cCxv8xqfZZiupyd1ZQ37TvZL_ctODpf5xpQ&oe=63A79DB5',
    username: 'Peekapoo Uyen',
    followersAmount: 0,
  },
];

const Item = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{uri: `${item.avatar}`}} />
      <View>
        <Text style={styles.username}>{item.username}</Text>

        <View style={styles.buttonWrapper}>
          <ConfirmButton />
          <DeleteButton />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const FriendList = () => {
  const renderItem = ({item}) => {
    return <Item item={item} />;
  };
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default FriendList;

const styles = StyleSheet.create({
  buttonWrapper: {
    width: width - 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 50,
    marginRight: 5,
  },
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  username: {
    fontWeight: '500',
    fontSize: 18,
    color: 'black',
  },
});
