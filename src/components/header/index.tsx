import { View, Text, Image, TouchableOpacity } from "react-native";
import { s } from "./style";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
export default function Header() {
  return (
    <View style={s.container}>
      <Image style={s.image} source={{uri: 'https://avatars.githubusercontent.com/u/193255351?s=400&u=fc9352baf3193df4491c0a07d9b8a40ea0a82e9f&v=4'}}/>
      <View style={s.user}>
        <Text style={s.name}>David Macêdo</Text>
        <Text style={s.email}>davidqix@live.com</Text>
        </View>
      <TouchableOpacity>
        <Feather name="more-horizontal" size={20} color={colors.gray[100]} />
      </TouchableOpacity>
    </View>
  );
}
