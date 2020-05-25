/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react"
import { Link } from "gatsby"
import onClickOutside from "react-onclickoutside"

import ExternalLink from "./external-link"

const availableLanguages = ["en", "es"]

const windowExists = () => typeof window != "undefined"

const defaultLanguage = "en"

// credit: https://gist.github.com/leipert/9586b796281faa5e27ed
const getLanguage = () => {
  if (!windowExists()) return defaultLanguage
  return (
    [
      ...(window.navigator.languages || []),
      window.navigator.language,
      window.navigator.browserLanguage,
      window.navigator.userLanguage,
      window.navigator.systemLanguage,
    ]
      .filter(Boolean)
      .map(language => language.substr(0, 2))
      .find(language => availableLanguages.includes(language)) ||
    defaultLanguage
  )
}
const getPlatformPage = () => {
  const language = getLanguage()
  switch (language) {
    case "es":
      return "/platform-es/"
    default:
      return "/platform/"
  }
}

class MenuLinks extends React.Component {
  state = {
    submenuHover: false,
    submenuVisible: false,
  }

  setSubmenuHover = isHovered => {
    this.setState({ submenuHover: isHovered })
  }

  toggleSubmenuVisible = () => {
    this.setState(prevState => ({ submenuVisible: !prevState.submenuVisible }))
  }

  handleClickOutside = evt => {
    this.setState({ submenuVisible: false })
  }

  render() {
    return (
      <ul>
        <li>
          <Link to="/">2020 Steering Committee Candidates</Link>
        </li>
        <li>
          <Link to={getPlatformPage()}>2020 Platform</Link>
        </li>
        <li>
          <ExternalLink href="https://breadandrosesdsa.org/">
            National Caucus
          </ExternalLink>
        </li>
      </ul>
    )
  }
}

export default onClickOutside(MenuLinks)
