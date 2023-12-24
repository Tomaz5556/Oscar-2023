import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = await AsyncStorage.getItem('users');
    let usersData = jsonValue != null ? JSON.parse(jsonValue) : [];
    let userData: { [key: string]: any } = {};
    userData[key] = value;
    usersData.push(userData);
    await AsyncStorage.setItem('users', JSON.stringify(usersData));
    console.log('Dados armazenados: ', usersData);
  } catch (e) {
    console.log(e);
  }
}

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('users');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch(e) {
    console.log(e);
  }
}