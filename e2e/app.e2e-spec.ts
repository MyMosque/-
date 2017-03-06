import { NggtmPage } from './app.po';

describe('nggtm App', () => {
  let page: NggtmPage;

  beforeEach(() => {
    page = new NggtmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
