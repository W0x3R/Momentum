import { greetingName } from "../../localStorageGreeting";
import { getStorageGreetingName } from "../../localStorageGreeting";

export const setGreetingNameLoad = () => greetingName.textContent = getStorageGreetingName()