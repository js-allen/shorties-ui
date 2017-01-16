import { ShortiesUiPage } from './app.po';

describe('shorties-ui App', function() {
  let page: ShortiesUiPage;

  beforeEach(() => {
    page = new ShortiesUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
