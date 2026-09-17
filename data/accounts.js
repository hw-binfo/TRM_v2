// data/accounts.js
// User account definitions for the TRM app.
// NOTE: This file is NOT encrypted. It is protected only by the site-wide data
// password (login.html). Do NOT store highly sensitive information here.
// To add accounts: add an entry and re-deploy. To change the admin password,
// edit the password field below.

var ACCOUNTS = [
  {
    username:    "admin",
    password:    "microbiome9!",   // ← change before production use
    role:        "admin",
    displayName: "Administrator"
  },
  {
    username:    "hyunwookim",
    password:    "microbiome9!",   // ← change before production use
    role:        "Member",
    displayName: "Hyun Woo Kim"
  }
];
