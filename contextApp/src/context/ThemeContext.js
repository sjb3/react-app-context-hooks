import React, { Component, createContext } from "react";
export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      syntaxt: "#555",
      ui: "#D5D717",
      bg: "#333"
    },
    dark: {
      syntaxt: "#F2F3F4",
      ui: "#999",
      bg: "#F2F3F4"
    }
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
