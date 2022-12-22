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
    avatar: '',
    username: 'no name',
    followersAmount: 1,
  },
  {
    id: 5,
    avatar:
      'https://toplist.vn/images/800px/bai-van-ta-con-ga-trong-hay-nhat-209461.jpg',
    username: 'con gà gáy',
  },
  {
    id: 6,
    avatar:
      'https://img.bcdcnt.net/files/3f/47/14/3f4714b35f299ec2f6b529d9cca4e9f9.jpg',
    username: 'có con chim vành khuyên',
  },
  {
    id: 7,
    avatar:
      'https://ngonaz.com/wp-content/uploads/2022/08/con-than-lan-so-may-2.jpg',
    username: '2 con thằn lằn con',
  },
  {
    id: 8,
    avatar:
      'https://vcdn1-vnexpress.vnecdn.net/2021/11/04/251847737-3868210133437093-7517-1635998498.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=GMw6Yslappg281JoaEUicw',
    username: 'một con vịt',
  },
  {
    id: 9,
    avatar: '',
    username: 'con gà gáy',
  },
  {
    id: 10,
    avatar:
      'https://img.bcdcnt.net/files/3f/47/14/3f4714b35f299ec2f6b529d9cca4e9f9.jpg',
    username: 'có con chim vành khuyên',
  },
  {
    id: 11,
    avatar:
      'https://ngonaz.com/wp-content/uploads/2022/08/con-than-lan-so-may-2.jpg',
    username: '2 con thằn lằn con',
  },
  {
    id: 12,
    avatar:
      'https://vcdn1-vnexpress.vnecdn.net/2021/11/04/251847737-3868210133437093-7517-1635998498.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=GMw6Yslappg281JoaEUicw',
    username: 'một con vịt',
  },
  {
    id: 13,
    avatar: '',
    username: '2 con thằn lằn con',
  },
  {
    id: 14,
    avatar:
      'https://vcdn1-vnexpress.vnecdn.net/2021/11/04/251847737-3868210133437093-7517-1635998498.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=GMw6Yslappg281JoaEUicw',
    username: 'một con vịt',
  },
];

const Item = ({item}) => {
  return (
    <TouchableOpacity item={item} style={styles.container}>
      <Image style={styles.image} source={{uri: `${item.avatar}`}} />
      <View
        style={{height: 80, flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={styles.username}>{item.username}</Text>
        <Text
          style={
            item.followersAmount > 0
              ? styles.visibilityFollowers
              : styles.hiddenFollowers
          }>
          Follow by {item.followersAmount}
        </Text>
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
      contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
      ListHeaderComponent={
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.primaryText}>Friends Request</Text>
            <Image
              style={styles.iconSearch}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png',
              }}
            />
          </View>
          <View style={styles.viewBotton}>
            <TouchableOpacity style={styles.headerButton}>
              <Text style={{color: 'black', fontSize: 15}}>suggestion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Text style={{color: 'black', fontSize: 15}}>Your Friends</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      stickyHeaderIndices={[0]}
      ListEmptyComponent={
        <View
          style={{
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
          }}>
          <Text>Empty</Text>
        </View>
      }
    />
  );
};

export default FriendList;

const styles = StyleSheet.create({
  buttonWrapper: {
    width: width - 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 50,
    marginRight: 10,
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
  visibilityFollowers: {
    color: 'grey',
  },
  hiddenFollowers: {
    opacity: 0,
    height: 0,
  },
  primaryText: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: 5,
    marginBottom: 5,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  viewBotton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 280,
    padding: 10,
  },
  iconSearch: {
    width: 25,
    height: 25,
  },
  headerContainer: {
    height: 120,
    backgroundColor: 'red',
  },
  headerButton: {
    borderRadius: 50,
    backgroundColor: '#E4E3E8',
    width: 120,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//get cac phan tu cua byID vao allID
