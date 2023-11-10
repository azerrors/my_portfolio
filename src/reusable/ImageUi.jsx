function ImageUi({ type, src, style }) {
  const styles = {
    primary: `rounded-full w-56 md:w-96 ${style}`,
    secondary: `rounded-md w-56 md:w-96 ${style}`,
    triatry: `rounded-2xl w-56 md:w-96 ${style}`,
  };
//   if (type === "primary") {
//     return <img src={src} alt="" className={styles[type]} />;
//   }
//   if (type === "secondary") {
//     return <img src={src} alt="" />;
//   }
  return <img src={src} alt="" className={styles[type]} />;

}

export default ImageUi;
