import { test, expect } from '@playwright/test';


test ('Simple form demo', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/');
  await page.getByRole('link', { name: 'Simple Form Demo' }).click();
console.log(await page.url());
const url= await expect(page.url()).toContain('simple-form-demo');
  
  let string = 'Welcome to LambdaTest';
 const message= await page.getByPlaceholder('Please enter your Message', { exact: true }).inputValue();
 // const text=await page.getByRole('textbox', { name: 'Please enter your Message' }).allTextContents();
  console.log(message);
  await page.getByRole('textbox', { name: 'Please enter your Message' }).fill(string);
  await page.getByRole('button', { name: 'Get Checked Value' }).click();
await page.locator('#message:visible').isVisible();


//await page.pause();
})
