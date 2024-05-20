import { greetingName } from "../localStorageGreeting"

export const trimGreetingName = () => greetingName.textContent = (greetingName.textContent).trim()