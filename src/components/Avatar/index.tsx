import { Dispatch, SetStateAction } from "react";
import s from "./Avatar.module.scss";

type Props = {
  selectedThing: {
    [param: string]: string;
  } | null;
  activateStatus: boolean;
  setActivateStatus: Dispatch<SetStateAction<boolean>>;
};
function firstLetter(word: string): string {
  return word[0].toUpperCase();
}
export const Avatar = ({
  selectedThing,
  activateStatus,
  setActivateStatus,
}: Props): JSX.Element => {
  if (selectedThing === null) return <></>;
  return (
    <div className={activateStatus ? undefined : s.statusNotActive}>
      <div
        className={selectedThing.imgUrl ? s.imageThing : s.textThing}
        onClick={() => setActivateStatus((prev) => !prev)}
      >
        <div className={s.notPhoto}>
          {firstLetter(selectedThing.fName) + firstLetter(selectedThing.sName)}
        </div>
      </div>
      <div className={s.nameThing}>
        {selectedThing.fName + " " + selectedThing.sName}
      </div>
    </div>
  );
};
