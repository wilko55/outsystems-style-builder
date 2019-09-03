1. Make changes to outsytems-styles repo
2. Commit and push
3. A webhook triggers a rebuild of outsystems-style-builder app, pulling in the latest styles for correct env
4. Use an @import in Outsystems css (eg `@import url("/styles/base-theme.css")`) to pull in styles

