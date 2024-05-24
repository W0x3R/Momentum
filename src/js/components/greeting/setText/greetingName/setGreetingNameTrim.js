import { greetingName } from "../../localStorageGreeting";

export const setGreetingNameTrim = () => greetingName.textContent = (greetingName.textContent).trim()