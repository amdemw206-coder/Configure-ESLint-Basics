## Project Title: AD 311 Configuring ESLint in a Node.js Project
#### By: Amde Wubshet

### Steps I followed: 
- 1.  Create a new directory for your project. Navigate to this directory in your terminal. Run npm init and follow the prompts to create a new package.json file.
- 2. Run the command npm init @eslint/config in your project directory. Follow the setup prompts to install and configure ESLint.
- 3. After configuration, an .eslintrc.{js,yml,json} file will be created in your project directory.
- 4. Change the rules for semi (semicolon usage) and quotes (quotation marks) to fit your coding style preferences. Remember, the options are "off" (or 0), "warn" (or 1), and "error" (or 2).
- 5. Create a JavaScript file in your project, for example, yourfile.js. Run ESLint on this file using npx eslint yourfile.js.

### Issues Resolved? 
- For step 3, the “eslintrc” file never got created in the main directory. It was instead a .mjs file named “eslint.config.” It also didn’t have a rules block of code, I had to create that manually.

### Observations after using ESLint: 
- It’s pretty useful when you want to easily double check your lines of code for the usage of semicolons or quotes. It makes me wonder how much more useful it can be compared to feeding a LLM an input prompt to check your script for those things.

### Screenshot of ESLint Running (using a random script):
![alt text](https://github.com/amdemw206-coder/Configure-ESLint-Basics/blob/main/Screenshots/ESLintTest.PNG)

