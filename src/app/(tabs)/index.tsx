import { View, ScrollView } from "react-native";
import  {DATA}  from "@/utils/data";
import { colors } from "@/styles/colors";
import Header from "@/components/header";
import  PageList  from "@/components/page-list";
import RecentList from "@/components/recent-list";

export default function Index() {
  return (
    <View style={{ flex: 1, paddingTop: 32, backgroundColor: colors.gray[800] }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecentList data={DATA.RECENT} />
        <PageList data={DATA.PAGES} />
      </ScrollView>
    </View>
  );
}
