import React from "react"
import { Button } from "antd"

const url = "https://forms.gle/M6vVT4JQTJQcr7Tf8"

export const Join = () => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    Join Bread &amp; Roses
  </a>
)

const onClick = () => {
  window.open(url)
}

export const JoinButton = () => (
  <div className="join-button">
    <Button
      type="primary"
      shape="round"
      icon="form"
      size="large"
      onClick={onClick}
    >
      Join Bread &amp; Roses
    </Button>
  </div>
)
