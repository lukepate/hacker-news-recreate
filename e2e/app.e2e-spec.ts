import { HackerNewsAppPage } from './app.po';

describe('hacker-news-app App', function() {
  let page: HackerNewsAppPage;

  beforeEach(() => {
    page = new HackerNewsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
