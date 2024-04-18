import { formatMarkdownTable, getIssuableFormElement } from "@/src/utils";

function FormattedMarkdownTableButton() {
  // Function to format and overwrite the markdown table
  const formatAndOverwrite = () => {
    // Get the text field element
    const textField = getIssuableFormElement();
    // Format the markdown table
    const formattedMarkdownString = formatMarkdownTable(textField.value);
    // Overwrite the text field value with the formatted markdown string
    textField.value = formattedMarkdownString;
  };
  // Return the button element
  return (
    <button
      style={{
        borderRadius: 4,
        padding: 4,
      }}
      onClick={formatAndOverwrite}
    >
      Format Table
    </button>
  );
}

export default FormattedMarkdownTableButton;
