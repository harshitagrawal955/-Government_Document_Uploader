import React from "react";
import { View, ScrollView } from "react-native";
import { RadioButton, Text, Appbar, Button } from "react-native-paper";
import primaryColors from "../primaryColors";
import BigImage from "./BigImage.js";

export default function ChooseScreen({ navigation }) {
    const [value, setValue] = React.useState("PassportForm");
    return (
        <View>
            <Appbar.Header
                style={{ backgroundColor: primaryColors.headerColor }}
            >
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="Select Application" />
            </Appbar.Header>
            <ScrollView
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    paddingHorizontal: 30,
                    marginBottom: "5%",
                    paddingTop: 20,
                }}
            >
                <BigImage image="https://image.freepik.com/free-vector/copywriting-social-media-post-content-marketing-internet-commercial-cartoon-character-writing-text-advertising-promotional-strategy_335657-356.jpg" />
                <RadioButton.Group
                    onValueChange={(value) => setValue(value)}
                    value={value}
                >
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="PassportForm"
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
                                Apply for Passport
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={{ flex: 1 }}>
                            <RadioButton
                                value="LicenseForm"
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
                                Apply for Driver's License
                            </Text>
                        </View>
                    </View>
                </RadioButton.Group>
                <View style={{ paddingTop: 30 }}>
                    <Button
                        icon="check"
                        color={primaryColors.orangeColor}
                        mode="contained"
                        onPress={() => navigation.navigate(value)}
                        labelStyle={{ fontSize: 16, color: "white" }}
                        style={{
                            marginBottom: "5%",
                        }}
                    >
                        Select
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
}
