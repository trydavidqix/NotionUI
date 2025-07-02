import { View, Text } from "react-native";
import { colors } from "@/styles/colors";
export default function Notifications() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.gray[800],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.white }}>Notifications Screen</Text>
    </View>
  );
}
