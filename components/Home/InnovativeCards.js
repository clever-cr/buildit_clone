function InnovativeCards(props) {
  return (
    <>
      {props.cards.map((card, index) => (
        <div key={index} className="space-y-4">
          <picture>
            <img src={card.img} alt={card.description} />
          </picture>

          <h2 className="font-bold text-primary text-2xl">{card.title}</h2>
          <p className="text-primary font-sans font-semibold text-base max-w-[268px]">
            {card.description}
          </p>
        </div>
      ))}
      ;
    </>
  );
}
export default InnovativeCards;
