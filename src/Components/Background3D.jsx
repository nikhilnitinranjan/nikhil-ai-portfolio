const Background3D = () => (
  <div className="background-3d" aria-hidden="true">
    <div className="background-3d__glow background-3d__glow--one" />
    <div className="background-3d__glow background-3d__glow--two" />
    <div className="background-3d__grid" />
    <div className="background-3d__scene">
      <span className="background-3d__cube background-3d__cube--one" />
      <span className="background-3d__cube background-3d__cube--two" />
      <span className="background-3d__ring background-3d__ring--one" />
      <span className="background-3d__ring background-3d__ring--two" />
    </div>
  </div>
);

export default Background3D;
