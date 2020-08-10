import React from "react";
import { View, Text } from "react-native";

function BlogPost(props) {

    const createdAtFormatted = props.createdAt.toLocaleString();

    return (
        <View>
            <Text>{props.text}</Text>
            <Text>{createdAtFormatted}</Text>
        </View>
    )

}

export default BlogPost;