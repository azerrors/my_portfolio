function Typography({ type, style, content }) {
  const styles = {
    header_primary_lg: `uppercase dark:text-stone-200 tracking-widest font-semibold md:text-3xl text-xl transition-all duration-300  ${style}`,
    header_primary_md: `uppercase  dark:text-stone-200 tracking-widest font-semibold md:text-lg text-sm transition-all duration-300  ${style}`,
    header_primary_sm: `uppercase  dark:text-stone-200 tracking-widest font-semibold md:text-sm text-sm transition-all duration-300  ${style}`,
    header_primary_xs: `uppercase  dark:text-stone-200 tracking-widest font-semibold md:text-xs text-xs transition-all duration-300  ${style}`,
    text_secondary_lg: `uppercase  dark:text-stone-400 tracking-widest text-stone-500 font-semibold md:text-2xl text-xl transition-all duration-300  ${style}`,
    text_secondary_md: `uppercase  dark:text-stone-400 tracking-widest text-stone-500 font-semibold md:text-md text-sm transition-all duration-300  ${style}`,
    text_secondary_sm: `uppercase  dark:text-stone-400  tracking-widest text-stone-500 font-semibold md:text-sm text-sm transition-all duration-300  ${style}`,
    text_primary_lg: `uppercase  dark:text-stone-200 tracking-widest  font-semibold text-2xl transition-all duration-300  ${style}`,
    nav: "hover:border-b-2  dark:hover:border-stone-200  dark:text-stone-200 uppercase tracking-widest cursor-pointer font-medium transition-all duration-200 text-xs md:text-lg  border-stone-800 hover:skew-x-3 hover:skew-y-1",
    side_nav: "hover:border-b-2  dark:hover:border-stone-200  dark:text-stone-200 uppercase tracking-widest cursor-pointer font-medium transition-all duration-200 text-xl md:text-2xl  border-stone-800 hover:skew-x-3 hover:skew-y-1",
  };

  // if (type === "header_primary_md") {
  //   return <div className={styles[type]}>{content}</div>;
  // }
  // if (type === "text_secondary_md") {
  //   return <div className={styles[type]}>{content}</div>;
  // }
  // if (type === "text_secondary_sm") {
  //   return <div className={styles[type]}>{content}</div>;
  // }
  // if (type === "text_primary_lg") {
  //   return <div className={styles[type]}>{content}</div>;
  // }

  // if (type === "nav") {
  //   return <div className={styles[type]}>{content}</div>;
  // }
  return <div className={styles[type]}>{content}</div>;
}

export default Typography;
