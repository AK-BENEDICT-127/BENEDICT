import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FlatList} from 'react-native'

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <FlatList
       data={this.state.dataSource}
       renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            margin: 1
          }}>
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/564x/68/50/fd/6850fd234372fc37f000b320c548ecba.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/originals/eb/18/6d/eb186dacd9e16a74270ca7d092853aac.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/564x/68/50/fd/6850fd234372fc37f000b320c548ecba.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/originals/eb/18/6d/eb186dacd9e16a74270ca7d092853aac.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/564x/68/50/fd/6850fd234372fc37f000b320c548ecba.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/originals/eb/18/6d/eb186dacd9e16a74270ca7d092853aac.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/564x/68/50/fd/6850fd234372fc37f000b320c548ecba.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/originals/eb/18/6d/eb186dacd9e16a74270ca7d092853aac.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/564x/68/50/fd/6850fd234372fc37f000b320c548ecba.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/originals/eb/18/6d/eb186dacd9e16a74270ca7d092853aac.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/564x/68/50/fd/6850fd234372fc37f000b320c548ecba.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/originals/eb/18/6d/eb186dacd9e16a74270ca7d092853aac.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/564x/68/50/fd/6850fd234372fc37f000b320c548ecba.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/originals/eb/18/6d/eb186dacd9e16a74270ca7d092853aac.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/564x/68/50/fd/6850fd234372fc37f000b320c548ecba.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/originals/eb/18/6d/eb186dacd9e16a74270ca7d092853aac.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/564x/68/50/fd/6850fd234372fc37f000b320c548ecba.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/originals/eb/18/6d/eb186dacd9e16a74270ca7d092853aac.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/564x/68/50/fd/6850fd234372fc37f000b320c548ecba.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/originals/eb/18/6d/eb186dacd9e16a74270ca7d092853aac.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/564x/68/50/fd/6850fd234372fc37f000b320c548ecba.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/originals/eb/18/6d/eb186dacd9e16a74270ca7d092853aac.jpg'}},
          />
          <Image
            style={styles.imageThumbnail}
            source={{uri: 'https://i.pinimg.com/564x/68/50/fd/6850fd234372fc37f000b320c548ecba.jpg'}},
          />
        </View>
      )}
      //Setting the number of column
      numColumns={2}
    />
     
    </View>
  );
}


const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
});
