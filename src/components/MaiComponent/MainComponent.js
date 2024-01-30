import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({ images, centerImage, background }) => {
  const calculatePosition = (index, totalImages, radius) => {
    const angle = (360 / totalImages) * index;
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };

  let wrapperSize = 550; // Set the desired size of the circular wrapper
  const radius = wrapperSize / 2;

  const renderImages = (imagesToRender, isSecondSet) => {
    return imagesToRender.map((img, index) => {
      const totalImages = imagesToRender.length;
      const baseRadius = isSecondSet ? radius * 1 : radius * 0.58;
      const { x, y } = calculatePosition(index, totalImages, baseRadius);
      const transformStyle = {
        transform: `translate(${x}px, ${y}px)`,
      };

      return (
        <li key={index} style={transformStyle}>
          <div className={[styles.imageContainer].join(" ")}>
            <img src={img} alt="#" />
          </div>
        </li>
      );
    });
  };

  const firstSet = images.slice(0, 6);
  const secondSet = images.slice(6);

  return (
    <div className={styles.mainWrapper}>
      <div
        className={styles.wrapper}
        style={{ width: wrapperSize, height: wrapperSize, borderRadius: "50%" }}
      >
        <div className={styles.orbit}>
          <ul>
            {renderImages(firstSet, false)}
            {secondSet.length > 0 && (
              <ul className={styles.secondOrbit}>
                {renderImages(secondSet, true)}
              </ul>
            )}
          </ul>
        </div>
        <div className={styles.centerImageContainer}>
          <div className={styles["center-image"]}>
            <img src={centerImage} alt="" />
          </div>
        </div>
        <div className={styles.background}>{background}</div>
      </div>
    </div>
  );
};

export default MainComponent;
