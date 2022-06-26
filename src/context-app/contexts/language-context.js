import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { language: "spanish" };
  }

  changeLanguage = (ev) => {
    this.setState({ language: ev.target.value });
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export const withLanguageContext = (Component) => (props) => {
  return (
    <LanguageContext.Consumer>
      {(value) => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
  );
};
