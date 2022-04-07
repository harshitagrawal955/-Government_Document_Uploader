import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import primaryColors from "../primaryColors";
import BigImage from "./BigImage.js";

export default function Register({ navigation }) {
    const [text, setText] = useState("");
    return (
        <ScrollView
            style={{
                backgroundColor: "white",
            }}
        >
            <Appbar.Header style={{ backgroundColor: primaryColors.blueColor }}>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Register" />
            </Appbar.Header>
            <View
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    paddingHorizontal: 30,
                    paddingTop: 10,
                }}
            >
                <BigImage image="https://image.freepik.com/free-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg" />
                <TextInput
                    mode="outlined"
                    label="Name"
                    // value={text}
                    placeholder={"John Doe"}
                    theme={{
                        colors: {
                            primary: primaryColors.blueColor,
                            placeholder: primaryColors.blueColor,
                        },
                    }}
                    style={{
                        marginHorizontal: 10,
                        height: 55,
                        marginVertical: 20,
                    }}
                    // onChangeText={onChangeText}
                />
                <TextInput
                    mode="outlined"
                    label="Password"
                    secureTextEntry={true}
                    // value={text}
                    theme={{
                        colors: {
                            primary: primaryColors.blueColor,
                            placeholder: primaryColors.blueColor,
                        },
                    }}
                    style={{
                        marginHorizontal: 10,
                        height: 55,
                        marginBottom: 30,
                    }}
                    // onChangeText={onChangeText}
                />
                <Button
                    icon="check"
                    color={primaryColors.blueColor}
                    mode="contained"
                    onPress={() => navigation.navigate("Onboarding")}
                    labelStyle={{ fontSize: 16, color: "white" }}
                >
                    Confirm
                </Button>
            </View>
        </ScrollView>
    );
}
