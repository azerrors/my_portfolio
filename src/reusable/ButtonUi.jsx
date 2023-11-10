function ButtonUi({ type, link, style, content }) {
  const styles = {
    primary_md: `border-2 rounded-lg dark:border-stone-400 dark:text-stone-200 p-3 dark:hover:bg-stone-300 dark:hover:text-stone-900  border-stone-600 transition-all  duration-300 hover:text-stone-100 hover:-translate-y-1 active:translate-y-2 hover:bg-stone-800 uppercase font-semibold cursor-pointer text-sm ${style}`,
    primary_sm: `border-2 rounded-lg p-2  dark:hover:bg-stone-300 dark:hover:text-stone-900  dark:border-stone-400 dark:text-stone-200  border-stone-600 transition-all duration-300 hover:text-stone-100 hover:-translate-y-1 active:translate-y-2 hover:bg-stone-800 uppercase font-semibold cursor-pointer text-xs ${style}`,
    secondary_md: `border-2 rounded-lg p-3 dark:bg-stone-300 dark:text-stone-900  border-stone-600 transition-all bg-stone-800 duration-300 text-stone-100 hover:-translate-y-1 active:translate-y-2 uppercase font-semibold cursor-pointer text-sm ${style}`,
    secondary_sm: `border-2 rounded-lg p-2 dark:bg-stone-300 dark:text-stone-900 border-stone-600 transition-all bg-stone-800 duration-300 text-stone-100 hover:-translate-y-1 active:translate-y-2 uppercase font-semibold cursor-pointer text-xs ${style}`,
  };
  return (
    <a href={link}>
      <button className={styles[type]}>{content}</button>
    </a>
  );
}

export default ButtonUi;
