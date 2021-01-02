import errorImage from '../404-pages.jpg';
import '../css/styles.css';

export default function ImageFallbackView({ message }) {
  return (
    <div role="alert" style={{ textAlign: 'center' }}>
      {message}
      <img
        src={errorImage}
        width="100%"
        alt="crying girl"
        style={{ textAlign: 'center' }}
      />
    </div>
  );
}
