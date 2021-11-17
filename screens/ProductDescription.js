import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Dimensions } from 'react-native';

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> Product Description </Text>
      
      <Card
        style={{ 
               width: Dimensions.get('window').width,
               height: Dimensions.get('window').height 
        }}
        cover={
          <img
            src="https://i.pinimg.com/564x/68/50/fd/6850fd234372fc37f000b320c548ecba.jpg"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="Price: 200 Cedis"
          description="This product is now the trend"
        />
      </Card>,
    </View>
  );
}
