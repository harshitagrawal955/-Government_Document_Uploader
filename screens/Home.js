import React from "react";
import { View } from "react-native";
import { Title, Subheading, Button } from "react-native-paper";
import primaryColors from "../primaryColors";
import BigImage from "./BigImage.js";

export default function Home({ navigation }) {
    return (
        <View
            style={{
                backgroundColor: "white",
                height: "100%",
                paddingHorizontal: 30,
                paddingTop: 90,
            }}
        >
            <Title
                style={{
                    fontSize: 21,
                    textAlign: "center",
                }}
            >
                Welcome to Government Document Scanner and Uploader!
            </Title>
            <Subheading
                style={{
                    fontSize: 14,
                    textAlign: "center",
                    color: primaryColors.subheadingColor,
                    lineHeight: 20,
                }}
            >
                Uploading Documents and Applying is now super easy!
            </Subheading>
            <BigImage image="https://image.freepik.com/free-vector/landing-page-image-upload-concept_52683-26424.jpg" />
            <Button
                icon="check"
                color={primaryColors.blueColor}
                mode="contained"
                style={{
                    marginVertical: 20,
                }}
                onPress={() => navigation.navigate("Login")}
                labelStyle={{ fontSize: 16, color: "white" }}
            >
                Login
            </Button>
            <Button
                icon="check"
                color={primaryColors.blueColor}
                mode="contained"
                onPress={() => navigation.navigate("Register")}
                labelStyle={{ fontSize: 16, color: "white" }}
            >
                Register
            </Button>
        </View>
    );
}
