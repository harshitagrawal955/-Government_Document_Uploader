import React from "react";
import { View, ScrollView } from "react-native";
import { Button, Appbar } from "react-native-paper";
import primaryColors from "../primaryColors";
import BigImage from "./BigImage.js";

export default function Onboarding({ navigation }) {
    return (
        <View>
            <Appbar.Header
                style={{ backgroundColor: primaryColors.headerColor }}
            >
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Select" />
            </Appbar.Header>

            <ScrollView
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    paddingHorizontal: 30,
                    paddingTop: 90,
                }}
            >
                <BigImage image="https://image.freepik.com/free-vector/image-upload-concept-landing-page_23-2148317961.jpg" />
                <Button
                    icon="check"
                    color={primaryColors.yellowColor2}
                    mode="contained"
                    onPress={() => navigation.navigate("See")}
                    labelStyle={{ fontSize: 16, color: "white" }}
                >
                    See Uploaded Documents
                </Button>
                <Button
                    icon="check"
                    color={primaryColors.yellowColor2}
                    mode="contained"
                    style={{ marginTop: 15, marginBottom: 15 }}
                    onPress={() => navigation.navigate("Upload")}
                    labelStyle={{ fontSize: 16, color: "white" }}
                >
                    Upload documents
                </Button>
                <Button
                    icon="check"
                    color={primaryColors.yellowColor2}
                    mode="contained"
                    onPress={() => navigation.navigate("Select")}
                    labelStyle={{ fontSize: 16, color: "white" }}
                >
                    Fill Application
                </Button>
            </ScrollView>
        </View>
    );
}
