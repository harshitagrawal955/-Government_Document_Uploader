import React from "react";
import { View, ScrollView } from "react-native";
import BigImage from "./BigImage.js";
import { Button, Title, Subheading } from "react-native-paper";
import primaryColors from "../primaryColors";

export default function Successful({ navigation }) {
    return (
        <ScrollView
            style={{
                backgroundColor: "white",
            }}
        >
            <View
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    paddingHorizontal: 30,
                    paddingTop: 60,
                    marginVertical: "30%",
                }}
            >
                <BigImage image="https://image.freepik.com/free-vector/message-bubble-notifications-with-check-marks-mobile-phone_212005-36.jpg" />
                <Subheading
                    style={{
                        fontSize: 14,
                        textAlign: "center",
                        color: primaryColors.subheadingColor,
                        lineHeight: 20,
                        marginVertical: 20,
                    }}
                >
                    You have successfully completed your application!
                </Subheading>
                <Button
                    icon="check"
                    color={primaryColors.greenColor}
                    mode="contained"
                    onPress={() => navigation.navigate("Onboarding")}
                    labelStyle={{ fontSize: 16, color: "white" }}
                    style={{
                        marginBottom: "5%",
                    }}
                >
                    Back to Home
                </Button>
            </View>
        </ScrollView>
    );
}
