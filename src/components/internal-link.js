import React from "react"
import { Link } from "react-scroll"

const windowExists = () => typeof window != "undefined"

class InternalLink extends React.Component {
  state = {
    offset: -32,
  }

  componentDidMount() {
    this.setOffset()

    if (windowExists()) {
      window.addEventListener("resize", this.setOffset)
    }
  }

  componentWillUnmount() {
    if (windowExists()) {
      window.removeEventListener("resize", this.setOffset)
    }
  }

  setOffset = () => {
    if (windowExists()) {
      this.setState({ offset: window.innerWidth >= 1000 ? -20 : -62 })
    }
  }

  render() {
    const { to, children } = this.props
    return (
      <Link
        to={to}
        smooth={true}
        duration={500}
        offset={this.state.offset}
        spy
        hashSpy
      >
        {children}
      </Link>
    )
  }
}

export default InternalLink
