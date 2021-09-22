// Template Literals
var box = jsx`
  <${Box}>
    ${
      shouldShowAnswer(user)
        ? jsx`<${Answer} value=${false}>no</${Answer}>`
        : jsx`
        <${Box.Comment}>
         Text Content
        </${Box.Comment}>
      `
    }
  </${Box}>
`;
