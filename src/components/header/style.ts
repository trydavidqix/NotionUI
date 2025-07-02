import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.gray[400],
    },
    image: {
        width: 40,
        height: 42,
        borderRadius: 16,
    },
    user:{
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.gray[100],
    },
    email: {
        fontSize: 14,
        color: colors.gray[300],
    },
    
})