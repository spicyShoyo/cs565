import { AsyncStorage } from 'react-native'
import { v4 } from 'uuid';

/**
 * Store the JSON
 * @param {!jsonObj} Object An array of boolean
 * @return -1 if error else 0
 */
export async function store(jsonObj) {
  key = v4();
  jsonObj.key = key;
  val = JSON.stringify(jsonObj);
  try {
    await AsyncStorage.setItem(key, JSON.stringify(jsonObj));
  } catch (error) {
    console.log(error);
    console.log("Error saving data");
    return -1;
  }
  return 0;
}

/**
 * Remove the data by key
 * @param {!key} Object The key
 * @return -1 if error else 0
 */
export async function remove(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("Error removing data");
    return -1;
  }
  return 0;
}

/**
 * Get all keys
 * @return A list of keys
 */
export async function getAll() {
  let allKeys = await AsyncStorage.getAllKeys();
  let res = [];
  for (let i = 0; i < allKeys.length; i++) {
    let key = allKeys[i];
    let val = await AsyncStorage.getItem(key);
    if (val !== null) {
      res.push(JSON.parse(val));
    }
  }
  res.sort(function(a,b){return Date.parse(b.quizDate) - Date.parse(a.quizDate)});
  return res;
}

/**
 * Clear all saved data
 * @return -1 if error else 0
 */
export async function clearAll() {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log("Error clear all data");
    return -1
  }
  return 0;
}