import s from "./NotificationOfChange.module.scss";
type Props = {
  propertyValue: boolean;
};

export const NotificationOfChange = ({ propertyValue }: Props): JSX.Element => {
  const handlerMove = () => {};
  return (
    <>
      {!propertyValue ? null : (
        <div
          className={s.notificationOfChange}
          onPointerMove={() => handlerMove()}
        ></div>
      )}
    </>
  );
};
