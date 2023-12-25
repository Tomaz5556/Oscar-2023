import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = await AsyncStorage.getItem('users');
    let usersData = jsonValue != null ? JSON.parse(jsonValue) : [];

    let userData: { [key: string]: any } = {};
    userData[key] = value;

    if (usersData.length >= 2) {
      let lastData = usersData[usersData.length - 1];
      let penultimateData = usersData[usersData.length - 2];

      let exists = Object.keys(lastData).some(k => k === key);
      let penultimateExists = Object.keys(penultimateData).some(k => k === key);

      if (exists) {
        lastData[key] = value;
      } else if (penultimateExists) {
        penultimateData[key] = value;
      } else {
        usersData.push(userData);
        console.log('Dados armazenados: ', usersData);
      }
    } else {
      usersData.push(userData);
    }

    await AsyncStorage.setItem('users', JSON.stringify(usersData));
  } catch (e) {
    console.log(e);
  }
}