export function camelToTitle(str) {
  return (
    // 1) Put a space between a lowercase/number and an uppercase letter
    str
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      // 2) Also handle cases like "XMLHttpRequest" → "XML Http Request"
      .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
      // 3) Capitalize first letter of each word
      .replace(/\b\w/g, (char) => char.toUpperCase())
  );
}
