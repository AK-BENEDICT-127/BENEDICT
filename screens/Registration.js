import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Registration(params) {
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
      <Text> Welcome to Sneakers and Shirts </Text>
      <Text> Register </Text>
      {<View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter Full Name"
        />
      </View>}
      {<View style={{styles.input}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Age"
        />
      </View>}
      {<View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Number"
        />
      </View>}
      {<View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
            textContentType: password,
          }}
          placeholder="Password"
        />
      </View>}
      {<View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
            textContentType: password,
          }}
          placeholder="Confirm Password"
        />
      </View>}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <GoogleOutlined />
        <Text style={{ paddingLeft: 10, color: "white" }}>Register</Text>
      </TouchableOpacity>
       <Text style={{ paddingLeft: 10, color: "white" }}
        onPress={() => {
          navigation.navigate("Login");
        }}>
          Already have an account? Click here.
      </Text>
    </View>
  );
}
