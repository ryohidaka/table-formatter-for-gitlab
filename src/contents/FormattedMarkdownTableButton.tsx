import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

import { CS_MATCHES, FORMAT_BUTTON } from "~constants"
import { formatMarkdownTable, getIssuableFormElement } from "~utils"

// Configuration for PlasmoCS
export const config: PlasmoCSConfig = {
  matches: CS_MATCHES
}

// Function to get the inline anchor
export const getInlineAnchor: PlasmoGetInlineAnchor = () => {
  // Returns the anchor element for the format button
  return document.querySelector(FORMAT_BUTTON.anchor)
}

// Function to get the shadow host ID
export const getShadowHostId = () => {
  // Returns the host ID for the format button
  return FORMAT_BUTTON.hostId
}

// Component to format markdown table
const FormattedMarkdownTableButton = () => {
  // Function to format and overwrite the markdown table
  const formatAndOverwrite = () => {
    // Get the text field element
    const textField = getIssuableFormElement()
    // Format the markdown table
    const formattedMarkdownString = formatMarkdownTable(textField.value)
    // Overwrite the text field value with the formatted markdown string
    textField.value = formattedMarkdownString
  }
  // Return the button element
  return (
    <button
      style={{
        borderRadius: 4,
        padding: 4
      }}
      onClick={formatAndOverwrite}>
      Format Table
    </button>
  )
}

// Export the FormattedMarkdownTableButton component as default
export default FormattedMarkdownTableButton
