import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div
        className="book-list"
        style={{ background: theme.syntax, color: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Empire Noir</li>
          <li style={{ background: theme.ui }}>Giselle</li>
          <li style={{ background: theme.ui }}>Million KIsses</li>
          <li style={{ background: theme.ui }}>Somewhere Elevated</li>
        </ul>
      </div>
    );
  }
}
