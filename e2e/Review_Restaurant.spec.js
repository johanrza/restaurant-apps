/* eslint-disable no-undef */
Feature('Review Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('filling restaurant review', async ({ I }) => {
  I.waitForElement('.restaurant-item__title a', 10);

  I.seeElement('.restaurant-item__title a');
  I.click(locate('.restaurant-item__title a').first());

  I.waitForElement('.comment-box', 10);
  I.seeElement('.comment-box');

  I.seeElement('#input-name');
  I.fillField('#input-name', 'E2E Review');

  I.seeElement('#input-comment');
  I.fillField('#input-comment', 'Example');

  I.seeElement('#buttonSubmit');
  I.click('#buttonSubmit');

  I.waitForElement('.swal2-modal', 10);
  I.seeElement('.swal2-modal');
});
