const Modal = (): JSX.Element => {
  return (
    <div className="modal-body">
      <h5 className="mb-4">
        Senzorické vlastnosti a technologické požadavky pro jednotlivé odrůdy:
      </h5>{' '}
      <h5 className="mb-2">RULANDSKÉ MODRÉ </h5>
      <h6 className="fst-italic mb-4">
        Typické rulandové, odrůdové, komplexní s jemným projevem po zrání v
        sudu.
      </h6>{' '}
      <ul className="mb-5">
        <li className="mb-3">
          víno musí mít obsah zbytkového cukru (fruktóza + glukóza) maximálně 4
          g/l
        </li>
        <li className="mb-3">
          víno musí mít obsah alkoholu minimálně 12,5 % obj.
        </li>
        <li className="mb-3">víno musí zrát minimálně 12 měsíců v sudech</li>
        <li className="mb-3">musí být provedena jablečno-mléčná fermentace</li>
        <li className="mb-3">
          víno musí zrát na jemných kalech minimálně 120 dní od konce fermentace
          nebo 150 dní od sklizně
        </li>
        <li className="mb-3">
          prodej vín je možný nejdříve po 19 měsících od 1. října roku sklizně
          hroznů
        </li>
        <li className="mb-3">
          při využití nových vypalovaných sudů pro maximálně 33 % celkového
          objemu vína, je uvedení vín na trh pod označením Terroir Čejkovice
          možné nejdříve po 19 měsících od 1. října roku sklizně hroznů
        </li>
        <li className="mb-3">
          při využití nových vypalovaných sudů pro více než 33 % celkového
          objemu vína, je uvedení vín na trh pod označením Terroir Čejkovice
          možné nejdříve po 31 měsících od 1. října roku sklizně hroznů{' '}
        </li>
      </ul>
      <h5>TRAMÍN</h5>
      <h6 className="fst-italic mb-4">Hutné, harmonické a kořenité víno</h6>
      <ul className="mb-5">
        <li className="mb-3">
          víno musí mít obsah zbytkového cukru (fruktóza + glukóza) maximálně 4
          g/l
        </li>
        <li className="mb-3">
          víno musí mít obsah alkoholu minimálně 12,5 % obj.
        </li>
        <li className="mb-3">víno musí zrát minimálně 9 měsíců</li>
        <li className="mb-3">hrozny musí být macerovány minimálně 24 hodin</li>
        <li className="mb-3">
          není povolena výroba technologií „oranžových vín“
        </li>
        <li className="mb-3">
          víno musí zrát na jemných kalech minimálně 120 dní od konce fermentace
          nebo 150 dní od sklizně
        </li>{' '}
        <li className="mb-3">
          prodej vín je možný nejdříve po 19 měsících od 1. října roku sklizně
          hroznů
        </li>
        <li className="mb-3">
          při využití nových vypalovaných sudů pro maximálně 33 % celkového
          objemu vína, je uvedení vín na trh pod označením Terroir Čejkovice
          možné nejdříve po 19 měsících od 1. října roku sklizně hroznů
        </li>
        <li className="mb-3">
          při využití nových vypalovaných sudů pro více než 33 % celkového
          objemu vína, je uvedení vín na trh pod označením Terroir Čejkovice
          možné nejdříve po 31 měsících od 1. října roku sklizně hroznů
        </li>
      </ul>
      <h5> Závěrečné ustanovení </h5> Autor statutu Terroir Čejkovice -
      Čtvrtečníci - sdružení vinařů Čejkovice, z.s. si vyhrazuje právo, jako
      jediný subjekt, upravovat tento statut a to po projednání v pracovní
      skupině a následném odsouhlasení členskou schůzí spolku.
    </div>
  );
};

export default Modal;
