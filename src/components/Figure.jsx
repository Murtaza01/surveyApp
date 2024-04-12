export default function Figure({ theme, figureLight, figureDark }) {
  return (
    <figure className="w-full pb-2">
      <img
        src={theme === "dark" ? figureDark : figureLight}
        alt=""
        className="w-52 mx-auto"
      />
    </figure>
  );
}
