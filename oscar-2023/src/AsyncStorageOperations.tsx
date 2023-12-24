import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: any) => {
    try {
      const existingData = await getData(key);
      let newData = [];
      if (existingData) {
        newData = [...existingData, value];
      } else {
        newData = [value];
      }
      const jsonValue = JSON.stringify(newData);
      await AsyncStorage.setItem(key, jsonValue);
      console.log('Dados armazenados: ', newData);
    } catch (e) {
      // saving error
      console.log(e);
    }
}
   

export const getData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      if (jsonValue != null) {
        console.log('Dados recuperados: ', JSON.parse(jsonValue));
        return JSON.parse(jsonValue);
      }
      return null;
    } catch(e) {
      // error reading value
      console.log(e);
    }
  }   