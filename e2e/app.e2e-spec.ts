import { HourlyPage } from './app.po';

describe('hourly App', () => {
  let page: HourlyPage;

  beforeEach(() => {
    page = new HourlyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
