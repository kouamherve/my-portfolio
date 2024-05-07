export default function Icon({ IconName, onClic }) {
  return (
    <IconName
      onClick={onClic}
      className=" text-3xl mr-3 cursor-pointer md:hidden"
    />
  );
}
