module.exports = {
    branches: ['main'],
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      ["@semantic-release/git",{
        "assets": ["src/db/*.txt","src/db/*.js"],
        "message": "chore(release): ${nextRelease.version} [skip.ci]\n\n${nextRelease.notes}"
      }],
      "@semantic-release/github"
    ],
  };