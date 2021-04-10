function ArbOutputs(props) {
  const convertToDecimalOdds = (odds) => {
    if (odds < 0) {
      return Math.round(1000 * (1 - 100 / odds)) / 1000;
    } else {
      return Math.round(1000 * (1 + odds / 100)) / 1000;
    }
  };

  const calcArbPercent = (decOdds) => {
    return Math.round((1000 * 1) / decOdds) / 1000;
  };

  const calcFavStake = (o1, o2) => {
    return Math.round((100 * 100) / (1 + o1 / o2)) / 100;
  };

  const favDec = convertToDecimalOdds(-1 * props.fav);
  const favArb = calcArbPercent(favDec);
  const dogDec = convertToDecimalOdds(props.dog);
  const dogArb = calcArbPercent(dogDec);
  const profit = Math.round(10000 * (1 - favArb - dogArb)) / 100;
  const favStake = calcFavStake(favDec, dogDec);
  const dogStake = Math.round(100 * (100 - favStake)) / 100;

  return (
    <>
      <p>
        -{props.fav} vs +{props.dog}
        {props.debug ? (
          <>
            <br />
            fav: -{props.fav} / {favDec} / {favArb}
            <br />
            dog: {props.dog} / {dogDec} / {dogArb}
          </>
        ) : (
          <></>
        )}
      </p>
      {profit > 0 ? (
        <div>
          🤑 +{profit}%
          <br />
          bet {favStake} on the favorite
          <br />
          bet {dogStake} on the underdog
        </div>
      ) : (
        `😭 ${profit}%`
      )}
    </>
  );
}

export default ArbOutputs;
