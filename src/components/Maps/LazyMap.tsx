
type Props = {
  src: string;
};

export default function LazyMap({ src }: Props) {
  return (
    <iframe
      src={src}
      className="w-96 h-72"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
