import { SurveyStyled } from './Survey.styled';

const Survey = () => (
  <SurveyStyled>
    <section id={'about'}>
      <iframe
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
        scrolling="no"
        data-image-dimensions="900x600"
        allowFullScreen={true}
        src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2F4yf0jykqlv2.typeform.com%2Fto%2FT49g6Tfg%3Ftypeform-embed%3Doembed%26typeform-medium%3Dembed-oembed%26format%3Djson&amp;display_name=Typeform&amp;url=https%3A%2F%2F4yf0jykqlv2.typeform.com%2Fto%2FT49g6Tfg&amp;image=https%3A%2F%2Fimages.typeform.com%2Fimages%2F2VWurKeiR4R7&amp;key=c6502efcb3c84824bc6c1f27d683be13&amp;type=text%2Fhtml&amp;schema=typeform&amp;wmode=opaque"
        width="900"
        data-embed="true"
        frameBorder="0"
        title="Typeform embed"
        className="embedly-embed"
        height="600"
      ></iframe>
    </section>
  </SurveyStyled>
);

export default Survey;
