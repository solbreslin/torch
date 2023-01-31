import React from 'react';
import { GlobalHeader } from './features/GlobalHeader/GlobalHeader';
import Gallery from './features/Gallery/Gallery';
import data from './data/data.json';
import { ListingContent } from './features/ListingContent/ListingContent';
import { RelatedListings } from './features/RelatedListings/RelatedListings';
import { ListingPageHeader } from './features/ListingPageHeader/ListingPageHeader';

function App() {
  return (
    <>
      <GlobalHeader />
      <main>
        <section>
          <ListingPageHeader id={data.id} />

          <Gallery feature_image={data.feature_image} images={data.images} />

          <ListingContent data={data} />

          <RelatedListings />
        </section>
      </main>
    </>
  );
}

export default App;
