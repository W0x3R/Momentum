import { greetingName } from "../../greetingStorage";
import { getStorageGreetingName } from "../../greetingStorage";

export const setGreetingNameLoad = () => greetingName.textContent = getStorageGreetingName()