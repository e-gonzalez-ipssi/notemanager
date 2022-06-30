import React from "react";
import { View, Text } from "react-native";

function tagColor(id: number) {
    switch (id % 6) {
        case (0): return "yellow"
        case (1): return "orange"
        case (2): return "red"
        case (3): return "violet"
        case (4): return "cyan"
        case (5): return "green"
    }
}

export default function Tags({ tags = [] }: { tags: string[] }) {

    return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {tags.map((tag, index) => {
                return (
                    <Text
                        key={index}
                        style={{
                            backgroundColor: tagColor(index),
                            borderRadius: 4,
                            padding: 3,
                            marginRight: 4,
                            marginBottom: 2,
                            marginTop: 2,
                            maxWidth: "32%",
                            overflow: "visible",
                        }}
                        numberOfLines={1}
                    >
                        {tag}
                    </Text>
                )
            })}
        </View>
    )
}