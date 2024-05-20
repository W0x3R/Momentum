import { greetingName } from "../localStorageGreeting";
import { getStorageGreetingName } from "../localStorageGreeting";

export const setGreetingName = () => greetingName.textContent = getStorageGreetingName()