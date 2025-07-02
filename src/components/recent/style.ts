import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
export const s = StyleSheet.create({
    container: {
        height: 134,
        width: 134,
        borderRadius: 10,
        backgroundColor: colors.gray[700],
        overflow: "hidden",
    },
    cover: {
        width: "100%",
        height: "50%",
        backgroundColor: colors.gray[600],
    },
    title: {
        color: colors.gray[100],
        fontSize: 16,
        marginLeft: 10,
        marginTop: 10,
    },
    icon:{
        position: "absolute",
        left: 7,
        top: -16,
    },
    content: {
        padding: 12,
        flex: 1,
        justifyContent: "space-between",
    },
})