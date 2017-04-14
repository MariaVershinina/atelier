import { AtelierPage } from './app.po';

describe('atelier App', function() {
  let page: AtelierPage;

  beforeEach(() => {
    page = new AtelierPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
