# Lock Screen Test App

This app was created as a technical test for a role of fullstack developer with frontend focus.  
The goal was to build a lock screen for a web app using React, with an emphasis on writing clean, modular code using CSS and TypeScript.

📋 Some of the requirements were: 
- The app should display a keypad with numbers from 0 to 9 and "X";
- The user should be able to input a 4 digits passcode using the keypad;
- Once all digits are inputed the passcode should be validate against a predefined passcode;
- Pressing the X button should delete the last digit;
- A success screen should be displayed if the passcode is correct;
- An error message should be displayed if the passcode is incorrect.

🖼️ A Figma design file was provided showing the layout and screens required.

✅ A deployed version is available here: https://lock-screen-test-app.vercel.app/ 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
