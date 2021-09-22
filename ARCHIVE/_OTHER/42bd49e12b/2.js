function nonescapedRE(match, flags) {
  return new RegExp(`(?<!\\\\)(\\\\\\\\)*${match}`, flags);
}

function escapedRE(match, flags) {
  return new RegExp(`(?<!\\\\)(\\\\)(\\\\\\\\)*${match}`, flags);
}
