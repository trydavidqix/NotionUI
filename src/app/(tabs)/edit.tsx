import { View, Text } from "react-native";
import { colors } from "@/styles/colors";
export default function Edit() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.gray[800],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.white }}>Edit Screen</Text>
    </View>
  );
}
