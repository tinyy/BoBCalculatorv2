import { Bobcalculatorv2Page } from './app.po';

describe('bobcalculatorv2 App', function() {
  let page: Bobcalculatorv2Page;

  beforeEach(() => {
    page = new Bobcalculatorv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
