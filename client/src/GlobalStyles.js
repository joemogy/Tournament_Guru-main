import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  font-family: "Duru Sans", sans-serif;
}

:root {
  --bodyBg: #18122B;
  --mainBg: #393053;
  --mainColor: #443C68;
  --txtColor: #F1FFFA;
  --purple: #393053;
  --orange: #D5C7BC;
  --white: #fff;
  --black: #000;
  --green: #4CAF50;
  --red: #DB190C;

  --fontFamily: 'Roboto', sans-serif;

  --fontSizeNormal: 1.125rem;
  --fontSizeMedium: 1.25rem;
  --fontSizeLarge: 1.5625rem;

  --sideBarWidth: 384px;
  --sideBarLogoHeight: 171px;
  --spacing: 48px;
  --mobileSpacing: 24px;
  --borderRadius: 30px;

  --mobile-width: 600px;
  --tablet-width: 1366px;
}

.gradient {
  background: rgb(58, 99, 144);
  background: linear-gradient(
    90deg,
    rgba(58, 99, 144, 1) 8%,
    rgba(90, 140, 182, 1) 31%,
    rgba(35, 71, 138, 1) 52%,
    rgba(27, 55, 125, 1) 58%
  );
}

body {
  background-color: #18122B;
  margin: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.125rem
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

`