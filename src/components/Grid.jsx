// 2-column grid of media cards (videos or images), each with a title and one-line description
const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|avif)$/i;

export default function Grid({ items }) {
  return (
    <div className="media-grid">
      {items.map((item) => (
        <div className="media-card" key={item.src}>
          <h5>{item.title}</h5>
          {item.desc && <p>{item.desc}</p>}
          {IMAGE_EXT.test(item.src) ? (
            <img src={item.src} alt={item.alt ?? item.title} />
          ) : (
            <video controls>
              <source src={item.src} type="video/mp4" />
              Cannot load video.
            </video>
          )}
        </div>
      ))}
    </div>
  );
}
