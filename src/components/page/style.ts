import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
export const s = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 16,
        color: colors.gray[100],
        flex: 1,
    },
})