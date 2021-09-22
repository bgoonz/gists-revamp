\`\`\`js run function ask(question, yes, no) { if (confirm(question)) yes(); else no(); }

ask( “Do you agree?”, *!* () =&gt; alert(“You agreed.”), () =&gt; alert(“You canceled the execution.”) */!* ); \`\`\`

Looks short and clean, right?
