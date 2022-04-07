import React from "react";
import { View, FlatList, SafeAreaView, StatusBar, Text } from "react-native";
import { Appbar, FAB } from "react-native-paper";
import primaryColors from "../primaryColors";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Aadhaar Card",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "PAN Card",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Voter ID",
    },
];

const Item = ({ title }) => (
    <View>
        <Text
            style={{
                backgroundColor: "#d9ecf2",
                color: "#000",
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
                borderRadius: 7,
                fontSize: 15,
                fontWeight: "700",
            }}
        >
            {title}
        </Text>
    </View>
);

export default function SeeDocuments({ navigation }) {
    const renderItem = ({ item }) => <Item title={item.title} />;
    return (
        <View>
            <Appbar.Header style={{ backgroundColor: primaryColors.redColor }}>
                <Appbar.BackAction onPress={() => navigation.pop()} />
                <Appbar.Content title="List of Uploaded Documents" />
            </Appbar.Header>
            <SafeAreaView
                style={{
                    backgroundColor: "white",
                    height: "100%",
                    paddingHorizontal: 5,
                    paddingTop: 20,
                }}
            >
                <View>
                    <SafeAreaView
                        style={{
                            marginTop: StatusBar.currentHeight || 0,
                            marginBottom: 100,
                        }}
                    >
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                        />
                    </SafeAreaView>
                    <FAB
                        style={{
                            position: "absolute",
                            margin: 16,
                            right: 20,
                            bottom: 0,
                        }}
                        icon="plus"
                        onPress={() => navigation.navigate("Upload")}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
}
