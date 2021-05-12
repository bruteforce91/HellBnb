import React from "react";
import {
  Wrap,
  Banner,
  TitleCookie,
  ParagraphCookie,
  BtnCookies,
  WrapContentCenter,
  LinkPolicy,
  Icon,
} from "./BannerCookies.element";

function BannerCookies({ isBannerVisible, setVisibleBanner }) {
  return (
    <div>
      {!isBannerVisible ? (
        <Wrap>
          <Banner>
            <TitleCookie>
              La tua privacy <Icon className="lock icon" />
            </TitleCookie>
            <ParagraphCookie>
              Utilizziamo cookie e tecnologie simili per offrire contenuti su
              misura, personalizzare e valutare gli annunci pubblicitari e
              offrire un`esperienza di utilizzo migliore.Cliccando su OK o
              attivando un`opzione in Preferenze dei cookie, accetti quanto
              indicato come specificato nella nostra
              <LinkPolicy href="https://www.airbnb.it/help/article/2866/informativa-sui-cookie-di-airbnb">
                {" "}
                Politica sui cookie
              </LinkPolicy>
              . Per modificare le preferenze o revocare il consenso, aggiorna le
              tue Preferenze dei cookie.
            </ParagraphCookie>
            <WrapContentCenter>
              <BtnCookies accept="accept" onClick={() => setVisibleBanner()}>
                OK
              </BtnCookies>
              <BtnCookies preference>Preferenze dei Cookies</BtnCookies>
            </WrapContentCenter>
          </Banner>
        </Wrap>
      ) : (
        <></>
      )}
    </div>
  );
}

export default BannerCookies;
