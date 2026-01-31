// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('blogs').title('Blogs'),
      S.documentTypeListItem('service').title('Services'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['blogs', 'service'].includes(item.getId()),
      ),
    ])
