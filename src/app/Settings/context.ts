import { createContext } from "react";

interface SettingsState {
  foo: string;
  bar: number;
}

export const SettingsContext = createContext<SettingsState>({
  foo: '1',
  bar: 10
});
