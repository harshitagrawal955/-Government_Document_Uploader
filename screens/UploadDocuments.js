import React from "react";
import { View, ScrollView } from "react-native";
import { RadioButton, Text, Appbar, Button } from "react-native-paper";
import * as DocumentPicker from "expo-document-picker";
import primaryColors from "../primaryColors";
import BigImage from "./BigImage.js";

export default function UploadDocuments({ navigation }) {
    const [value, setValue] = React.useState("first");
    const [doc, setDoc] = React.useState(undefined);
    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        setDoc(result);
        console.log(result);
        handleDocUpload(result);
    };

    handleDocUpload = async (result) => {
        try {
            const apiUrl =
                "https://eerie-caverns-14248.herokuapp.com/upload/aadhaar";
            const uri = result.uri;
            const uriParts = uri.split(".");
            const fileType = uriParts[uriParts.length - 1];
            const formData = new FormData();
            formData.append("photo", {
                uri,
                name: `photo.${fileType}`,
                type: `image/${fileType}`,
            });
            const options = {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                },
            };
            const response = await fetch(apiUrl, options);
            console.log("response" + JSON.stringify(response));
            if (!response.ok) {
                alert("Failed to upload ");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: primaryColors.redColor }}>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Choose a document to upload" />
            </Appbar.Header>
            <ScrollView
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    paddingHorizontal: 30,
                    paddingTop: 20,
                }}
            >
                <BigImage image="https://image.freepik.com/free-vector/upload-concept-illustration_114360-1205.jpg" />
                <RadioButton.Group
                    onValueChange={(value) => setValue(value)}
                    value={value}
                >
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="first"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                Passport
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="second"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                Aadhaar
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="third"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                PAN Card
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="fourth"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                Driver's License
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="fifth"
                                color={primaryColors.headerColor}
                            />
                        </View>
                        <View style={{ flex: 7 }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: primaryColors.headerColor,
                                    fontWeight: "700",
                                }}
                            >
                                Voter ID Card
                            </Text>
                        </View>
                    </View>
                </RadioButton.Group>
                <View style={{ paddingTop: 30 }}>
                    <Button
                        icon="check"
                        color={primaryColors.crimsonRedColor}
                        mode="contained"
                        onPress={this._pickDocument}
                        labelStyle={{ fontSize: 16, color: "white" }}
                        style={{
                            marginBottom: "5%",
                        }}
                    >
                        Upload an existing document
                    </Button>
                    <Button
                        icon="check"
                        color={primaryColors.crimsonRedColor}
                        mode="contained"
                        onPress={() => navigation.navigate("Scan")}
                        labelStyle={{ fontSize: 16, color: "white" }}
                        style={{
                            marginBottom: "5%",
                        }}
                    >
                        Scan a new document
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
}
