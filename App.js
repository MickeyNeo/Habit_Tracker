import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { MainTabNavigator } from "./navigation/navigationTab";
import { StoreProvider } from "./Store"


// load DB for expo

const Main = () => {
   

/*    const importDb = async () => {
      let result = await DocumentPicker.getDocumentAsync({
        copyToCacheDirectory: true
      });
  
      if (result.type === 'success') {
        setIsLoading(true);
        
        if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
          await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
        }
  
        const base64 = await FileSystem.readAsStringAsync(
          result.uri,
          {
            encoding: FileSystem.EncodingType.Base64
          }
        );
  
        await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'SQLite/example.db', base64, { encoding: FileSystem.EncodingType.Base64 });
        await db.closeAsync();
        setDb(SQLite.openDatabase('example.db'));
      }
    }; */


   return (

   <StoreProvider>
      <NavigationContainer>
         <MainTabNavigator/>
      </NavigationContainer>
   </StoreProvider>


   ); 
};
export default Main;
