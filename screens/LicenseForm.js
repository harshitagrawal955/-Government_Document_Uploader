import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import {
    Appbar,
    HelperText,
    Button,
    Menu,
    Divider,
    Checkbox,
} from "react-native-paper";
import primaryColors from "../primaryColors";

export default function LicenseForm({ navigation }) {
    const [text, setText] = useState("");
    const onChangeText = (text) => {
        setText(text);
        setShow(false);
    };
    const [show, setShow] = useState(false);
    const hasErrors = () => {
        if (text.length == 0) {
            setShow(true);
        }
    };

    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const [visible2, setVisible2] = React.useState(false);
    const openMenu2 = () => setVisible2(true);
    const closeMenu2 = () => setVisible2(false);

    const [visible3, setVisible3] = React.useState(false);
    const openMenu3 = () => setVisible3(true);
    const closeMenu3 = () => setVisible3(false);

    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    const [residenceText, setResidenceText] = useState(
        "Select Residence Proof"
    );
    const [ageText, setAgeText] = useState("Select Age Proof");
    return (
        <ScrollView
            style={{
                backgroundColor: "white",
            }}
        >
            <Appbar.Header
                style={{ backgroundColor: primaryColors.headerColor }}
            >
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="License Form" />
            </Appbar.Header>
            <View
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    paddingHorizontal: 30,
                    paddingTop: 60,
                }}
            >
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Button
                            style={{
                                width: "100%",
                                paddingTop: 8,
                                marginTop: 5,
                                height: 55,
                            }}
                            mode="outlined"
                            color={primaryColors.orangeColor}
                            onPress={openMenu}
                            icon="chevron-down"
                            labelStyle={{
                                fontSize: 30,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                }}
                            >
                                {residenceText}
                            </Text>
                        </Button>
                    }
                >
                    <Menu.Item
                        onPress={() => {
                            setResidenceText("Ration Card");
                            closeMenu();
                        }}
                        title="Ration Card"
                    />
                    <Divider />
                    <Menu.Item
                        onPress={() => {
                            setResidenceText("Voter's ID");
                            closeMenu();
                        }}
                        title="Voter's ID"
                    />
                    <Divider />
                    <Menu.Item
                        onPress={() => {
                            setResidenceText("Passport");
                            closeMenu();
                        }}
                        title="Passport"
                    />
                </Menu>
                <HelperText
                    type="error"
                    visible={show}
                    style={{ marginBottom: 9, marginTop: -6, marginLeft: -8 }}
                >
                    You have not uploaded this document. Please go back to
                    upload using upload documents.
                </HelperText>
                <Menu
                    visible={visible2}
                    onDismiss={closeMenu2}
                    anchor={
                        <Button
                            style={{
                                width: "100%",
                                paddingTop: 8,
                                marginTop: 5,
                                height: 55,
                            }}
                            mode="outlined"
                            color={primaryColors.orangeColor}
                            onPress={openMenu2}
                            icon="chevron-down"
                            labelStyle={{
                                fontSize: 30,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                }}
                            >
                                {ageText}
                            </Text>
                        </Button>
                    }
                >
                    <Menu.Item
                        onPress={() => {
                            setAgeText("Educational Certificate");
                            closeMenu2();
                        }}
                        title="Educational Certificate"
                    />
                    <Divider />
                    <Menu.Item
                        onPress={() => {
                            setAgeText("Birth Certificate");
                            closeMenu2();
                        }}
                        title="Birth Certificate"
                    />
                    <Divider />
                    <Menu.Item
                        onPress={() => {
                            setAgeText("10th Class Marksheet");
                            closeMenu2();
                        }}
                        title="10th class Marksheet"
                    />
                </Menu>
                <HelperText
                    type="error"
                    visible={show}
                    style={{ marginBottom: 9, marginTop: -6, marginLeft: -8 }}
                >
                    You have not uploaded this document. Please go back to
                    upload using upload documents.
                </HelperText>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 7,
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Checkbox
                            status={checked ? "checked" : "unchecked"}
                            color={primaryColors.orangeColor}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                    </View>
                    <View style={{ flex: 7 }}>
                        <Text>
                            I have uploaded my learner's driving license.
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 10,
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Checkbox
                            status={checked2 ? "checked" : "unchecked"}
                            color={primaryColors.orangeColor}
                            onPress={() => {
                                setChecked2(!checked2);
                            }}
                        />
                    </View>
                    <View style={{ flex: 7 }}>
                        <Text>I have uploaded my PAN Card.</Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 35,
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Checkbox
                            status={checked3 ? "checked" : "unchecked"}
                            color={primaryColors.orangeColor}
                            onPress={() => {
                                setChecked3(!checked3);
                            }}
                        />
                    </View>
                    <View style={{ flex: 7 }}>
                        <Text>
                            I herby declare that all the documents uploaded by
                            me are correct.
                        </Text>
                    </View>
                </View>
                <Button
                    icon="check"
                    color={primaryColors.orangeColor}
                    mode="contained"
                    onPress={() => navigation.navigate("Successful")}
                    labelStyle={{ fontSize: 16, color: "white" }}
                >
                    Confirm
                </Button>
            </View>
        </ScrollView>
    );
}
