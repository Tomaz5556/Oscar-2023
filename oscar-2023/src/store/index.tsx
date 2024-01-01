import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = await AsyncStorage.getItem('users');
    let usersData = jsonValue != null ? JSON.parse(jsonValue) : [];

    let userData: { [key: string]: any } = {};
    userData[key] = value;

    if (usersData.length === 0 || Object.keys(usersData[usersData.length - 1]).length === 4) {
      let newUser: { [key: string]: any } = {};
      newUser[key] = value;
      usersData.push(newUser);
    } else {
      let lastUser = usersData[usersData.length - 1];
      if (!lastUser.hasOwnProperty(key)) {
        lastUser[key] = value;
      } else {
        lastUser[key] = value;
      }
    }

    console.log('Dados armazenados: ', usersData);
    await AsyncStorage.setItem('users', JSON.stringify(usersData));
  } catch (e) {
    console.log(e);
  }
}