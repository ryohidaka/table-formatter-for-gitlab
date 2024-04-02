import { ISSUABLE_FORM } from "~constants"

/**
 * This function retrieves the text field element from the document.
 * @returns {HTMLTextAreaElement} The text field element.
 */
export const getIssuableFormElement = (): HTMLTextAreaElement => {
  // Query the document for the text field element using the ISSUABLE_FORM selector.
  const textField = document.querySelector(ISSUABLE_FORM) as HTMLTextAreaElement

  // Return the text field element.
  return textField
}
