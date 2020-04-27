import React from "react";
import styles from "./Toogle.module.css";
import { useSelector, useDispatch } from "react-redux";
import { services } from "./../../../services/services";
import { pointUser } from "../../../redux/auth/operations";

function Toogle({ chooseAwards, card, collectAwards }) {
  const { userPoint, userToken, userId } = useSelector((state) => state.user);
  const [updatedPoints, setUpdatedPoints] = React.useState(userPoint);
  const user = useSelector((state) => state.user);
  // const shit = services
  //   .getCurrentUser(userToken)
  //   .then((data) => console.log("user", data));
  const [on, setOnState] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      const shit = await services.getCurrentUser(userToken);
      // console.log('shit', shit)
      await setUpdatedPoints(shit.data.user.points);
    })();
  }, [on]);

  React.useEffect(() => {
    (async () => {
      if (on) {
        const calculatingPoints =
          Number(updatedPoints) - Number(card.taskPoints);
          // console.log('calculatingPoints', calculatingPoints)
       await setUpdatedPoints(calculatingPoints);
      } else {
        const calculatingPoints =
          Number(updatedPoints) + Number(card.taskPoints);
       await setUpdatedPoints(calculatingPoints);
      }
      await collectAwards(updatedPoints);
      await dispatch(pointUser(updatedPoints))
      // console.log("Calculation", updatedPoints);
    })();
  }, [on]);

  const toggle = () => {
    if (userPoint >= card.taskPoints) {
      setOnState((o) => !o);

      chooseAwards(card.title, card.imgName, on);
    } else {
      alert("ИДИ ПОЛЫ ДРАИТЬ, ПАДЛА МЕЛКАЯ");
    }
  };

  return (
    <button className={on ? styles.on : styles.off} onClick={toggle}>
      <span className={styles.done}>&#10004;</span>
      <span className={styles.yes}>!</span>
      <span className={styles.pin} />
    </button>
  );
}

export default Toogle;
