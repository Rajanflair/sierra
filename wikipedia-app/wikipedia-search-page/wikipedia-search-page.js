
Polymer(
{
  is: "wikipedia-search-page",
  properties:
  {
    searchToken:
    {
      type: String
    },
    language:
    {
      type: String,
      notify: true
    }
  },
  behaviors:
  [
    Polymer.AppLocalizeBehavior
  ],
  attached: function()
  {
    this.loadResources(this.resolveUrl('wikipedia-search-page-locales.json'));
  },
  ready: function()
  {
    this.$["search-input"].addEventListener("input", (event) =>
    {
      let searchToken = event.target.value;
      this.$["wikipedia-search-request"].searchToken = searchToken;
    });

    this.$["wikipedia-search-request"].addEventListener("response", (event) =>
    {
      let searchHits = event.detail.searchHits;
      this.$["wikipedia-search-list"].searchHits = searchHits;
    });
  }
});
