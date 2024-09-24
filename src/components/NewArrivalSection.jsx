import Card from "./Card";

const NewArrivalSection = ({ items, onClickCard }) => {
  return (
    <div className=" mt-20">
      <div className="flex-center">
        <div className="text-4xl font-extrabold bg-[url('./assets/lines.png')] bg-center dark:text-white">
          NEW ARRIVALS
        </div>
      </div>

      <div className="justify-between mt-10 grid grid-cols-1 gap-y-24 md:grid-cols-2 xl:grid-cols-3 gap-x-6">
        {items.map((item) => (
          <Card key={item.id} item={item} onClick={onClickCard} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivalSection;
