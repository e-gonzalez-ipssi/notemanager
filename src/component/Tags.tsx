import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

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
    const [openTags, setOpenTags] = useState(false)

    return (
        <TouchableOpacity
            onPress={() => setOpenTags((old) => !old)}
        >
            <View style={{ flexDirection: "row" }}>
                {tags.map((tag, index) => {
                    if (!openTags && index >= 3) {
                        return
                    }
                    return (
                        <Text
                            key={index}
                            style={{
                                backgroundColor: tagColor(index),
                                borderRadius: 4,
                                padding: 3,
                                marginRight: 4
                            }}
                        >
                            {tag}
                        </Text>
                    )
                })}
                {!openTags && tags.length > 3 && (
                    <Text
                        style={{
                            backgroundColor: "lightgrey",
                            borderRadius: 4,
                            padding: 3,
                            marginRight: 4
                        }}
                    >
                        +{tags.length - 3}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    )
}