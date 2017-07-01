import { MadMarketingUIPage } from './app.po';

describe('mad-marketing-ui App', () => {
  let page: MadMarketingUIPage;

  beforeEach(() => {
    page = new MadMarketingUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
