export default function FieldGroupings({ legendText, children }) {
  if (!legendText) {
    return <>{children}</>;
  }
  return (
    <fieldset>
      <legend>{legendText}</legend>
      {children}
    </fieldset>
  );
}
