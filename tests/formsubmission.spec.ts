import {test,expect} from "@playwright/test";
import { formdemo } from '../Pages/formdemo.spec';


test ('Submit the form', async ({ page }) =>{{
 
     const form = new formdemo(page);
await page.goto('https://www.lambdatest.com/selenium-playground/');
await form.link('Input Form Submit');

await form.firstname('Satish');
await form.email('sat@yahoo.com');
await form.password('satu');
await form.company('Spotlight');
await form.website("www.google.com");
await form.country('US')
await form.city ("Atlanta");
await form.address1 ('908 Okemos Road');
await form.address2 ('Stephenson Road');
await form.state ('MI');
await form.zipcode('48084');
await form.submit();

  // Wait for the success message to become visible (removes 'hidden' class)
  const successMessage = page.getByText('Thanks for contacting us, we will get back to you shortly.');
    // Wait for it to not have 'hidden' class
  ///await expect(successMessage).toHaveClass(/^(?!.*hidden).*$/);
    // Then assert it’s visible
  await expect(successMessage).toContainText('Thanks for contacting us, we will get back to you shortly.');
}});

test ('Submit the form without entering anything ', async ({ page }) =>{ {
    
      // Navigate using relative path; baseURL is automatically applied
        const form = new formdemo(page);
await page.goto('https://www.lambdatest.com/selenium-playground/');
await form.link('Input Form Submit');
await form.submit();
const nameInput= await page.getByRole('textbox', { name: 'Name' })
const isMissing = await nameInput.evaluate((el: HTMLInputElement) => el.validity.valueMissing);
expect(isMissing).toBeTruthy();

}});

