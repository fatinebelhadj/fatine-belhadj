import { AngMatPage } from './app.po';

describe('ang-mat App', function() {
  let page: AngMatPage;

  beforeEach(() => {
    page = new AngMatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
