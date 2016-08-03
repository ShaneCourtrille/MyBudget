import { MybudgetPage } from './app.po';

describe('mybudget App', function() {
  let page: MybudgetPage;

  beforeEach(() => {
    page = new MybudgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
