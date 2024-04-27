export default function Icon({ IconName, onShowMenu }) {
  return (
    <IconName onClick={onShowMenu} className=" text-3xl mr-3 cursor-pointer" />
  );
}
