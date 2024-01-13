const DropdownProfile = ({isOpen}: {isOpen: boolean}) => (
  <div className="relative inline-block text-black absolute right-[200px] top-1">
    <div className="absolute bg-white min-w-[280px] max-h-[300px] z-10 px-[16px] py-[16px] overflow-y-auto rounded-xl">
      <ul>
        <li>Личный кабинет</li>
        <li>Выйти</li>
      </ul>
    </div>
  </div>
);

export default DropdownProfile;
