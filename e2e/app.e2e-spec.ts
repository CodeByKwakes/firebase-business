import { BusinescontactsPage } from './app.po';

describe('businescontacts App', function() {
  let page: BusinescontactsPage;

  beforeEach(() => {
    page = new BusinescontactsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
