import {  test,expect} from '@playwright/test';
import draganddrop  from "..//Pages/draganddrop.spec";




test ('Drag the slider', async ({ page }) =>{

  const sliderPage = new draganddrop(page);

  await sliderPage.navigate();
  await sliderPage.openSliderPage();
  await sliderPage.setSliderValue('15');
  await sliderPage.setSliderValue('95');
 await sliderPage.verifySliderValue('95');
 


});