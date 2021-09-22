# Unicode: flag “u” and class

JavaScript uses [Unicode encoding](https://en.wikipedia.org/wiki/Unicode) for strings. Most characters are encoded with 2 bytes, but that allows to represent at most 65536 characters.

That range is not big enough to encode all possible characters, that’s why some rare characters are encoded with 4 bytes, for instance like `𝒳` (mathematical X) or `😄` (a smile), some hieroglyphs and so on.

Here are the Unicode values of some characters:

<table><thead><tr class="header"><th>Character</th><th>Unicode</th><th>Bytes count in Unicode</th></tr></thead><tbody><tr class="odd"><td>a</td><td><code>0x0061</code></td><td>2</td></tr><tr class="even"><td>≈</td><td><code>0x2248</code></td><td>2</td></tr><tr class="odd"><td>𝒳</td><td><code>0x1d4b3</code></td><td>4</td></tr><tr class="even"><td>𝒴</td><td><code>0x1d4b4</code></td><td>4</td></tr><tr class="odd"><td>😄</td><td><code>0x1f604</code></td><td>4</td></tr></tbody></table>

So characters like `a` and `≈` occupy 2 bytes, while codes for `𝒳`, `𝒴` and `😄` are longer, they have 4 bytes.

Long time ago, when JavaScript language was created, Unicode encoding was simpler: there were no 4-byte characters. So, some language features still handle them incorrectly.

For instance, `length` thinks that here are two characters:

`js run alert('😄'.length); // 2 alert('𝒳'.length); // 2`

…But we can see that there’s only one, right? The point is that `length` treats 4 bytes as two 2-byte characters. That’s incorrect, because they must be considered only together (so-called “surrogate pair”, you can read about them in the article <a href="info:string" class="uri">info:string</a>).

By default, regular expressions also treat 4-byte “long characters” as a pair of 2-byte ones. And, as it happens with strings, that may lead to odd results. We’ll see that a bit later, in the article <a href="info:regexp-character-sets-and-ranges" class="uri">info:regexp-character-sets-and-ranges</a>.

Unlike strings, regular expressions have flag `pattern:u` that fixes such problems. With such flag, a regexp handles 4-byte characters correctly. And also Unicode property search becomes available, we’ll get to it next.

## Unicode properties

Every character in Unicode has a lot of properties. They describe what “category” the character belongs to, contain miscellaneous information about it.

For instance, if a character has `Letter` property, it means that the character belongs to an alphabet (of any language). And `Number` property means that it’s a digit: maybe Arabic or Chinese, and so on.

We can search for characters with a property, written as `pattern:\p{…}`. To use `pattern:\p{…}`, a regular expression must have flag `pattern:u`.

For instance, `\p{Letter}` denotes a letter in any language. We can also use `\p{L}`, as `L` is an alias of `Letter`. There are shorter aliases for almost every property.

In the example below three kinds of letters will be found: English, Georgian and Korean.

\`\`\`js run let str = “A ბ ㄱ”;

alert( str.match(//gu) ); // A,ბ,ㄱ alert( str.match(//g) ); // null (no matches, doesn’t work without the flag “u”) \`\`\`

Here’s the main character categories and their subcategories:

- Letter `L`:
  - lowercase `Ll`
  - modifier `Lm`,
  - titlecase `Lt`,
  - uppercase `Lu`,
  - other `Lo`.
- Number `N`:
  - decimal digit `Nd`,
  - letter number `Nl`,
  - other `No`.
- Punctuation `P`:
  - connector `Pc`,
  - dash `Pd`,
  - initial quote `Pi`,
  - final quote `Pf`,
  - open `Ps`,
  - close `Pe`,
  - other `Po`.
- Mark `M` (accents etc):
  - spacing combining `Mc`,
  - enclosing `Me`,
  - non-spacing `Mn`.
- Symbol `S`:
  - currency `Sc`,
  - modifier `Sk`,
  - math `Sm`,
  - other `So`.
- Separator `Z`:
  - line `Zl`,
  - paragraph `Zp`,
  - space `Zs`.
- Other `C`:
  - control `Cc`,
  - format `Cf`,
  - not assigned `Cn`,
  - private use `Co`,
  - surrogate `Cs`.

So, e.g. if we need letters in lower case, we can write `pattern:\p{Ll}`, punctuation signs: `pattern:\p{P}` and so on.

There are also other derived categories, like: - `Alphabetic` (`Alpha`), includes Letters `L`, plus letter numbers `Nl` (e.g. Ⅻ - a character for the roman number 12), plus some other symbols `Other_Alphabetic` (`OAlpha`). - `Hex_Digit` includes hexadecimal digits: `0-9`, `a-f`. - …And so on.

Unicode supports many different properties, their full list would require a lot of space, so here are the references:

- List all properties by a character: <a href="https://unicode.org/cldr/utility/character.jsp" class="uri">https://unicode.org/cldr/utility/character.jsp</a>.
- List all characters by a property: <a href="https://unicode.org/cldr/utility/list-unicodeset.jsp" class="uri">https://unicode.org/cldr/utility/list-unicodeset.jsp</a>.
- Short aliases for properties: <a href="https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt" class="uri">https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt</a>.
- A full base of Unicode characters in text format, with all properties, is here: <a href="https://www.unicode.org/Public/UCD/latest/ucd/" class="uri">https://www.unicode.org/Public/UCD/latest/ucd/</a>.

### Example: hexadecimal numbers

For instance, let’s look for hexadecimal numbers, written as `xFF`, where `F` is a hex digit (0..1 or A..F).

A hex digit can be denoted as `pattern:\p{Hex_Digit}`:

\`\`\`js run let regexp = /x/u;

alert(“number: xAF”.match(regexp)); // xAF \`\`\`

### Example: Chinese hieroglyphs

Let’s look for Chinese hieroglyphs.

There’s a Unicode property `Script` (a writing system), that may have a value: `Cyrillic`, `Greek`, `Arabic`, `Han` (Chinese) and so on, [here’s the full list](<https://en.wikipedia.org/wiki/Script_(Unicode)>).

To look for characters in a given writing system we should use `pattern:Script=<value>`, e.g. for Cyrillic letters: `pattern:\p{sc=Cyrillic}`, for Chinese hieroglyphs: `pattern:\p{sc=Han}`, and so on:

\`\`\`js run let regexp = //gu; // returns Chinese hieroglyphs

let str = `Hello Привет 你好 123_456`;

alert( str.match(regexp) ); // 你,好 \`\`\`

### Example: currency

Characters that denote a currency, such as `$`, `€`, `¥`, have Unicode property `pattern:\p{Currency_Symbol}`, the short alias: `pattern:\p{Sc}`.

Let’s use it to look for prices in the format “currency, followed by a digit”:

\`\`\`js run let regexp = /gu;

let str = `Prices: $2, €1, ¥9`;

alert( str.match(regexp) ); // $2,€1,¥9 \`\`\`

Later, in the article <a href="info:regexp-quantifiers" class="uri">info:regexp-quantifiers</a> we’ll see how to look for numbers that contain many digits.

## Summary

Flag `pattern:u` enables the support of Unicode in regular expressions.

That means two things:

1.  Characters of 4 bytes are handled correctly: as a single character, not two 2-byte characters.
2.  Unicode properties can be used in the search: `\p{…}`.

With Unicode properties we can look for words in given languages, special characters (quotes, currencies) and so on.
