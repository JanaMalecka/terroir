import React, { FC } from 'react';

const Varieties: FC = (): JSX.Element => {
  return (
    <>
      <div className="container__content light">
        <h2>Naše odrůdy </h2>
      </div>
      <div className="container__content">
        {' '}
        <h3>TRAMÍN </h3>{' '}
      </div>

      <div className="container__content light">
        <p>
          Tramín je jednou z nejstarších pěstovaných odrůd, podílela se na
          vzniku mnoha klasických evropských odrůd révy a je oblíbeným partnerem
          při šlechtění nových odrůd. Výrazně reaguje na stanoviště a tak, i
          když má své typické aroma, výrazně do něj přispívá terroir, a proto
          není nikdy stejný a nezevšední. Typová vína Tramínu jsou ve vůni
          osobitá, snadno rozpoznatelná, mají intenzívní kořenitě medové až
          bezové vůně a koncentrované, kořenité chuti. Ve vůni a chuti můžeme
          hledat čajovou růži, koření, med, hrozinky, tropické ovoce,
          kompotované ovoce, meruňky, květ fialky či pivoňky, zázvor, skořici,
          lékořici, karamel, liči, mango, mučenku, grapefruit, květ černého
          bezu. Pocit na patře a v ústech je jemný, plný, bohatý, hřejivě
          alkoholický, hutný až olejnatý. Ležením v láhvi se aroma zušlechťuje.
        </p>
        <div className="container__content">
          <h2>RULANDSKÉ MODRÉ</h2>{' '}
        </div>
        <div className="container__content light">
          <p>
            {' '}
            Mezinárodně používaný název Pinot noir je starobylá odrůda révy
            vinné, pocházející pravděpodobně z oblasti Burgundska. Odrůda je
            tradičně používána k výrobě červených a růžových vín, ale je též
            jednou ze tří odrůd povolených k výrobě francouzských klasických
            šumivých vín v oblasti Champagne. Mezinárodní název skupiny „Pinot“
            vychází z francouzského slova „pin“, v překladu „pinie, borovice“.
            Hrozen odrůd této skupiny je totiž poměrně malý a velmi kompaktní,
            svým vzhledem opravdu může připomínat ještě uzavřenou šišku borovice
            pinie. Přídomek „noir“, tedy česky černý, označuje ve Francii obecně
            modré odrůdy. Vína z této odrůdy ohromují svou plností, která se
            zráním zvyšuje. Velmi dobře se hodí k dlouhodobé archivaci. Typická
            barva vína je bledě rubínová až cihlově červená, s oranžovým až
            nazlátlým okrajem u sklenky, ve vůni jsou ovocné, hořkomandlové a
            kořenité tóny, chuť je plná, víno má nízký obsah kyselin, velmi
            jemné třísloviny a hebkost při klouzání po jazyku. Kvalitu a
            odrůdový charakter získává víno převážně zráním v dubových sudech a
            delším ležením na láhvi.
          </p>
        </div>
      </div>
    </>
  );
};

export default Varieties;
