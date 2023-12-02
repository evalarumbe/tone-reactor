module.exports = {
  "extends": "next/core-web-vitals",
  "rules": {
    "react/no-unescaped-entities": [
      "error",
      { "forbid": [">", "}", "\"", "&"] } // Enforce escaping for all special chars except apostrophes
    ]
  }
};
