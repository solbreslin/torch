import React, { useEffect } from 'react';
import { GlobalHeader } from './features/GlobalHeader/GlobalHeader';
import Gallery from './features/Gallery/Gallery';
import data from './data/data.json';
import { ListingContent } from './features/ListingContent/ListingContent';
import { RelatedListings } from './features/RelatedListings/RelatedListings';
import { ListingPageHeader } from './features/ListingPageHeader/ListingPageHeader';
import { pageTitle } from './utils';

function App() {
  useEffect(() => {
    document.title = pageTitle(data.title, data.price.pcm);
  }, []);

  const { id, feature_image, images } = data;

  return (
    <>
      <GlobalHeader />
      <main>
        <ListingPageHeader id={id} />

        <section>
          <Gallery feature_image={feature_image} images={images} />
        </section>

        <section>
          <ListingContent data={data} />
        </section>

        {/* TODO <RelatedListings /> */}
      </main>
    </>
  );
}

export default App;
