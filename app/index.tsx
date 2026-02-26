import { View, Text, StyleSheet } from "react-native";
import { useHomeViewModel } from "./home.vm";
import { ShelfButton } from "./ShelfButton";

export default function HomeScreen() {
  const vm = useHomeViewModel();

  return(
    <View style={styles.page}>
        <View style={styles.header}>
          <View style={styles.brand}>
           <View style={styles.logoCircle}/>
           <Text style={styles.brandText}>MindShelf</Text>
          </View>

        <View style={styles.avatarCircle}/>
      </View>
      <View style={styles.content}>
            <Text style={styles.greetingTitle}>Welcome back, {vm.userName}</Text>
            <Text style={styles.greetingSubtitle}>What are you building today?</Text>
            <View style={styles.search}>
              <Text style={styles.searchPlaceHolder}>Search</Text>
            </View>
            <Text style={styles.sectionTitle}>Recently Edited</Text>
            <View style={styles.recentRow}>
              <View style={styles.bigAddButton}>
                <Text style={{color: "#fff", fontSize: 30, marginTop: -2}}>+</Text>
              </View>

              <View style={styles.recentCards}>
                <View style={styles.recentCard}/>
                <View style={styles.recentCard}/>
              </View>
            </View>
            <Text style={styles.sectionTitle}>Your Shelves</Text>
            <View style={styles.shelfGrid}>
              {vm.shelves.map((shelf) => (
                <ShelfButton 
                key={shelf.id} 
                title={shelf.title}
                color={shelf.color}
                icon={shelf.icon}/>
              ))}
            </View>
          </View>

    </View>
  );

}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
      height: 110,
      backgroundColor: "#1f2a37",
      paddingHorizontal: 20,
      paddingTop: 48,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
  },

  brand: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#111827",
    marginRight: 10,
  },

  brandText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
  },

  avatarCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  greetingTitle: {
    fontSize: 22,
    fontFamily: "Inter_700Bold",
  },

  greetingSubtitle: {
    marginTop: 2,
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
  },

  search: {
    marginTop: 35,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.06)",
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  searchPlaceHolder: {
    opacity: 0.45,
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },

  sectionTitle: {
    marginTop: 35,
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    opacity: 0.8,
  },

  recentRow: {
    marginTop: 12,
    flexDirection: "row",
  },

  bigAddButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1F2A37",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,

    // shadow
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 8},
    elevation: 4,
  },

  recentCards: {
    flex: 1,
    justifyContent: "space-between",
  },

  recentCard: {
    height: 28,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0.08)",
  },

  shelfGrid: {
    marginTop: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },  

});
