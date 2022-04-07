import React from "react";
import { View, Image } from "react-native";

export default function BigImage({ size = 350, image }) {
    return (
        <View>
            <Image
                width={size}
                height={size}
                style={{
                    width: size,
                    height: size,
                    borderRadius: 7,
                    alignSelf: "center",
                    marginVertical: 20,
                }}
                source={{ uri: image }}
            />
        </View>
    );
}
