import React from "react"
import { Link } from "gatsby"
import { Layout as AntLayout } from "antd"
import classNames from "classnames"

import "./language-bar.scss"

const changeLanguageCopy = language => {
  switch (language) {
    case "spanish":
      return "Cambiar de idioma"
    default:
      return "Switch language"
  }
}

const LanguageBar = ({ english, spanish, activeLanguage = "english" }) => (
  <AntLayout.Content className="language-bar">
    <p>{`${changeLanguageCopy(activeLanguage)}:`}</p>
    <div className="languages">
      <Link
        to={english}
        className={classNames({ "is-active": activeLanguage === "english" })}
      >
        English
      </Link>
      <Link
        to={spanish}
        className={classNames({ "is-active": activeLanguage === "spanish" })}
      >
        Español
      </Link>
    </div>
  </AntLayout.Content>
)

export default LanguageBar
