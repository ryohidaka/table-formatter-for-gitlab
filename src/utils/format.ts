import { CliPrettify } from "markdown-table-prettify";
import { marked } from "marked";

/**
 * This function formats a markdown table string.
 * It uses the `marked` library to tokenize the markdown string,
 * then it uses the `CliPrettify` library to format each table token.
 * Finally, it joins all the tokens back into a single string.
 *
 * @param {string} markdownString - The markdown string to format. Default is an empty string.
 * @returns {string} The formatted markdown string.
 */
export const formatMarkdownTable = (markdownString: string = ""): string => {
  // Tokenize the markdown string using the `marked` library
  const tokens = marked.lexer(markdownString);

  // Format each table token using the `CliPrettify` library
  const formattedTokens = tokens.map((token) => {
    if (token.type !== "table") return token;

    const formattedToken = CliPrettify.prettify(token.raw);
    return { ...token, raw: formattedToken };
  });

  // Join all the tokens back into a single string
  const formattedMarkdownString = formattedTokens
    .map((token) => token.raw)
    .join("");

  return formattedMarkdownString;
};
